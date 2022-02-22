import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { truncate } from "lodash";

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
import { tab_aboutUs, logo_secondary_grey } from "../../utils/properties"

// Components
import CustomNavbar from "../../components/hooks_components/customNavbar/CustomNavbar";
import ScrollDownButton from "../../components/functional_components/scrollDownButton/ScrollDownButton";
import CustomTab from "../../components/hooks_components/customTab/CustomTab";
import CustomLink from "../../components/functional_components/ui/customLink/CustomLink";
import CustomCarousel from "../../components/hooks_components/customCarousel/CustomCarousel";
import CustomForm from "../../components/hooks_components/customForm/CustomForm";

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

  const scrollToSection = () => {
    let elementTop = refDarkContainer.current.offsetTop;
    window.scrollTo({
      top: elementTop,
      left: 0,
      behavior: 'smooth'
    });
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
          <ScrollDownButton
            callback={scrollToSection}
          />
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
        className={"bg-dark-grey position-relative"}
      >
        <img
          src={logo_secondary_grey}
          alt="logo sullo sfondo"
          className="home-logo-bg" />

        <p
          className={"home-written-bg"}
        >People first
        </p>

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
          className={"home-fourth-section-container paddingX-container-default top-oblique-line"}
        >
          <Box>
            <p><strong>Le persone</strong></p>
            <p><strong>Al centro</strong></p>
            <p><strong>Del nostro futuro</strong></p>
          </Box>
        </Container>

        {/* Fifth section desktop */}
        <Container
          component={"section"}
          maxWidth={"false"}
          className={"home-fifth-section-container paddingX-container-default"}
        >
          <Box className={"home-fifth-section-first-box"}>
            <h2>Chi siamo</h2>
          </Box>
          <Box className={"home-fifth-section-second-box"}>
            <p>
              {truncate("Investiamo ogni giorno nelle persone per garantire un miglioramento costante dei nostri servizi. Siamo una community di professionisti informatici, ricercatori di nuovi talenti e marketers con un obiettivo: le persone al centro del nostro futuro. Ci impegniamo per progettare ed offrire soluzioni che danno vita a nuove realtà, e formiamo gli sviluppatori del domani. È la condivisione di uno scopo comune, è un approccio “out of the box”, è il rapporto con il cliente, è un sistema People First. Ti aspettiamo, segui il cambiamento.", {
                'length': 396,
                'separator': '...'
              })}
            </p>
            <CustomLink
              linkTo=""
              content="Read more"
            />
          </Box>
        </Container>

        <CustomCarousel />

        {/* Sixth section desktop */}
        <Container
          component={"section"}
          maxWidth={"false"}
          className={"home-sixth-section-container top-oblique-line"}
        >
          <CustomForm />
        </Container>
      </Box>
    </Box>
  );
}

export default connect()(Home);
