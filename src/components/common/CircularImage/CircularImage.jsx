import React from "react";
import classes from "./CircularImage.module.scss";

const CircularImage = ({ imgURL, isActive, height = "7.8", width = "7.8" }) => {
  return (
    <div className={classes.circularImg}>
      <img
        className={classes.circularImg__img}
        src={imgURL}
        alt="profile"
        style={{
          height: `${height}rem`,
          width: `${width}rem`,
          borderWidth: isActive ? "0.2rem" : "0rem",
        }}
      />
    </div>
  );
};

export default CircularImage;
