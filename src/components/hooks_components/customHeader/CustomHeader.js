import React from 'react';

// MUI
import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";


// Style
import './CustomHeader.css'

// Constants
import { logo_primary_light } from '../../../utils/properties';
import { logo_secondary } from "../../../utils/properties"

// Components
import BurgerMenu from '../burgerMenu/BurgerMenu';
import CustomNavbar from '../customNavbar/CustomNavbar';
import SwitchLang from '../switchLang/SwitchLang';


const CustomHeader = () => {

  return (
    <Toolbar
      disableGutters
      maxWidth={"none"}
      className={"header-container bg-transparent"}
    >
      <img src={logo_primary_light} alt="Logo Beije People First" className="header-container-logo" />

      <Box className={"header-navbar-container"}>
        <CustomNavbar />
      </Box>
      <Box className={"header-switchLang-container"}>
        <SwitchLang />
      </Box>
      <Box sx={{ flexGrow: 0, flexDirection: "row" }}>
        <BurgerMenu />
      </Box>
    </Toolbar>

  );
}

export default CustomHeader;
