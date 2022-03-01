import React from "react";
import { useTranslation } from "react-i18next";

// Redux
import { connect } from "react-redux";

// MUI
import { Box } from "@mui/material";

// Style
import "./IntroSectionImgTxt.css"

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Constants
import { downloadIcon } from "../../../utils/properties";

// Components
import ScrollDownButton from "../scrollDownButton/ScrollDownButton";
import CustomButton from "../ui/customButton/CustomButton";

const IntroSectionImgTxt = (props) => {
  const { t } = useTranslation()

  const switchClassNameSecName = () => {
    let currentClassName = null;
    switch (props.typeSection) {
      case "up":
        currentClassName = "intro-section-name intro-section-up-name"
        break;
      default:
        currentClassName = ""
        break;
    }
    return currentClassName;
  }

  const switchClassNameDownloadBtn = () => {
    let currentClassName = null;
    switch (props.typeSection) {
      case "up":
        currentClassName = "intro-section-up-download"
        break;
      default:
        currentClassName = ""
        break;
    }
    return currentClassName;
  }

  return (
    <Box
      className={props.classNameContainer}
    >
      <div
        className={`${props.classNameImgContainer} ${props.classNameBgImgDesktop}`}
      >
        <p>UP</p>
      </div>
      <div
        className={`${props.classNameTxtContainer} ${props.classNameBgImgMobile} `}
      >
        <p
          className={switchClassNameSecName()}
        >
          {props.sectionName}
        </p>

        <h1
          className="intro-section-title"
        >
          {props.sectionTitle}
        </h1>

        <Box className="intro-section-download-container">
          <CustomButton
            content="Scarica la presentazione"
            startIcon={<FontAwesomeIcon icon={downloadIcon} />}
            className={switchClassNameDownloadBtn()}
            callback={props.callback}
            download={true}
          />
        </Box>

        <Box className={"intro-section-scroll-down-container"}>
          <ScrollDownButton
            callback={props.callback}
          />
        </Box>
        {props.children}

      </div>
    </Box >
  )
}

IntroSectionImgTxt.defaultProps = {
  classNameContainer: "intro-section",
  classNameImgContainer: "intro-section-img-container",
  classNameTxtContainer: "intro-section-txt-container"
}

const mapStateToProps = state => (
  {
    heightHeaderDuck: state.heightHeaderDuck
  }
)

export default connect(mapStateToProps)(IntroSectionImgTxt)