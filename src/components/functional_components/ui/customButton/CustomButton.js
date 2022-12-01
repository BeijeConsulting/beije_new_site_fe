import React from "react";

// MUI
import { Button, Typography } from "@mui/material";

// Style
import "./CustomButton.css";

const CustomButton = (props) => {

  const handleClick = () => {
    if (props.callback) {
      props.callback();
    }
  }

  const switchClassName = () => {
    let currentClassName = null;
    switch (props.type) {
      case "btn-form-primary":
        currentClassName = "button-form-primary"
        break;
      case "go-back-btn":
        currentClassName = "button-go-back-primary"
        break;
      case "filter-btn":
        currentClassName = `button-filter-primary ${props.classNameFilterBtn}`
        break;
      case "career_btn":
        currentClassName = "button-career";
        break;
      default:
        currentClassName = ""
        break;
    }
    return currentClassName;
  }

  return (
    <Button
      variant={props.variant}
      disabled={props.disabled}
      href={props.href}
      target={props.target}
      onClick={handleClick}
      color={props.colorBtn}
      size={props.size}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      className={props.className === undefined ? switchClassName() : props.className}
    >
      <Typography
        component={props.btnTypeContent}
      >
        {props.content}
      </Typography>
    </Button>
  )
}

CustomButton.defaultProps = {
  variant: "text",
  disabled: false,
  colorBtn: "inherit",
  size: "small",
  btnTypeContent: "p"
}

export default CustomButton