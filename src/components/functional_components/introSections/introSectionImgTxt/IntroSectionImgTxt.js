import React from "react";
import { useTranslation } from "react-i18next";

// MUI
import { Box } from "@mui/material";

// Style
import "./IntroSectionImgTxt.scss";
import "../IntroSection.scss";

// Components
import ScrollDownButton from "../../scrollDownButton/ScrollDownButton";
import DownloadBtn from "../../downloadBtn/DownloadBtn";

const IntroSectionImgTxt = (props) => {
  const { t } = useTranslation()

  const switchClassNameSecName = () => {
    let currentClassName = null;
    switch (props.typeSection) {
      case "consulting":
        currentClassName = "intro-section-name h1 intro-section-consulting-name"
        break;
      case "up":
        currentClassName = "intro-section-name h1 intro-section-up-name"
        break;
      case "academy":
        currentClassName = "intro-section-name h1 intro-section-academy-name"
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
            content={t("btn.downloadPwd")}
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