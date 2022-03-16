import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

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

const HomeLayout = (props) => {

  const [state, setState] = useState({
    isMobile: window.innerWidth < 1024,
    // loadingEnd: window.sessionStorage.getItem("firstLoadDone")
  })

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    window.addEventListener("scroll", handleScroll);

    // if (window.sessionStorage.getItem("firstLoadDone") === null) {

    //   setTimeout(() => {
    //     window.sessionStorage.setItem("firstLoadDone", true)
    //     setState({
    //       ...state,
    //       loadingEnd: true
    //     })
    //   }, 8000)
    // } else {
    //   setState({
    //     ...state,
    //     loadingEnd: true
    //   })
    // }

    return () => {
      window.removeEventListener("resize", updateMedia);
      window.removeEventListener("scroll", handleScroll);
    }
  }, [props.currentPageDuck.currentPage])

  const updateMedia = () => {
    setState({
      ...state,
      isMobile: window.innerWidth < 1024
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
      case "career":
        classNameBgLayout = "homeLayout-fixed-bg bg-dark-grey"
        break;
      case "contacts":
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
    // <>
    //   {
    //     !state.loadingEnd &&
    //    
    //   }

    //   {
    //     state.loadingEnd &&
        <Box className={props.burgerMenuDuck.menuOpen ? "position-fixed" : ""} >
          <div className={switchClassBgLayout()} />
          {
            props.currentPageDuck.currentPage === "" &&
            <video className="homeLayout-video" autoPlay muted loop>
              <source src="https://beije.s3.eu-west-1.amazonaws.com/video_home.mp4" type="video/mp4" />
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
        </Box >
    //   }


    // </>
  );
}

const mapStateToProps = state => (
  {
    burgerMenuDuck: state.burgerMenuDuck,
    colorHeaderDuck: state.colorHeaderDuck,
    currentPageDuck: state.currentPageDuck
  }
)


export default connect(mapStateToProps)(HomeLayout);
