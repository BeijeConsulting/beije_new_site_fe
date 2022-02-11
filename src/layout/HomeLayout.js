import React from "react";
import { Outlet } from "react-router-dom";

// MUI
import { Box } from "@mui/system";
import { AppBar, Container } from "@mui/material";

// Style
import './HomeLayout.css'

// Components
import CustomHeader from "../components/hooks_components/customHeader/CustomHeader";
import CustomFooter from "../components/hooks_components/customFooter/CustomFooter";

const HomeLayout = () => {
  return (
    <Box>
      <video className="homeLayout-video" autoPlay muted loop playsinline>
        <source src="https://beije.s3.eu-west-1.amazonaws.com/video_home.mp4" type="video/mp4" />
      </video>

      <AppBar
        position="sticky"
        className="homeLayout-container-header"
      >
        <Container maxWidth="md">
          <CustomHeader />
        </Container>
      </AppBar>

      <main
      >
        <Outlet />
      </main>
      <footer>
        <CustomFooter />
      </footer>
    </Box>


  );
}

export default HomeLayout;
