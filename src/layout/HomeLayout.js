import React from "react";
import { Outlet } from "react-router-dom";

// Redux
import { connect } from "react-redux";

// MUI
import { Box } from "@mui/system";
import { AppBar } from "@mui/material";

// Style
import './HomeLayout.css'

// Components
import CustomHeader from "../components/hooks_components/customHeader/CustomHeader";
import CustomFooter from "../components/hooks_components/customFooter/CustomFooter";

const HomeLayout = (props) => {

  return (
    <Box className={props.burgerMenuDuck.menuOpen ? "position-fixed" : ""} >
      <video className="homeLayout-video" autoPlay muted loop playsinline>
        <source src="https://beije.s3.eu-west-1.amazonaws.com/video_home.mp4" type="video/mp4" />
      </video>

      <AppBar
        position="sticky"
        className="bg-transparent"
      >
        <CustomHeader />
      </AppBar>

      <main>
        <Outlet />
      </main>

      <footer>
        <CustomFooter />
      </footer>
    </Box>


  );
}

const mapStateToProps = state => (
  {
    burgerMenuDuck: state.burgerMenuDuck
  }
)


export default connect(mapStateToProps)(HomeLayout);
