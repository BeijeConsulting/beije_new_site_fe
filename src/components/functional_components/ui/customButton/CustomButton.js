import React from "react";

// MUI
import { Button, Typography } from "@mui/material";

// Constants
import { pdf_presentation_consulting, pdf_presentation_up } from "../../../../utils/properties";

// Style
import "./CustomButton.css";

const CustomButton = (props) => {

  const handleClick = () => {
    props.callback();
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
      default:
        currentClassName = ""
        break;
    }
    return currentClassName;
  }

  const switchDownload = () => {
    let currentDownload = null;
    switch (props.download) {
      case "consulting":
        currentDownload = pdf_presentation_consulting
        break;
      case "up":
        currentDownload = pdf_presentation_up
        break;
      case "academy":
        currentDownload = pdf_presentation_up
        break;
      default:
        currentDownload = ""
        break;
    }
    return currentDownload;
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
      download={props.download}
    >
      {props.normalButton &&
        < Typography
          component={props.btnTypeContent}
        >
          {props.content}
        </Typography>
      }

      {props.downloadButton &&
        <a
          href={switchDownload()}
          download={true}
        >
          {props.content}
        </a>
      }
    </Button >
  )
}

CustomButton.defaultProps = {
  variant: "text",
  disabled: false,
  colorBtn: "inherit",
  size: "small",
  btnTypeContent: "p",
  download: false,
  normalButton: true,
  downloadButton: false
}

export default CustomButton