import React from "react";

// MUI
import { Box, Grid } from "@mui/material";

// Style
import "../introSectionTxtInfoGraphic/IntroSectionTxtInfoGraphic.css";
import "../IntroSection.css";

// Constants
import { infoGraphicFrontend } from "../../../../utils/properties";

// Components
import ScrollDownButton from "../../scrollDownButton/ScrollDownButton";
import GoBackBtn from "../../goBackBtn/GoBackBtn";
import CustomLink from "../../ui/customLink/CustomLink";

const tempObj = [
  {
    colMobile: 12,
    colDesktop: 6,
    name: "Academy",
    type: "title"
  },
  {
    colMobile: 12,
    colDesktop: 6,
    name: "Academy di 3 mesi retribuito",
    type: ""
  },
  {
    colMobile: 12,
    colDesktop: 6,
    name: "Compenso",
    type: "title"
  },
  {
    colMobile: 12,
    colDesktop: 6,
    name: "Rimborso spese",
    type: ""
  },
  {
    colMobile: 12,
    colDesktop: 6,
    name: "Modalità",
    type: "title"
  },
  {
    colMobile: 12,
    colDesktop: 6,
    name: "Remoto",
    type: ""
  }
]

const IntroSectionTxtInfoGraphic = (props) => {

  const printGridItems = (item, key) => {
    return (
      <Grid
        key={key}
        item
        xs={item.colMobile}
        md={item.colDesktop}
        className={item.type === "title" ? "intro-section-second-paragraph-grid-title" : ""}
      >
        <p>{item.name}</p>
      </Grid>
    )
  }

  return (
    <Box
      className={props.classNameContainer}
    >

      <div
        className={`${props.classNameTxtContainer} ${props.classNameBgImgMobile} `}
      >
        <GoBackBtn />
        <p
          className={"intro-section-name titles-level-1-2 intro-section-academy-name"}
        >
          {props.sectionName}
        </p>

        <h1
          className="intro-section-title"
        >
          {props.sectionTitle}
        </h1>

        <div
          className="intro-section-first-paragraph"
        >
          <p>{props.paragraph1Title}</p>
          <p>{props.paragraph1Txt}</p>
        </div>

        <div
          className="intro-section-second-paragraph"
        >
          <p
            className="intro-section-second-paragraph-title"
          >
            {props.paragraph2Title}
          </p>
          <Grid
            container
            spacing={2}
            className={"intro-section-grid-container"}
          >
            {props.obj.map(printGridItems)}
          </Grid>
        </div>


        <div className="intro-section-apply-container-mobile">
          <CustomLink
            content={"candidati"}
            linkTo={"#"}
            typeLink={"apply-secondary"}
          />
        </div>


        <Box className={"intro-section-scroll-down-external-container"}>
          <Box className={"intro-section-scroll-down-container"}>
            <ScrollDownButton
              callback={props.callback}
            />
          </Box>
        </Box>

        {props.children}

      </div>
      <div
        className={props.classNameImgContainer}
      >
        <img
          alt="iconography developer"
          src={infoGraphicFrontend}
        />

        <div className="intro-section-apply-container-desktop">
          <CustomLink
            content={"candidati"}
            linkTo={"#"}
            typeLink={"apply-secondary"}
          />
        </div>

      </div>
    </Box >
  )
}

IntroSectionTxtInfoGraphic.defaultProps = {
  classNameContainer: "intro-section intro-section-txt-info-graphic",
  classNameImgContainer: "intro-section-img-container",
  classNameTxtContainer: "intro-section-txt-container",
  paragraph1Title: "Diventa Java developer con noi!",
  paragraph2Title: "Struttura del corso",
  obj: tempObj
}

export default IntroSectionTxtInfoGraphic