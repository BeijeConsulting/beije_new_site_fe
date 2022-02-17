import React from 'react';
import { Button } from "antd";

//import style
import './CustomButton.css';
import '../../../style.css';

/*
 * CustomButton takes in some props: isDisabled, content (when it's a text button), clickCallback, isLoading, isBlock, currentSize, currentIcon, currentWidth, currentHeight width and heigth
 * block is a boolean prop that we need when we don't have size prop populated
 * size can be "small", "middle", "large"
 * when block is true button takes the width.
 */
const CustomButton = (props) => {

  /* this method returns a class for styling the button*/
  const getCurrentClassName = () => {
    let currentClassName = null;
    switch (props.type) {
      case "primary-menu":
        currentClassName = "custom-btn-primary-menu"
        break;
      case "scroll-page":
        currentClassName = "custom-btn-scroll"
        break;
      case "primary-arrow-btn":
        currentClassName = 'primary-arrow circular-btn d-flex items-center justify-center'
        break;
      case "secondary-arrow-btn":
        currentClassName = 'secondary-arrow circular-btn d-flex items-center justify-center'
        break;
      case "primary-social":
        currentClassName = `custom-btn-primary-social ${props.bgIcon} circular-btn d-flex items-center justify-center`
        break;
      case "secondary-social":
        currentClassName = `custom-btn-secondary-social ${props.bgIcon} circular-btn d-flex items-center justify-center`
        break;
      case "form-btn":
        currentClassName = "custom-btn-form"
        break;
      case "form-btn-light":
        currentClassName = "custom-btn-form-light"
        break;
      case "carousel-btn":
        currentClassName = "custom-btn-carousel"
        break;
      case "view-all-btn":
        currentClassName = "custom-btn-view-all"
        break;
      case "view-all-btn-light":
        currentClassName = "custom-btn-view-all-light"
        break;
      case "go-back-btn":
        currentClassName = "custom-btn-go-back"
        break;
      case "drag-more-btn":
        currentClassName = "custom-btn-drag-more"
        break;
      case "filter-btn":
        currentClassName = "custom-btn-filter"
        break;
      case "modal-btn":
        currentClassName = "custom-btn-modal"
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
        onClick={event => !props.isDisabled && !!props.clickCallback ? props.clickCallback(event) : null} // *ga*
        size={props.currentSize}
        className={getCurrentClassName()}
        block={props.isBlock}
        icon={props.currentIcon}
        href={props.href}
        htmlType={props.htmlType}
        target={props.target}
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
