import React from "react";
import classes from "./ToggleButton.module.scss";
import { FormattedMessage } from "react-intl";

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
        <span className={classes.on}>{<FormattedMessage id="home.Lang" />}</span>
        <span className={classes.off}>{<FormattedMessage id="home.Lang" />}</span>
      </span>
    </label>
  );
};

export default ToggleButton;
