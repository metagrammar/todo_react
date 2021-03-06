import React from "react";
import classes from "./Modal.module.css";

const Modal = props => {
  return <div className={classes.ModalContainer}>
            <div className={classes.ModalBox}>
              {props.children}
            </div>
          </div>
};

export default Modal;
