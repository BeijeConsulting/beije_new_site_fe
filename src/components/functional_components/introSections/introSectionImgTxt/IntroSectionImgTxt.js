import React from "react";

// MUI
import { Box } from "@mui/material";

// Style
import "./IntroSectionImgTxt.css"
import "../IntroSection.css";

// Components
import ScrollDownButton from "../../scrollDownButton/ScrollDownButton";
import CustomButton from "../../ui/customButton/CustomButton";

const IntroSectionImgTxt = (props) => {

  const switchClassNameSecName = () => {
    let currentClassName = null;
    switch (props.typeSection) {
      case "consulting":
        currentClassName = "intro-section-name titles-level-1-2 intro-section-consulting-name"
        break;
      case "up":
        currentClassName = "intro-section-name titles-level-1-2 intro-section-up-name"
        break;
      case "academy":
        currentClassName = "intro-section-name titles-level-1-2 intro-section-academy-name"
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
      case "consulting":
        currentClassName = "intro-section-consulting-download"
        break;
      case "up":
        currentClassName = "intro-section-up-download"
        break;
      case "academy":
        currentClassName = "intro-section-academy-download"
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
        <p>{props.photoTitle}</p>
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

        <Box className={"intro-section-scroll-down-external-container"}>
          <Box className={"intro-section-scroll-down-container"}>
            <ScrollDownButton
              callback={props.callback}
            />
          </Box>
        </Box>

        {props.children}

        <Box className="intro-section-download-container">
          <CustomButton
            content="Scarica la presentazione"
            startIcon={<span className={`intro-sec-download-icon ${props.bgIconDownload}`} />}
            className={switchClassNameDownloadBtn()}
            callback={props.callbackDownload}
            downloadButton={true}
            normalButton={false}
            download={props.download}
          />
        </Box>

      </div>
    </Box >
  )
}

IntroSectionImgTxt.defaultProps = {
  classNameContainer: "intro-section intro-section-txt-img",
  classNameImgContainer: "intro-section-img-container",
  classNameTxtContainer: "intro-section-txt-container"
}

export default IntroSectionImgTxt