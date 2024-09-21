import { FC } from "react";
import classNames from "classnames";

import classes from "./Navbar.module.scss";

import logo from "../../assets/029-Attrecto_logo.png";


const Navbar: FC = () => {
  return (
    <nav className={classNames("navbar", [classes.Navbar])}>
      <div className="ps-3 d-flex flex-grow-1">Welcome to Attrecto Academy</div>
      <img src={logo} width="100px" alt="attrecto company logo small" />
    </nav>
  );
};

export default Navbar;