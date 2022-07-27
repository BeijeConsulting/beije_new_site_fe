import React, { useEffect, useState } from "react";
import Gallery from "react-grid-gallery";
import { useParams } from "react-router-dom";

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

const CommunityDetail = (props) => {

  const [state, setState] = useState({
    communityDetailDataResponse: null,
    images: [],
  })


  // const permalink = new URLSearchParams(location.search).get("event");
  const { permalink } = useParams();

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
    let communityDetailDataResponse = await ApiCalls.community_getListDetail(permalink);


    const ARR = communityDetailDataResponse?.images.map((img) => {
      return {
        src: img,
        thumbnail: img,
        thumbnailWidth: 320,
        thumbnailHeight: 212
      }
    })

    setState({
      ...state,
      communityDetailDataResponse,
      images: ARR,
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
          <h1>{state.communityDetailDataResponse?.title}</h1>
          <p>{state.communityDetailDataResponse?.subtitle}</p>
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
                src={state.communityDetailDataResponse?.cover_img}
              />
            </Box>
            <Box className={"community-detail-second-section-title-container"}>
              <h2>{state.communityDetailDataResponse?.title}</h2>
              <p>{state.communityDetailDataResponse?.description}</p>
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
            images={state.images || []}
            enableImageSelection={false}
            className={"community-gallery-container"}
          />
        </Box>
      </Container>

    </Box>
  )
}

export default connect()(CommunityDetail)