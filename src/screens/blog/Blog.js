import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

// Style
import './Blog.css';

// MUI
import { Box, Container } from "@mui/material";

// Components
import BlogCard from "../../components/functional_components/blogCard/BlogCard";
import arrayTest from "../../arrayTest.json";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

const Blog = (props) => {

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    props.dispatch(setCurrentPage("blog"));
    props.dispatch(setVisibilityNavbar(true));
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

  return (
    <Box
      className={"bg-dark-grey margin-top-container-screens"}
    >
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"paddingX-container-general-pages blog-first-section-container"}
      >
        <h1>{t("blog.title")}</h1>
        <p>{t("blog.description")}</p>
      </Container>

      <Container
        component={"section"}
        maxWidth={"false"}
        className={"paddingX-container-general-pages blog-second-section-container"}
      >
        {
          arrayTest.map((post, index) => {
            return (
              <div key={index} className={"blog-second-section-card-container"}>
                <BlogCard
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