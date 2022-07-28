import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

// Style
import './Community.css';

// MUI
import { Box, Container, Divider, Skeleton } from "@mui/material";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";
import BlogCard from "../../components/functional_components/blogCard/BlogCard";

// Api
import ApiCalls from "../../services/api/ApiCalls";

// utils
import { millisecsToDate } from "../../utils/utilities";

const Community = (props) => {
  const [state, setState] = useState({
    communityDataResponse: null
  })

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    props.dispatch(setCurrentPage("events"));
    props.dispatch(setVisibilityNavbar(true));

    getDataCommunities()

    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [])

  const getDataCommunities = async () => {
    let communityDataResponse = await ApiCalls.community_getList(props.languageDuck.currentLanguage.toLowerCase());

    setState({
      ...state,
      communityDataResponse
    })
  }

  return (
    <>
      <Helmet>
        <title>{t('helmet.meta_title.community')}</title>
        <meta name="description" content={t('helmet.meta_description.community')} />
        <meta name="keywords" content={t('helmet.keywords.community')} />
      </Helmet>

      <Box
        className={"bg-dark-grey margin-top-container-screens"}
      >
        <Container
          component={"section"}
          maxWidth={"false"}
          className={"paddingX-container-general-pages blog-first-section-container d-flex justify-center"}
        >
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
          <Box className={"width-100 max-width-1200 blog-second-section-container"}>
            {
              !state.communityDataResponse &&
              <Skeleton />
            }
            {state.communityDataResponse &&
              state.communityDataResponse.map((event, index) => {
                return (
                  <div key={index} className={"blog-second-section-card-container"}>
                    <BlogCard
                      permalink={event.permalink}
                      src={event.cover_img}
                      title={event.title}
                      subtitle={event.subtitle}
                      description={event.description}
                      postedby={event.author}
                      community
                      posted={millisecsToDate(event.create_datetime)}
                    />
                  </div>
                )
              })
            }
          </Box>
        </Container>
      </Box>
    </>
  )
}

const mapStateToProps = state => (
  {
    languageDuck: state.languageDuck,
  }
)

export default connect(mapStateToProps)(Community)