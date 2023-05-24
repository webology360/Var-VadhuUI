import React, { useState } from "react";
import classes from "./Button.module.scss";
const Button = ({
  label,
  width = "16",
  widthType = "rem",
  height = "4.6",
  borderRadius = "0",
  backgroundColor = classes.backgroundColor,
  color = classes.color,
  borderColor = classes.borderColor,
  disabled = false,
  onClick,
  icon: Icon,
  isHover = false,
  hoverColor,
  dark = false,
  light = false,
  large = false,
  small = false,
  type = "button",
  loading = false,
}) => {
  const [isHoverState, setIsHoverState] = useState(false);
  return (
    <button
      type={type}
      onClick={onClick}
      className={classes.button}
      disabled={disabled || loading}
      onMouseEnter={() => isHover && setIsHoverState(true)}
      onMouseLeave={() => isHover && setIsHoverState(false)}
      style={{
        color: loading
          ? color
          : disabled && light
          ? "#707070"
          : disabled && dark
          ? "#707070"
          : isHoverState || dark
          ? "#fff"
          : color,
        backgroundColor: loading
          ? "#f4f4f4"
          : disabled
          ? // && (light || dark)
            "#b9b9b9"
          : isHoverState && hoverColor
          ? hoverColor
          : isHoverState
          ? color
          : large || light
          ? backgroundColor
          : dark
          ? "#244d62"
          : backgroundColor,
        border: `0.1rem solid ${
          loading
            ? borderColor
            : disabled && light
            ? "#b9b9b9"
            : isHoverState || (disabled && dark)
            ? "transparent"
            : large || light
            ? color
            : dark
            ? color
            : borderColor
        }`,
        borderRadius: borderRadius + "rem",
        width: large ? "23rem" : small ? "12rem" : width + widthType,
        height: large ? "4.2rem" : small ? "3.2rem" : height + "rem",
        cursor: disabled || loading ? "not-allowed" : "pointer",
      }}
    >
      {loading ? "loading..." : Icon ? <Icon fill={color} /> : ""}
      {label}
    </button>
  );
};

export default Button;
