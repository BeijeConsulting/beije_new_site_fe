import React from "react";
import { Link } from "react-router-dom";

// Style
import "./CustomLink.scss";

const CustomLink = (props) => {
  const switchClassName = () => {
    let currentClassName = null;
    switch (props.typeLink) {
      case "apply":
        currentClassName = "link-default link-apply h3"
        break;
      case "apply-primary":
        currentClassName = "link-default link-apply-primary h3"
        break;
      case "apply-secondary":
        currentClassName = "link-default link-apply-secondary h3"
        break;
      case "simple_link":
        currentClassName = "link-default simple-link h3"
        break;
      case "detail-academy":
        currentClassName = "link-default link-detail-academy h1"
        break;
      default:
        currentClassName = "link-default"
        break;
    }
    return currentClassName
  }

  const handleCallback = () => {
    if (props.callback) {
      props.callback();
    }
  }

  return (
    <div className="wrapper" onClick={handleCallback}>
      <Link
        to={props.linkTo}
        className={switchClassName()}
        download={props.download}
        target={props.target}
      >
        {props.content}
      </Link>
    </div>
  )
}

CustomLink.defaultProps = {
  linkTo: "#",
  content: "link",
  typeLink: "default"
}

export default CustomLink