import React from "react";

// Style
// import "./GoBackBtn.css";

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Constants
import { backArrow } from "../../../utils/properties";

// Components
import CustomButton from "../ui/customButton/CustomButton";

const GoBackBtn = (props) => {
  return (
    <CustomButton
      content="Go back to Academy"
      startIcon={<FontAwesomeIcon icon={backArrow} />}
      type={"go-back-btn"}
      callback={props.callback}
    />
  )
}

export default GoBackBtn