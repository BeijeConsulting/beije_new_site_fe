import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Style
import './Community.css';

// MUI
import { Box, Container, Divider, Skeleton } from "@mui/material";

// Remove
import communityArrayTest from "../../communityArrayTest.json";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";
import BlogCard from "../../components/functional_components/blogCard/BlogCard";

// Api
import ApiCalls from "../../services/api/ApiCalls";

const Community = (props) => {
  const [state, setState] = useState({
    communityDataResponse: null
  })

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    props.dispatch(setCurrentPage("community"));
    props.dispatch(setVisibilityNavbar(true));

    getDataCommunities()

    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [])

  const getDataCommunities = async () => {
    let communityDataResponse = communityArrayTest;
    // let communityDataResponse = await ApiCalls.community_getList(props.languageDuck.currentLanguage);
    // console.log("communityDataResponse: ", communityDataResponse);

    setState({
      ...state,
      communityDataResponse: communityDataResponse
    })
  }

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
        className={"paddingX-container-general-pages blog-second-section-container"}
      >
        {
          !state.communityDataResponse &&
          <Skeleton />
        }
        {state.communityDataResponse &&
          state.communityDataResponse.map((event, index) => {
            return (
              <div key={index} className={"blog-second-section-card-container"}>
                <BlogCard
                  permalink={event.id}
                  src={event.image}
                  title={event.title}
                  description={event.description}
                  community
                />
              </div>
            )
          })
        }
      </Container>

    </Box>
  )
}

const mapStateToProps = state => (
  {
    languageDuck: state.languageDuck,
  }
)

export default connect(mapStateToProps)(Community)