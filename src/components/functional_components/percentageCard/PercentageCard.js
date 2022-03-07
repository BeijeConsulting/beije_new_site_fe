import React from "react";

// Styles
import './PercentageCard.css';

// MUI
import { Box } from "@mui/system";

const PercentageCard = (props) => {

  return (
    <Box className="percentage-card-box-container">
      <Box className="percentage-card-icon-container">
        <img
          src={props.icon}
          alt=""
          className="percentage-card-icon"
        />
      </Box>
      <Box className="percentage-card-data-container">
        <div className="percentage-card-data-number">
          <span className={props.right ? "percentage-card-data-number-right-gsap" : "percentage-card-data-number-gsap"}>{props.percentage}</span>%
        </div>
        <div className="percentage-card-data-text">
          {props.cardDescription}
        </div>
      </Box>

    </Box>
  )
}

export default PercentageCard