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
    loadingEnd: true
  })

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateMedia);
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  const updateMedia = () => {
    setState({
      ...state,
      isMobile: window.innerWidth < 1024
    });
  };

  const handleScroll = () => {
    props.dispatch(initLogo())
    if (window.pageYOffset > 150) {
      props.dispatch(setLogo(logo_secondary_light))
    }
  }

  return (
    <>{
      !state.loadingEnd &&
      <div className="loading">
        <div className="loading-text">
          <span className="loading-text-words">B</span>
          <span className="loading-text-words">E</span>
          <span className="loading-text-words">I</span>
          <span className="loading-text-words">J</span>
          <span className="loading-text-words">E &nbsp;</span>
          <span className="loading-text-words">P</span>
          <span className="loading-text-words">E</span>
          <span className="loading-text-words">O</span>
          <span className="loading-text-words">P</span>
          <span className="loading-text-words">L</span>
          <span className="loading-text-words">E &nbsp;</span>
          <span className="loading-text-words">F</span>
          <span className="loading-text-words">I</span>
          <span className="loading-text-words">R</span>
          <span className="loading-text-words">S</span>
          <span className="loading-text-words">T</span>
        </div>
      </div>
    }

      {
        state.loadingEnd &&
        < Box className={props.burgerMenuDuck.menuOpen ? "position-fixed" : ""} >
          <div className={"homeLayout-video-filter"} />
          <video className="homeLayout-video" autoPlay muted loop playsinline>
            <source src="https://beije.s3.eu-west-1.amazonaws.com/video_home.mp4" type="video/mp4" />
          </video>
          {state.isMobile &&
            <HideOnScroll>
              <AppBar
                id="back-to-top-anchor"
                className="bg-transparent"
              >
                <CustomHeader />
              </AppBar>
            </HideOnScroll>
          }
          {!state.isMobile &&
            <AppBar
              position="fixed"
              className={props.colorHeaderDuck.colorHeader === "#262E36" ? "bg-dark-grey" : "bg-transparent"}
            >
              <CustomHeader />
            </AppBar>
          }
          <main className="scrollX-hidden">
            <Outlet />
          </main>
          {state.isMobile &&
            <BackToTopButton>
              <Fab color="colorInherit" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
              </Fab>
            </BackToTopButton>
          }
          <footer>
            <CustomFooter />
          </footer>
        </Box>
      }


    </>
  );
}

const mapStateToProps = state => (
  {
    burgerMenuDuck: state.burgerMenuDuck,
    colorHeaderDuck: state.colorHeaderDuck
  }
)


export default connect(mapStateToProps)(HomeLayout);
