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
const CustomButton = ({
                    isDisabled = false,
                    type = "primary",
                    content,
                    clickCallback,
                    isLoading,
                    isBlock = false,
                    currentSize,
                    currentIcon,
                    currentWidth,
                    floatRight = false,
                    className = ''
                  }) => {

  /**
   * this method returns a class for styling the button
   * */
  const getCurrentClassName = () => {
    let currentClassName = null;
    switch (type) {
      case "primary":
        currentClassName = ""
        break;
      case "secondary":
        currentClassName = ""
        break;
      case "transparent":
        currentClassName = ""
        break;
      default:
        currentClassName = ""
        break;
    }
    return currentClassName;
  }

  return (
    <div style={
      {width: isBlock ? currentWidth : null, float: floatRight ? 'right' : null}
    }
         className={className}
    >
      <Button
        disabled={isDisabled}
        type={type}
        loading={isLoading}
        onClick={event => !isDisabled && !!clickCallback ? clickCallback(event) : null}
        size={currentSize}
        className={getCurrentClassName()}
        block={isBlock}
        icon={currentIcon}
      >
        {content}
      </Button>
    </div>
  )
}

export default CustomButton;
