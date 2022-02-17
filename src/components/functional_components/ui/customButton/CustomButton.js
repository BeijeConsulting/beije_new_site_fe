import React from "react";

// MUI
import { Button } from "@mui/material";

// Style
import "./CustomButton.css";

const CustomButton = (props) => {

  const handleClick = () => {
    props.callback();
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
      className={props.className}
    >
      {props.content}
    </Button>
  )
}

CustomButton.defaultProps = {
  variant: "text",
  disabled: false,
  colorBtn: "inherit",
  size: "small"
}

export default CustomButton