import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// MUI
import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";

// Style
import './CustomHeader.css'

// Components
import BurgerMenu from '../burgerMenu/BurgerMenu';
import CustomNavbar from '../customNavbar/CustomNavbar';
import SwitchLang from '../switchLang/SwitchLang';

const CustomHeader = (props) => {

  return (
    <Toolbar
      disableGutters
      className={"header-container bg-transparent"}
    >
      <Link
        to=""
      >
        <img
          src={props.logoDuck.logo}
          alt="Logo Beije People First"
          className="header-container-logo"
        />
      </Link>

      {props.showNavbarTopDuck.showNavbar &&
        <Box className={"header-navbar-container"}>
          <CustomNavbar />
        </Box>
      }

      <Box sx={{ flexGrow: 0 }} className={"d-flex flex-row items-center"}>
        <Box className={"header-switchLang-container"}>
          <SwitchLang />
        </Box>
        <BurgerMenu />
      </Box>
    </Toolbar >
  );
}

const mapStateToProps = state => (
  {
    logoDuck: state.logoDuck,
    showNavbarTopDuck: state.showNavbarTopDuck
  }
)

export default connect(mapStateToProps)(CustomHeader);
