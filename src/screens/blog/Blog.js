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
import blogArrayTest from "../../blogArrayTest.json";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// API
import ApiCalls from "../../services/api/ApiCalls";

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
  }, [])

  const getBlogData = async () => {
    let blogDataResponseAPI = await ApiCalls.blog_getList(props.languageDuck.currentLanguage);
    let blogDataResponse = blogDataResponseAPI;
    // let blogDataResponse = blogArrayTest;
    setState({
      ...state,
      blogDataResponse: blogDataResponse
    })
  }

  const checkItemApi = (param) => {
    let datePosted = ""
    if (param.createDateTime) {
      if (param.createDateTime.dayOfMonth && param.createDateTime.monthValue && param.createDateTime.year) {
        datePosted = param.createDateTime.dayOfMonth + "/" + param.createDateTime.monthValue + "/" + param.createDateTime.year
      }
    }
    return datePosted
  }

  return (
    <>
      <Helmet>
        <title>{t('helmet.meta_title.blog')}</title>
        <meta name="description" content={t('helmet.meta_description.blog')} />
        <meta name="keywords" content={t('helmet.keywords.blog')} />
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
          <Box className={"width-100 max-width-1200 blog-second-section-container"}>
            {
              !state.blogDataResponse &&
              <>
                <Skeleton variant="rectangular" width={300} height={200} />
                <Skeleton />
                <Skeleton width="60%" />
              </>
            }
            {
              state.blogDataResponse && !isEmpty(state.blogDataResponse) &&
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
                      posted={checkItemApi(post)}
                    />
                  </div>
                )
              })
            }
            {
              isEmpty(state.blogDataResponse) &&
              <div></div>
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

export default connect(mapStateToProps)(Blog)