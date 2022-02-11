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
      <Container
        maxWidth="md"
        sx={{ height: "100vh", color: "#fff", border: "1px solid #fff" }}
      >
        <h1>Aiutiamo le aziende a realizzare progetti innovativi attraverso Team di Valore</h1>
        <h2>Questo è un testo h2</h2>
        <h3>Questo è un testo h3</h3>

      </Container>
      <Container
        maxWidth="md"
        sx={{ height: "100vh", color: "#fff" }}
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
