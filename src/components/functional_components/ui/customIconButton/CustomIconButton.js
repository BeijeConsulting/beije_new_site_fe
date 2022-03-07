import React from "react";

// MUI
import { IconButton } from "@mui/material";

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Style
import "./CustomIconButton.css";

// Constants
import { defaultIcon } from "../../../../utils/properties";

const CustomIconButton = (props) => {

  const switchClassName = () => {
    let currentClassName = null;
    switch (props.type) {
      case "social-primary":
        currentClassName = "icon-btn-social-primary"
        break;
      case "youtube-videos-primary":
        currentClassName = "icon-btn-youtube-videos-primary"
        break;
      default:
        currentClassName = ""
        break;
    }
    return currentClassName;
  }

  const switchIconClassName = () => {
    let currentIconClassName = null;
    switch (props.classNameIcon) {
      case "social-icon-primary":
        currentIconClassName = "icon-btn-social-icon-primary"
        break;
      case "youtube-videos-icon-primary":
        currentIconClassName = "icon-btn-youtube-videos-icon-primary"
        break
      default:
        currentIconClassName = ""
        break;
    }
    return currentIconClassName;
  }

  const handleClick = () => {
    props.callback()
  }


  return (
    <IconButton
      aria-label={props.ariaLabel}
      className={switchClassName()}
      href={props.href}
      target={props.target}
      onClick={handleClick}
    >
      {props.fontAwesomeIcon &&
        <FontAwesomeIcon
          icon={props.iconFontAwsome}
          className={switchIconClassName()}
        />
      }
      {
        !props.fontAwesomeIcon &&
        props.children
      }
    </IconButton>
  )
}

CustomIconButton.defaultProps = {
  ariaLabel: "icon",
  iconFontAwsome: defaultIcon,
  fontAwesomeIcon: true
}


export default CustomIconButton