import React from "react";
import classes from "../ColorPicker.module.css";

const HeadColourBox = props => {
  let setHeadBkg = props.setHeaderColour
  return (
    <>
        <div className={classes.HeadColorOptions} >
          <p>Select a colour for the header</p>
          <div
            className={[classes.ColorBox, classes.GradDefault].join(" ")}
            name={'GradDefault'}
            onClick={(e) => props.setHeaderColour(e.target.name)}
          />

          <div className={[classes.ColorBox, classes.GradBlue].join(" ")}
          name={'GradBlue'}
          onClick={(e) => setHeadBkg(e.currentTarget.name)} />

          <div className={[classes.ColorBox, classes.GradGreen].join(" ")} 
          name={'GradGreen'}
          onClick={props.setHeaderColour} />

        </div>
    </>
  );
};

export default HeadColourBox;
