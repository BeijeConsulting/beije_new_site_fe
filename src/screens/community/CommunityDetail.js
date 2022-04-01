import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Gallery from "react-grid-gallery";
import { useParams, useNavigate } from "react-router-dom";

// Style
import './Community.css';

// MUI
import { Box, Container, Divider } from "@mui/material";

// Redux
import { connect } from "react-redux";
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";

// Components
import GoBackBtn from "../../components/functional_components/goBackBtn/GoBackBtn";

// Api
import ApiCalls from "../../services/api/ApiCalls";

// Remove
import communityArrayTest from "../../communityArrayTest.json";

const CommunityDetail = (props) => {

  const IMAGES =
    [{
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Prova caption 1"
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Prova caption 2"
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212
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
      thumbnailHeight: 212
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212
    }]

  const { t } = useTranslation();

  const [state, setState] = useState({
    communityDetailDataResponse: null
  })

  // const permalink = new URLSearchParams(location.search).get("event");
  const permalink = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    props.dispatch(setCurrentPage("community"));
    props.dispatch(setVisibilityNavbar(true));

    getCommunityData()

    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [])

  const getCommunityData = async () => {
    // let communityDetailDataResponse = await ApiCalls.community_getListDetail(permalink)
    // if (!communityDetailDataResponse) {
    //   navigate(`/blog`);
    // }

    let communityDetailDataResponse = communityArrayTest;

    setState({
      ...state,
      communityDetailDataResponse: communityDetailDataResponse
    })
  }

  return (
    <Box
      className={"bg-dark-grey margin-top-container-screens"}
    >
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"paddingX-container-general-pages blog-first-section-container d-flex items-center flex-column"}
      >
        <Box className={"max-width-1200 width-100 margin-bottom-30"}>
          <GoBackBtn />
        </Box>
        <Box className={"max-width-1200"}>
          <h1>{t("community.title")}</h1>
          <p>{t("community.description")}</p>
        </Box>
      </Container>

      <Divider
        className={"divider"}
      />

      <Container
        component={"section"}
        maxWidth={"false"}
        className={"paddingX-container-general-pages d-flex justify-center"}
      >
        <Box className={"max-width-1200 width-100"}>
          <Box className={"community-detail-second-section-container"}>
            <Box className={"community-detail-second-section-image-container"}>
              <img
                alt={"event photo"}
                src={IMAGES[0].src}
              />
            </Box>
            <Box className={"community-detail-second-section-title-container"}>
              <h2>CHRISTMAS EVENT</h2>
              <p>L&apos;evento di natale più bello di sempre xD</p>
            </Box>
          </Box>
        </Box>
      </Container>

      <Container
        component={"section"}
        maxWidth={"false"}
        className={"paddingX-container-general-pages d-flex justify-center"}
      >
        <Box className={"max-width-1200 width-100 "}>
          <Gallery
            images={IMAGES}
            enableImageSelection={false}
            className={"community-gallery-container"}
          />
        </Box>
      </Container>

    </Box>
  )
}

export default connect()(CommunityDetail)