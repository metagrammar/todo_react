import React from "react";
import classes from "../ColorPicker.module.css";

const BodyColourBox = props => {
  // let headBkg = props.setHeaderColour
      return (
        <>
            <div className={classes.BodyColorOptions} >
                <p>Select a colour for the body</p>
                <div
                className={[classes.ColorBox, classes.BodyDefault].join(" ")}
                id='BodyDefault'
                onClick={(e) => props.setBodyColour(e)}
                />
                <div className={[classes.ColorBox, classes.BodyDark].join(" ")} 
                id='BodyDark'
                onClick={props.setBodyColour} 
                />
                <div className={[classes.ColorBox, classes.BodyGreen].join(" ")}
                id='BodyGreen'
                onClick={props.setBodyColour}
                />
            </div>
        </>
      );
    };
    
export default BodyColourBox;