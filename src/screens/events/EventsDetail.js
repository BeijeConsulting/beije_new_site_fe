import React, { useEffect, useState } from "react";
import Gallery from "react-grid-gallery";
import { useParams } from "react-router-dom";

// Style
import './Events.css';

// MUI
import { Box, Container, Divider, Skeleton } from "@mui/material";

// Redux
import { connect } from "react-redux";
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";

// Components
import GoBackBtn from "../../components/functional_components/goBackBtn/GoBackBtn";

// Api
import ApiCalls from "../../services/api/ApiCalls";

// utils
import { checkPermalink, converter } from "../../utils/utilities";

const EventsDetail = (props) => {

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
  }, [location.href])

  const getCommunityData = async () => {
    let permalinkUSed = checkPermalink(permalink);
    let communityDetailDataResponse = await ApiCalls.community_getListDetail(permalinkUSed);


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
    <>   {
      !state.communityDetailDataResponse &&
      <div
        className="d-flex flex-column items-center paddingX-container-general-pages"
      >
        <div
          className="d-flex flex-column max-width-1200 width-100 marginY-30"
        >
          <Skeleton variant="rectangular" width={"100%"} height={300} animation="wave" className="marginY-30" />
          <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
          <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
          <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
          <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
          <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
          <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
          <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
          <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
          <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
          <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
          <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
          <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
          <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
          <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
          <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
          <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
        </div>
      </div>
    }
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
                {state.communityDetailDataResponse?.cover_img ?
                  <img
                    alt={"event photo"}
                    src={state.communityDetailDataResponse?.cover_img}
                  />
                  :
                  <Skeleton />}
              </Box>
              <Box className={"community-detail-second-section-title-container"}>
                <h2>{state.communityDetailDataResponse?.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(state.communityDetailDataResponse?.description) }} />
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
    </>
  )
}

export default connect()(EventsDetail)