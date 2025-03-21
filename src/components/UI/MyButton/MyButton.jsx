import React, { useState } from "react";
import classes from "./MyButton.module.css";

const MyButton = ({ additionalCl, children, ...props }) => {
    return (
        <button {...props} className={`${classes.myBtn} ${additionalCl}`}>
            {children}
        </button>
    );
};

export default MyButton;
