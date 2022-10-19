import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { isEmpty } from "lodash";
import { Helmet } from "react-helmet";

// Style
import './Blog.css';

// MUI
import { Box, Container, Divider, Skeleton } from "@mui/material";

// Components
import BlogCard from "../../components/functional_components/blogCard/BlogCard";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// API
import ApiCalls from "../../services/api/ApiCalls";

// utils
import { millisecsToDate } from "../../utils/utilities";


const Blog = (props) => {

  const { t } = useTranslation();
  const [state, setState] = useState({
    blogDataResponse: null
  })

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    props.dispatch(setCurrentPage("blog"));
    props.dispatch(setVisibilityNavbar(true));

    getBlogData();

    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [props.languageDuck.currentLanguage])

  const getBlogData = async () => {
    let blogDataResponseAPI = await ApiCalls.blog_getList(props.languageDuck.currentLanguage);
    let blogDataResponse = blogDataResponseAPI;
    
    setState({
      ...state,
      blogDataResponse: blogDataResponse
    })
  }

  return (
    <>
      <Helmet>
        <title>{t('helmet.meta_title.blog')}</title>
        <meta name="description" content={t('helmet.meta_description.blog')} />
        <meta name="keywords" content={t('helmet.keywords.blog')} />
        <meta name="google" content="notranslate" />
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
            <h1>{t("blog.title")}</h1>
            <p>{t("blog.description")}</p>
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
          {
            !state.blogDataResponse &&
            <div
              className="d-flex flex-column items-center width-100"
            >
              <div
                className="d-flex flex-row max-width-1200 width-100 marginY-30"
              >
                <Skeleton variant="rectangular" width={"33.3%"} height={300} animation="wave" />
                <Skeleton variant="rectangular" width={"33.3%"} height={300} animation="wave" className="marginX-20" />
                <Skeleton variant="rectangular" width={"33.3%"} height={300} animation="wave" />
              </div>
              <div
                className="d-flex flex-row max-width-1200 width-100 marginY-30"
              >
                <Skeleton variant="rectangular" width={"33.3%"} height={300} animation="wave" />
                <Skeleton variant="rectangular" width={"33.3%"} height={300} animation="wave" className="marginX-20" />
                <Skeleton variant="rectangular" width={"33.3%"} height={300} animation="wave" />
              </div>
              <div
                className="d-flex flex-row max-width-1200 width-100 marginY-30"
              >
                <Skeleton variant="rectangular" width={"33.3%"} height={300} animation="wave" />
                <Skeleton variant="rectangular" width={"33.3%"} height={300} animation="wave" className="marginX-20" />
                <Skeleton variant="rectangular" width={"33.3%"} height={300} animation="wave" />
              </div>
            </div>
          }
          {state.blogDataResponse && !isEmpty(state.blogDataResponse) &&
            <Box className={"width-100 max-width-1200 blog-second-section-container"}>

              {
                state.blogDataResponse.map((post, index) => {
                  return (
                    <div key={index} className={"blog-second-section-card-container"}>
                      <BlogCard
                        permalink={post.permalink}
                        src={post.cover_img}
                        title={post.title}
                        subtitle={post.subtitle}
                        description={post.description}
                        postedby={post.author}
                        posted={millisecsToDate(post.create_datetime, props.languageDuck.currentLanguage)}
                      />
                    </div>
                  )
                })
              }
            </Box>
          }
          {
            isEmpty(state.blogDataResponse) &&
            <div></div>
          }
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

export default connect(mapStateToProps)(Blog)