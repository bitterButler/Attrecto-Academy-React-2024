import React, { useCallback, useEffect, useState } from "react";

import { Page } from "../../components/page/Page";
import { UserModel } from "../../models/user.model";
import { userService } from "../../services/user.service";
import { Button } from "../../components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import classes from "./UsersPage.module.scss";

const UsersPage = () => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const navigate = useNavigate();
  const [viewStyle, setViewStyle] = useState<"table" | "card">("card"); //default will be set to card

  const fetchUsers = useCallback(async () => {
    setUsers(await userService.getUsers());
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const goToUserPage = () => {
    navigate("/user");
  }

  const handleDeleteUser = async (id: string | number) => {
    await userService.deleteUser(id);

    fetchUsers();
  };

  return (
    <Page title="Users">
      <div className="row">
        <div className="d-flex gap-3 w-100 col-12 col-sm-6 col-md-4 col-lg-3">
          <Button color="primary" className="w-100 mb-3" onClick={goToUserPage}>
            Create User
          </Button>
          <Button color="secondary" className="w-100 mb-3" onClick={() => setViewStyle("table")}> Table View </Button>
          <Button color="danger" className="w-100 mb-3" onClick={() => setViewStyle("card")}> Card View </Button>
        </div>

      </div>
      {viewStyle === "card" ? ( //viewStyle === "card" ? (true) : (false /table) 
        <div className="row">
          {users.map(({ id, name, image }) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-1">
              <Link
                to={`/user/${id}`}
                className={classNames("card", classes.UserCard)}
              >
                <img
                  src={image}
                  alt={`user #${id}`}
                  className={classNames("card-img-top", classes.UserImage)}
                />
                <div className="card-body">
                  <h5>{name}</h5>
                </div>
                <Button className={classes.DeleteIcon} onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleDeleteUser(id)
                }}>
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      ) : ( //down below the "table" view
        <table className="table">
          <thead>
            <tr>
              <th>Id</th><th>Name</th><th>Image</th>
              <th></th> {/*empty because if this is missing, the line of tables is not the same length. */}
            </tr>
          </thead>

          <tbody>
            {users.map(({ id, name, image }) => (
              <tr key={id}>
                <td className="align-middle">{id}</td>
                <td className="align-middle">{name}</td>
                <td className="align-middle"><img src={image} alt={`the user image whose id is ${id}`} className={classes.imgTable} /></td>
                <td >
                  <Button
                    className={classNames(classes.DeleteIcon)}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleDeleteUser(id);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </td>
              </tr>

            ))}
          </tbody>
        </table>
      )}
    </Page>
  );
};

export default UsersPage;
