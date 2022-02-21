import React from "react";

// MUI
import { Zoom, Box, useScrollTrigger } from '@mui/material';

// Style
import "./BackToTopButton.css"

const BackToTopButton = (props) => {

  const trigger = useScrollTrigger();

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 100 }}
      >
        {props.children}
      </Box>
    </Zoom>
  )
}

export default BackToTopButton