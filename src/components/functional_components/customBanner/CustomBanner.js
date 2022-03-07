import React from "react";

// MUI
import { Container } from "@mui/material";

// Style
import "./CustomBanner.css"

// Constants
import { linkYoutube, socialYt } from "../../../utils/properties"

// Components
import CustomIconButton from "../ui/customIconButton/CustomIconButton";

const CustomBanner = (props) => {
  return (
    <Container
      maxWidth={"false"}
      className={"banner-container paddingX-container-general-pages"}
    >
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <p
        className={props.classNameEphasiesTxt}
      >
        {props.enphasisTxt}
      </p>

      <CustomIconButton
        link_to={linkYoutube}
        target={"_blank"}
        type={"youtube-videos-primary"}
        iconFontAwsome={socialYt}
        classNameIcon={"youtube-videos-icon-primary"}
      />

    </Container>
  )
}

CustomBanner.defaultProps = {
  classNameEphasiesTxt: "banner-enphasis-txt"
}

export default CustomBanner