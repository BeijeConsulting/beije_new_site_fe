import React from "react";

// Redux
import { connect } from "react-redux";

// MUI
import { Box } from "@mui/material";

// Style
import "./IntroSectionImgTxt.css"

// Components
import ScrollDownButton from "../scrollDownButton/ScrollDownButton";

const IntroSectionImgTxt = (props) => {

  return (
    <Box
      className={props.classNameContainer}
    >
      <div
        className={`${props.classNameImgContainer} ${props.classNameBgImgDesktop}`}
      />
      <div
        className={`${props.classNameTxtContainer} ${props.classNameBgImgMobile} `}
      >

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