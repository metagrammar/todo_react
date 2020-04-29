import React from "react";
import classes from "./Navbar.module.css";
import Palette from '@material-ui/icons/Palette';
import Add from '@material-ui/icons/Add';

const Navbar = props => {
  return (
    <div className={classes.Navigation}>
      <div className={classes.NavbarCenter}>
        <h1>
          <span>do</span> / me
        </h1>
        <a href="#"
          className={classes.AddTodo}
          id="newTodo"
          onClick={props.handleModalTodo}
        >
          <span className="material-icons" ><Add /></span>
        </a>
      </div>
      <div className={classes.NavbarRight} >
        <div className={classes.SettingsBtn} id="colorSettings" onClick={props.handleModalColour} >
          <Palette />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
