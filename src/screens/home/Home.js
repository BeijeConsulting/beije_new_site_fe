import React from "react";
import { useTranslation } from "react-i18next";
import ScrollTrigger from 'react-scroll-trigger';

// MUI
import { Container } from "@mui/material";
import { Box } from "@mui/system";

// Style
import "./Home.css";

// Components
import CustomNavbar from "../../components/hooks_components/customNavbar/CustomNavbar";
import ScrollDownButton from "../../components/functional_components/scrollDownButton/ScrollDownButton";

const Home = (props) => {
  const { t } = useTranslation();

  const secSectionEnterViewport = () => {
    console.log("sono nella seconda sezione");
  }

  return (
    <>
      {/* First section with title */}
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"home-fist-section-container paddingX-container-default d-flex flex-column justify-center"}
      >
        <Box className={"home-first-section-title-container"}>
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
      <ScrollTrigger onEnter={secSectionEnterViewport}>
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
      </ScrollTrigger>

      {/* Box with dark bg for next sections */}
      <Box className={"bg-dark-grey"}>
        <Container
          component={"section"}
          maxWidth={"false"}
          className={"home-third-section-container d-flex flex-column justify-center"}
        >

        </Container>
      </Box>
    </>
  );
}

// https://beije.s3.eu-west-1.amazonaws.com/video_home.mp4
export default Home;
