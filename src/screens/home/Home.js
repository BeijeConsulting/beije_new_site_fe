import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

// MUI
import { Container } from "@mui/material";
import { Box } from "@mui/system";

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const ref = useRef(null);
  // gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   const element = ref.current;

  //   const firstSection = element.querySelector('.home-first-section-gsap');

  //   const t1 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: firstSection,
  //       start: '75% 55%', /* 75% define the position of scroller-start, 60% define the position of start */
  //       toggleActions: "play none none none",
  //       // markers: true
  //     }
  //   })

  //   t1.from(firstSection, {})
  //   t1.add(callFunction)
  // }, [])

  // const callFunction = () => {
  //   console.log("sono dentro la funzione");
  // }

  return (
    <Box ref={ref}>
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

      {/* Third section mobile */}
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"home-third-section-container-mobile paddingX-container-default"}
      >
        <Box className={"d-flex flex-column"}>
          <CustomTab
            objTab={tab_aboutUs}
          />
        </Box>
      </Container>

      {/* Box with dark bg for next sections */}
      <Box className={"home-bg-dark-container bg-dark-grey"}>

        <p className={"home-written-bg"}>People first</p>

        {/* Third section desktop */}
        <Container
          component={"section"}
          maxWidth={"false"}
          className={"home-third-section-container-desktop paddingX-container-default"}
        >
          <Box className={"d-flex flex-row"}>
            <CustomTab
              objTab={tab_aboutUs}
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

// https://beije.s3.eu-west-1.amazonaws.com/video_home.mp4
export default Home;
