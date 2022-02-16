import React from "react";

// MUI
import { useScrollTrigger, Slide } from "@mui/material";

// Style
import "./HideOnScroll"

const HideOnScroll = (props) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
}

export default HideOnScroll