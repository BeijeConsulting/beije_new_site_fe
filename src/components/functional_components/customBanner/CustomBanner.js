import React from "react";

// MUI
import { Container } from "@mui/material";

// Style
import "./CustomBanner.css"

// Components
import CustomIconButton from "../ui/customIconButton/CustomIconButton";

const CustomBanner = (props) => {
  return (
    <Container
      maxWidth={"false"}
      className={"banner-container paddingX-container-general-pages"}
    >
      <h2
        className="titles-level3"
      >{props.title}
      </h2>
      <p>{props.text}</p>
      <p
        className={props.classNameEphasiesTxt}
      >
        {props.enphasisTxt}
      </p>

      {props.children}

    </Container>
  )
}

CustomBanner.defaultProps = {
  classNameEphasiesTxt: "banner-enphasis-txt"
}

export default CustomBanner