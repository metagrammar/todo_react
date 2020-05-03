import React from "react";
import classes from "./Navbar.module.css";
import Palette from '@material-ui/icons/Palette';
import Add from '@material-ui/icons/Add';

const Navbar = props => {
  let changeHeadBkg = props.setHeaderColour
  let headBkg = props.defaultHeaderColor
  console.log(headBkg)
  console.log(classes)
  return (
    //style={{background: headBkg}}
    
    <div className={[classes.Navigation, classes[headBkg], classes[changeHeadBkg]].join(" ")}  >
      <div className={classes.NavbarCenter}>
        <h1>
          <span>do</span> / me
        </h1>
        <button
          className={classes.AddTodo}
          id="newTodo"
          onClick={props.handleModalTodo}
        >
          <span className="material-icons" ><Add /></span>
        </button>
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
