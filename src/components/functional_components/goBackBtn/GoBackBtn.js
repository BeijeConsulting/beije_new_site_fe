import React from "react";
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next";

// Style
// import "./GoBackBtn.css";

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Constants
import { backArrow } from "../../../utils/properties";

// Components
import CustomButton from "../ui/customButton/CustomButton";

const GoBackBtn = (props) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const goBackPage = () => {
    navigate(-1);
  }

  return (
    <CustomButton
      content={t("btn.goBack")}
      startIcon={<FontAwesomeIcon icon={backArrow} />}
      type={"go-back-btn"}
      callback={props.callback === undefined ? goBackPage : props.callback}
    />
  )
}

export default GoBackBtn