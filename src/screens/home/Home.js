import React from "react";
import { useTranslation } from "react-i18next";

// MUI
import { Container } from "@mui/material";
import { Box } from "@mui/system";

// Style
import "./Home.css";

// Components

const Home = (props) => {
  const { t } = useTranslation();
  return (
    <>
      {/* First section with title */}
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"home-fist-section-container paddingX-container-default d-flex flex-column justify-center"}
      >
        <h1>Aiutiamo le aziende a realizzare progetti innovativi attraverso Team di Valore</h1>
      </Container>

      {/* Second section with description */}
      <Container
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
