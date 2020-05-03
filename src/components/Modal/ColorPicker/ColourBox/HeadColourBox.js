import React from "react";
import classes from "../ColorPicker.module.css";

const HeadColourBox = props => {
  // let setHeadBkg = props.setHeaderColour
  return (
    <>
        <div className={classes.HeadColorOptions} >
          <p>Select a colour for the header</p>
          <div
            className={[classes.ColorBox, classes.GradDefault].join(" ")}
            id='GradDefault'
            onClick={(e) => props.setHeaderColour(e)}
          />

          <div className={[classes.ColorBox, classes.GradBlue].join(" ")}
          id='GradBlue'
          onClick={props.setHeaderColour} />

          <div className={[classes.ColorBox, classes.GradGreen].join(" ")} 
          id='GradGreen'
          onClick={props.setHeaderColour} />

        </div>
    </>
  );
};

export default HeadColourBox;
