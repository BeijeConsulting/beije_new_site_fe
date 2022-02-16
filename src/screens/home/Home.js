import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

// MUI
import { Container } from "@mui/material";
import { Box } from "@mui/system";

// Style
import "./Home.css";

// Components
import CustomNavbar from "../../components/hooks_components/customNavbar/CustomNavbar";

const Home = (props) => {
  const { t } = useTranslation();
  const refSecondSection = useRef(null)

  console.log('ref: ', refSecondSection);

  return (
    <>
      {/* First section with title */}
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"home-fist-section-container paddingX-container-default d-flex flex-column justify-center"}
      >
        <Box className={"home-first-section-title-container"}>
          <h1>Aiutiamo le aziende a realizzare progetti innovativi attraverso Team di Valore</h1>
        </Box>
        <Box className={"home-first-section-navbar-container"}>
          <CustomNavbar />
        </Box>
      </Container>

      {/* Second section with description */}
      <Container
        ref={refSecondSection}
        component={"section"}
        maxWidth={"false"}
        className={"home-second-section-container paddingX-container-default  d-flex flex-column justify-center"}
      >
        <p>Questo è un normale paragrafo</p>

      </Container>
      <Box>

      </Box>
    </>
  );
}

// https://beije.s3.eu-west-1.amazonaws.com/video_home.mp4
export default Home;
