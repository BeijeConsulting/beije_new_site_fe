import React from "react";
import { Link } from "react-router-dom";

// Style
import "./CustomLink.css";

const CustomLink = (props) => {
  const switchClassName = () => {
    let currentClassName = null;
    switch (props.typeLink) {
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
  content: "link",
  typeLink: "default"
}

export default CustomLink