import React from "react";
import classes from "./ColorPicker.module.css";
import Close from '@material-ui/icons/Close';
import HeadColourBox from "./ColourBox/HeadColourBox"
import BodyColourBox from "./ColourBox/BodyColourBox"

const ColorPicker = props => {

   let displayColourBoxes =
   props.headColourProp ? <HeadColourBox setHeaderColour={props.setHeaderColour} />
   : props.bodyColourProp ? <BodyColourBox setHeaderColour={props.setHeaderColour} />
   : null

    return (
    <>
      <div className={classes.ModalHeader}>
        <button
          className={classes.CloseModal}
          id="closeBkgColorModal"
          type="button"
          onClick={props.handleModalColour}
        >
          <Close />
        </button>
      </div>
      <div className={classes.ModalContent}>
        <div className={classes.ModalContentHeader}>
          <span>Make</span> / me yours
        </div>
        <div className={classes.ModalContentBox}>
          <p>
            You can personalise your
            <span className={classes.ModalContentBoxUpper}>
              <strong> Do</strong> / me </span>
             interface. To change the header and / or background colour, click
            on the corresponding parts in the diagram below and then choose
            the colours you would like.
          </p>
        </div>
        <div className={classes.CenterElement}>
          <div className={classes.ColorSampler}>
            <div className={classes.HeaderColor} id="colourYourHeader" onClick={props.headColourChange}>Make me yours</div>
            <div className={classes.BodyColor} id="colourYourBody" onClick={props.bodyColourChange}>or me yours</div>
          </div>
        </div>
      </div>
      <div className={classes.ModelFooter}>
        {displayColourBoxes}
        {props.children}
      </div>
    </>
  );
};

export default ColorPicker;
