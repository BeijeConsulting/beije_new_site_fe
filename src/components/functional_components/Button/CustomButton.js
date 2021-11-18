import React from 'react';
import './CustomButton.css';
import '../../../style.css';
import { Button } from "antd";


/**
 * CustomButton takes in some props: isDisabled, content (when it's a text button), clickCallback, isLoading, isBlock, currentSize, currentIcon, currentWidth, currentHeight width and heigth
 * block is a boolean prop that we need when we don't have size prop populated
 * size can be "small", "middle", "large"
 * when block is true button takes the width.
 * */
const CustomButton = (props) => {

  /**
   * this method returns a class for styling the button
   * */
  const getCurrentClassName = () => {
    let currentClassName = null;
    switch (props.type) {
      case "primary":
        currentClassName = ""
        break;
      case "secondary":
        currentClassName = ""
        break;
      case "transparent":
        currentClassName = ""
        break;
      case "social":
        currentClassName = "custom-button-social circular-btn d-flex align-items-c jusify-content-c"
        break;
      default:
        currentClassName = ""
        break;
    }
    return currentClassName;
  }

  return (
    <div style={
      {
        width: props.isBlock ? props.currentWidth : null,
        float: props.floatRight ? 'right' : null,
        margin: props.currentMargin,
        padding: props.currentPadding
      }
    }
      className={props.className}
    >
      <Button
        disabled={props.isDisabled}
        type={props.type}
        loading={props.isLoading}
        onClick={event => !props.isDisabled && !!props.clickCallback ? props.clickCallback(event) : null}
        size={props.currentSize}
        className={getCurrentClassName()}
        block={props.isBlock}
        icon={props.currentIcon}
        href={props.href}
      >
        {props.content}
      </Button>
    </div>
  )
}

CustomButton.defaultProps = {
  isDisabled: false,
  type: "primary",
  isBlock: false,
  currentSize: 'small',
  floatRight: false,
  className: ''
}

export default CustomButton;
