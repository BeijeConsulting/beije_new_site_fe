import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Style
import './Blog.css';

// MUI
import { Box, Container, Divider } from "@mui/material";

// Components
import blogArrayTest from "../../blogArrayTest.json";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

// Constants
import { clock } from "../../utils/properties";

// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlogCard from "../../components/functional_components/blogCard/BlogCard";

const Blog = (props) => {

  const { t } = useTranslation();
  const location = useLocation();

  const permalink = new URLSearchParams(location.search).get("article");

  const [state, setState] = useState({
    blogData: null,
    latestArticles: null
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
    blogArrayTest.map((blog) => {
      if (blog.id == permalink) {
        blogData = blog;
      }
    })

    let latestArticles = removeThisBlogFromList(blogArrayTest);

    setState({
      ...state,
      blogData: blogData,
      latestArticles: latestArticles.slice(0, 4)
    })
  }

  // questa funzione rimuove l'articolo aperto dall'elenco degli articoli che ritornano dall'API
  const removeThisBlogFromList = (latestArticles) => {
    let value = latestArticles;
    value.splice(value.findIndex(function (i) {
      return i.id == permalink;
    }), 1);
    return value;
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
        <h2>{t("blog.title")}</h2>
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
            <h3>
              {getValueFromLang(state.blogData.subtitle, props.languageDuck.currentLanguage)}
            </h3>
            <div className={"blog-card-text-postedby"}>
              <FontAwesomeIcon icon={clock} className={"blog-card-clock-icon"} />{t("blog.postedBy")} {state.blogData.postedBy} {t("blog.postedOn")} {state.blogData.posted}
            </div>
            <div>
              {getValueFromLang(state.blogData.description, props.languageDuck.currentLanguage)}
            </div>
          </Box>
        </Container>
      }

      <Container
        className={"paddingX-container-general-pages blog-detail-third-section-container"}
        component={"article"}
      >
        <h3>{t("blog.latestArticles")}</h3>
        {
          state.latestArticles &&
          <Box>
            {
              state.latestArticles.map((post, i) => {
                return (
                  <div key={i} className={"blog-detail-third-section-carousel-card-container"}>
                    <BlogCard
                      permalink={post.id}
                      src={post.image}
                      title={getValueFromLang(post.title, props.languageDuck.currentLanguage)}
                      subtitle={getValueFromLang(post.subtitle, props.languageDuck.currentLanguage)}
                      description={getValueFromLang(post.description, props.languageDuck.currentLanguage)}
                      postedby={post.postedBy}
                      posted={post.posted}
                    />
                  </div>
                )
              })
            }
          </Box>

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

export default connect(mapStateToProps)(Blog)