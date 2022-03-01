import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

// MUI
import { Box } from "@mui/material";

// Style
import "./IntroSectionImgTxt.css"

// Components
import ScrollDownButton from "../scrollDownButton/ScrollDownButton";
import CustomButton from "../ui/customButton/CustomButton";

const IntroSectionImgTxt = (props) => {
  const { t } = useTranslation()

  // const refTxtContainer = useRef();
  // const refContainer = useRef();

  // useEffect(() => {
  //   let heightContainer = refContainer.current.clientHeight;
  //   let heightTxtContainer = refContainer.current.clientHeight;
  //   console.log("heightContainer: ", heightContainer);
  //   console.log("heightTxtContainer: ", heightTxtContainer);


  // }, [])

  // console.log("refTxtContainer", refTxtContainer.current.clientHeight);
  // console.log("refContainer", refContainer.current.clientHeight);

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
      // ref={refContainer}
      className={props.classNameContainer}
    >
      <div
        className={`${props.classNameImgContainer} ${props.classNameBgImgDesktop}`}
      >
        <p>UP</p>
      </div>
      <div
        // ref={refTxtContainer}
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
          <CustomButton
            content="Scarica la presentazione"
            startIcon={<span className="intro-sec-download-icon" />}
            className={switchClassNameDownloadBtn()}
            callback={props.callback}
            download={true}
          />
        </Box>

      </div>
    </Box >
  )
}

IntroSectionImgTxt.defaultProps = {
  classNameContainer: "intro-section",
  classNameImgContainer: "intro-section-img-container",
  classNameTxtContainer: "intro-section-txt-container"
}

export default IntroSectionImgTxt