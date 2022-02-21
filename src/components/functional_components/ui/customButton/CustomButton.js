import React from "react";

// MUI
import { Button, Typography } from "@mui/material";

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