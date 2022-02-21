import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

// Redux
import { connect } from "react-redux";
import { setColorHeader, initColorHeader } from "../../redux/ducks/colorHeaderDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";

// MUI
import { Container } from "@mui/material";
import { Box } from "@mui/system";

// Style
import "./Home.css";

// Constants
import { tab_aboutUs } from "../../utils/properties"

// Components
import CustomNavbar from "../../components/hooks_components/customNavbar/CustomNavbar";
import ScrollDownButton from "../../components/functional_components/scrollDownButton/ScrollDownButton";
import CustomTab from "../../components/hooks_components/customTab/CustomTab";

const Home = (props) => {
  const { t } = useTranslation();
  const refDarkContainer = useRef();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  const handleScroll = () => {
    let elementTop = refDarkContainer.current.offsetTop;
    if (window.pageYOffset >= elementTop) {
      props.dispatch(setColorHeader("#262E36"));
      props.dispatch(setVisibilityNavbar(true));
    }
    else {
      props.dispatch(initColorHeader());
      props.dispatch(initVisibilityNavbar());
    }
  }

  return (
    <Box>
      {/* First section with title */}
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"home-fist-section-container paddingX-container-default d-flex flex-column home-first-section-gsap"}
      >
        <Box className={"home-first-section-title-container d-flex flex-column justify-center"}>
          <h1>{t("home.firstSection.title.part1")}<br />{t("home.firstSection.title.part2")}</h1>
        </Box>
        <Box className={"home-first-section-navbar-container"}>
          <CustomNavbar
            type={"home-navbar"}
          />
        </Box>
        <Box className={"home-first-section-scroll-down-container"}>
          <ScrollDownButton />
        </Box>
      </Container>

      {/* Second section with description */}
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"home-second-section-container d-flex flex-column justify-center"}
      >
        <h2 className={"home-second-section-txt"}>
          <span className={"home-second-section-quotation-marks"}>&#8220;</span>
          <span>Lavoriamo costantemente per arrivare alla piena soddisfazione dei nostri clienti</span>
          <span className={"home-second-section-quotation-marks"}>&#8222;</span>
        </h2>
      </Container>

      {/* Box with dark bg for next sections */}
      <Box
        ref={refDarkContainer}
        className={"bg-dark-grey position-relative clip-path-default"}
        style={{ height: "1000px" }}
      >

        <p className={"home-written-bg"}>People first</p>

        {/* Third section */}
        <Container
          component={"section"}
          maxWidth={"false"}
          className={"home-third-section-container paddingX-container-default"}
        >
          <Box className={"home-third-section-tab-container d-flex"}>
            <CustomTab
              obj={tab_aboutUs}
            />
          </Box>
        </Container>

        {/* Fourth section desktop */}
        <Container
          component={"section"}
          maxWidth={"false"}
          className={"home-fourth-section-container-desktop paddingX-container-default"}
        >

        </Container>
      </Box>
    </Box>
  );
}

export default connect()(Home);
