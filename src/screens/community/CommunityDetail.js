import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

// Style
import './Community.css';

// MUI
import { Box, Container, Divider } from "@mui/material";

// Redux
import { connect } from "react-redux";
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";

import Gallery from "react-grid-gallery";

const CommunityDetail = (props) => {

  const IMAGES =
    [{
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: "Federica ubriaca"
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Federica che ci prova con Ivo"
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212
    }]

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    props.dispatch(setCurrentPage("community"));
    props.dispatch(setVisibilityNavbar(true));

    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [])

  return (
    <Box
      className={"bg-dark-grey margin-top-container-screens"}
    >
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"paddingX-container-general-pages blog-first-section-container"}
      >
        <h1>{t("community.title")}</h1>
        <p>{t("community.description")}</p>
      </Container>

      <Divider
        className={"divider"}
      />

      <Container
        component={"section"}
        maxWidth={"false"}
        className={"paddingX-container-general-pages"}
      >
        <Gallery
          images={IMAGES}
          enableImageSelection={false}
          className={"community-gallery-container"}
        />
      </Container>

    </Box>
  )
}

export default connect()(CommunityDetail)