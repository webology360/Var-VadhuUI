import React from "react";
import classes from "./ToggleButton.module.scss";

const ToggleButton = ({
  handleChange,
  checked = false,
  leftText = "ENGLISH",
  rightText = "HINDI",
}) => {
  return (
    <label className={classes.switch}>
      <input type="checkbox" onChange={handleChange} checked={checked} />
      <span className={classes.slider + " " + classes.round}>
        <span className={classes.on}>{leftText}</span>
        <span className={classes.off}>{rightText}</span>
      </span>
    </label>
  );
};

export default ToggleButton;
