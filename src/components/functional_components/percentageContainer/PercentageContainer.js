import React from "react";

// Styles
import './PercentageContainer.css';

// MUI
import { Box } from "@mui/system";

// Components
import PercentageCard from "../percentageCard/PercentageCard";
import { useTranslation } from "react-i18next";

// Icons
import PercentageCardIcon1 from "../../../assets/icons/percentageCardIcon1.svg";

const PercentageContainer = (props) => {

  const { t } = useTranslation();

  return (
    <Box className={props.right ? "percentage-container percentage-container-right" : "percentage-container"}>
      <div>
        <Box className="percentage-container-title-container">
          <div className="percentage-container-title">
            {props.percentageContainer1Title}
          </div>
          <div className="percentage-container-title-line-separator" />
          <div className="percentage-container-subtitle">
            {props.percentageContainer1Subtitle}
          </div>
        </Box>

        <Box className="percentage-container-cards-container">
          <PercentageCard
            percentage={props.percentage1}
            cardDescription={t("consulting.cardsDescription.card1")}
            icon={PercentageCardIcon1}
            right={props.right}
          />
          <PercentageCard
            percentage={props.percentage2}
            cardDescription={t("consulting.cardsDescription.card2")}
            icon={PercentageCardIcon1}
            right={props.right}
          />
          <PercentageCard
            percentage={props.percentage3}
            cardDescription={t("consulting.cardsDescription.card3")}
            icon={PercentageCardIcon1}
            right={props.right}
          />
        </Box>
      </div>
    </Box>
  )
}

export default PercentageContainer