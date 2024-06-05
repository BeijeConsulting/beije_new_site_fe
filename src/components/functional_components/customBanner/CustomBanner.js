import React from "react";

// MUI
import { Container, Grid } from "@mui/material";

// Style
import "./CustomBanner.scss"

// constats
import { posterVideoAcademy } from "../../../utils/properties";


const CustomBanner = (props) => {
  return (
    <Container
      maxWidth={"false"}
      className={"banner-container paddingX-container-general-pages"}
    >
      <h2
        className="h3"
      >{props.title}
      </h2>
      <Grid
        container
        spacing={4}
        className={'banner-container-grid'}
      >
        <Grid item xs={12} md={7}>
          <video
            width="100%"
            height="290"
            preload="metadata"
            controls={true}
            controlsList="nodownload"
            poster={posterVideoAcademy}
            style={{ visibility: "visible" }}
          >
            <source
              src="https://beije-people-first.s3.eu-south-1.amazonaws.com/site/academy_video.mp4"
              type="video/mp4" />

          </video>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          className={'banner-container-grid-col2'}
        >
          <p>{props.text}</p>
          <p
            className={props.classNameEphasiesTxt}
          >
            {props.enphasisTxt}
          </p>
          {props.children}
        </Grid>
      </Grid>



    </Container >
  )
}

CustomBanner.defaultProps = {
  classNameEphasiesTxt: "banner-enphasis-txt"
}

export default CustomBanner