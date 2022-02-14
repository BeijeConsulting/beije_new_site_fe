import React from 'react';

// MUI
import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";


// Style
import './CustomHeader.css'

// Constants
import { logo_secondary } from "../../../utils/properties"

// Components
import BurgerMenu from '../burgerMenu/BurgerMenu';


const CustomHeader = () => {

  return (
    <Toolbar
      disableGutters
      maxWidth={"none"}
      className={"header-container bg-transparent"}
    >
      <img src={logo_secondary} alt="Logo Beije People First" className="header-container-logo" />

      {/* <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {page}
          </Button>
        ))}
      </Box> */}

      <Box sx={{ flexGrow: 0 }}>
        <BurgerMenu />

      </Box>
    </Toolbar>

  );
}

export default CustomHeader;
