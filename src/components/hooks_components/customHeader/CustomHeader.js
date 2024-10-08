import React from 'react';


// Redux
import { connect } from 'react-redux';

// MUI
import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";

// Style
import './CustomHeader.scss'

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
      <a
        href="/"
      >
        <img
          src={props.logoDuck.logo}
          alt="Logo People First"
          className="header-container-logo"
        />
      </a>
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
