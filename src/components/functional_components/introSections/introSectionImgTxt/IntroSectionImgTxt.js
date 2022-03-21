import React from "react";

// MUI
import { Box } from "@mui/material";

// Style
import "./IntroSectionImgTxt.css"
import "../IntroSection.css";

// Components
import ScrollDownButton from "../../scrollDownButton/ScrollDownButton";
// import CustomButton from "../../ui/customButton/CustomButton";
import DownloadBtn from "../../downloadBtn/DownloadBtn";

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

        <Box className={"intro-section-scroll-down-container"}>
          <ScrollDownButton
            callback={props.callback}
          />
        </Box>

        {props.children}

        <Box className="intro-section-download-container">
          <DownloadBtn
            content="Scarica la presentazione"
            bgIconDownload={props.bgIconDownload}
            typeSection={props.typeSection}
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