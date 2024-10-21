import React from "react";
import classNames from "classnames";

const Loader = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
};

export default Loader;