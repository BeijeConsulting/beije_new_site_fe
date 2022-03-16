import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Style
import './Blog.css';

// MUI
import { Box, Container, Divider } from "@mui/material";

// Components
import BlogCard from "../../components/functional_components/blogCard/BlogCard";
import arrayTest from "../../arrayTest.json";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

const Blog = (props) => {

  const { t } = useTranslation();
  const location = useLocation();

  const permalink = new URLSearchParams(location.search).get("article");

  const [state, setState] = useState({
    blogData: null
  })

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    props.dispatch(setCurrentPage("blog"));
    props.dispatch(setVisibilityNavbar(true));

    getData();

    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [])

  const getValueFromLang = (values, lang) => {
    let response;

    values.map((value) => {
      if (value.lang === lang) {
        response = value.translation
      }
    })
    return response;
  }

  const getData = () => {
    let blogData;
    arrayTest.map((blog, i) => {
      if (blog.id == permalink) {
        blogData = blog;
      }
    })

    setState({
      ...state,
      blogData: blogData
    })
  }

  console.log(state.blogData)
  return (
    <Box
      className={"bg-dark-grey margin-top-container-screens"}
    >
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"paddingX-container-general-pages blog-first-section-container"}
      >
        <h2 className={"uppercase"}>{t("blog.title")}</h2>
        <p>{t("blog.description")}</p>
      </Container>

      <Divider
        className={"divider"}
      />

      {
        state.blogData &&
        <Container
          className={"paddingX-container-general-pages blog-detail-second-section-container"}
          component={"article"}
        >
          <Container
            className={"blog-detail-image-container"}
          >
            <img
              alt="blog image"
              src={state.blogData.image}
            />
          </Container>
          <Box className={"blog-detail-text-container"}>
            <h1>
              {getValueFromLang(state.blogData.title, props.languageDuck.currentLanguage)}
            </h1>
            <div>
              {getValueFromLang(state.blogData.description, props.languageDuck.currentLanguage)}
            </div>
          </Box>
        </Container>
      }

      {/* 
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"paddingX-container-general-pages blog-second-section-container"}
      >

      </Container> */}


    </Box>
  )
}

const mapStateToProps = state => (
  {
    languageDuck: state.languageDuck,
  }
)

export default connect(mapStateToProps)(Blog)