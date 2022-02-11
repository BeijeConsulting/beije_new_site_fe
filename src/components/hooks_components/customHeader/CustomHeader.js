import React, { useState } from 'react';

// MUI
import { Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
const pages = ["Products", "Pricing", "Blog"];

// Style
import './CustomHeader.css'


const CustomHeader = () => {

  const [state, setState] = useState({
    anchorElNav: null
  })

  const handleOpenNavMenu = (event) => {
    setState({
      anchorElNav: event.currentTarget
    });
  };

  const handleCloseNavMenu = () => {
    setState({
      anchorElNav: null
    });
  };

  return (
    <Toolbar
      disableGutters
      sx={{ display: "flex", justifyContent: { xs: "space-between", sm: "none" } }}
    >
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ mr: 2, display: "flex", marginRight: '10%' }}
      >
        LOGO
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {page}
          </Button>
        ))}
      </Box>

      <Box sx={{ flexGrow: 0 }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
          sx={{ p: 0 }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={state.anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          open={Boolean(state.anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: "block"
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Toolbar>

  );
}

export default CustomHeader;
