import React from "react";
import { Link } from "react-router-dom";

// Style
import "./CustomLink.css";

const CustomLink = (props) => {
  const switchClassName = () => {
    let currentClassName = null;
    switch (props.typeLink) {
      case "apply":
        currentClassName = "link-default link-apply"
        break;
      case "detail-academy":
        currentClassName = "link-default link-detail-academy"
        break;
      default:
        currentClassName = "link-default"
        break;
    }
    return currentClassName
  }

  return (
    <Link
      to={props.linkTo}
      className={switchClassName()}
    >
      {props.content}
    </Link>
  )
}

CustomLink.defaultProps = {
  linkTo: "#",
  content: "link",
  typeLink: "default"
}

export default CustomLink