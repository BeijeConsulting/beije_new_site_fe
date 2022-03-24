import React from "react";
import { useTranslation } from "react-i18next";

// Style
import "./ScrollDownButton.css"

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Contants
import { downArrow } from "../../../utils/properties";

// Components
import CustomButton from "../ui/customButton/CustomButton";

const ScrollDownButton = (props) => {
  const { t } = useTranslation();
  return (
    <CustomButton
      content={t("btn.scroll")}
      endIcon={<FontAwesomeIcon icon={downArrow} />}
      className={"scrollDown-btn"}
      callback={props.callback}
    />

  )
}

export default ScrollDownButton