import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Redux
import { connect } from "react-redux";
import { setLogo, initLogo } from "../redux/ducks/logoDuck";

// MUI
import { AppBar, Box, Fab } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// Style
import "./HomeLayout.css";

// Constants
import { logo_secondary_light } from "../utils/properties"

// Components
import CustomHeader from "../components/hooks_components/customHeader/CustomHeader";
import CustomFooter from "../components/hooks_components/customFooter/CustomFooter";
import HideOnScroll from "../components/functional_components/ui/hideOnScroll/HideOnScroll";
import BackToTopButton from "../components/functional_components/ui/backToTopButton/BackToTopButton";
import ToastMessage from "../components/hooks_components/toastMessage/ToastMessage";

const HomeLayout = (props) => {

  const [state, setState] = useState({
    isMobile: window.innerWidth < 1024,
    isLittleMobile: window.innerWidth < 700
  })

  const { t } = useTranslation()

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateMedia);
      window.removeEventListener("scroll", handleScroll);
    }
  }, [props.currentPageDuck.currentPage])

  const updateMedia = () => {
    setState({
      ...state,
      isMobile: window.innerWidth < 1024,
      isLittleMobile: window.innerWidth < 700
    });
  };

  const handleScroll = () => {
    props.dispatch(initLogo())
    if (window.pageYOffset > 150 && props.currentPageDuck.currentPage === "") {
      props.dispatch(setLogo(logo_secondary_light))
    }
  }

  const switchClassBgLayout = () => {
    let classNameBgLayout = null;
    switch (props.currentPageDuck.currentPage) {
      case "consulting":
        classNameBgLayout = "homeLayout-fixed-bg homeLayout-consulting-bg"
        break;
      case "up":
        classNameBgLayout = "homeLayout-fixed-bg homeLayout-up-bg"
        break;
      case "academy":
        classNameBgLayout = "homeLayout-fixed-bg homeLayout-academy-bg"
        break;
      case "blog":
        classNameBgLayout = "homeLayout-fixed-bg bg-dark-grey"
        break;
      case "community":
        classNameBgLayout = "homeLayout-fixed-bg bg-dark-grey"
        break;
      case "career":
        classNameBgLayout = "homeLayout-fixed-bg bg-dark-grey"
        break;
      case "contacts":
        classNameBgLayout = "homeLayout-fixed-bg bg-dark-grey"
        break;
      case "noMatch":
        classNameBgLayout = "homeLayout-fixed-bg bg-dark-grey"
        break;
      default:
        classNameBgLayout = "homeLayout-fixed-bg homeLayout-video-filter"
        break;
    }
    return classNameBgLayout;
  }

  const switchClassAppBar = () => {
    let classNameAppBar = "bg-transparent";
    if (props.colorHeaderDuck.colorHeader === "#262E36" || props.currentPageDuck.currentPage !== "") {
      classNameAppBar = "bg-dark-grey"
    }

    return classNameAppBar
  }

  return (
    <Box className={props.burgerMenuDuck.menuOpen ? "position-fixed width-100" : ""} >
      <div className={switchClassBgLayout()} />
      {
        props.currentPageDuck.currentPage === "" &&
        <video
          className="homeLayout-video"
          autoPlay
          muted
          loop
          playsInline={true}
          disablePictureInPicture={true}
          type="video/mp4"
        // poster="../../"
        >
          <source src={state.isLittleMobile ? "https://beije-people-first.s3.eu-south-1.amazonaws.com/site/video_home_mobile.mp4" : "https://beije-people-first.s3.eu-south-1.amazonaws.com/site/video_home.mp4"} type="video/mp4" />
        </video>
      }

      {state.isMobile &&
        <HideOnScroll>
          <AppBar
            id="back-to-top-anchor"
            className={props.currentPageDuck.currentPage === "" ? "bg-transparent" : "bg-dark-grey"}
          >
            <CustomHeader />
          </AppBar>
        </HideOnScroll>
      }
      {!state.isMobile &&
        <AppBar
          position="fixed"
          className={switchClassAppBar()}
        >
          <CustomHeader />
        </AppBar>
      }
      <main className="scrollX-hidden min-height-main">
        <Outlet />
      </main>
      {
        state.isMobile &&
        <BackToTopButton>
          <Fab color="default" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </BackToTopButton>
      }
      <footer>
        <CustomFooter />
      </footer>


      <ToastMessage
        anchorvertical="bottom"
        anchorHorizontal="right"
        open={props.toastMessageDuck.showToast}
        autoHideDuration={6000}
        severity={props.toastMessageDuck.toastState}
        successMessage1={t("form.toastMessage.success.txt1")}
        successMessage2={t("form.toastMessage.success.txt2")}
        errorMessage1={t("form.toastMessage.error.txt1")}
        errorMessage2={t("form.toastMessage.error.txt2")}
      />

    </Box >
  );
}

const mapStateToProps = state => (
  {
    burgerMenuDuck: state.burgerMenuDuck,
    colorHeaderDuck: state.colorHeaderDuck,
    currentPageDuck: state.currentPageDuck,
    toastMessageDuck: state.toastMessageDuck
  }
)


export default connect(mapStateToProps)(HomeLayout);
