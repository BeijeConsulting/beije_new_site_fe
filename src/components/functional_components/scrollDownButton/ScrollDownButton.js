import React from "react";

// Style
import "./ScrollDownButton.css"

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Contants
import { downArrow } from "../../../utils/properties";

// Components
import CustomButton from "../ui/customButton/CustomButton";

const ScrollDownButton = () => {
  return (
    <CustomButton
      content="Scroll Down"
      endIcon={<FontAwesomeIcon icon={downArrow} />}
      className={"scrollDown-btn"}
    />

  )
}

export default ScrollDownButton