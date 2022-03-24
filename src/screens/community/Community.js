import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

// Style
import './Community.css';

// MUI
import { Box, Container, Divider } from "@mui/material";

// Components
import communityArrayTest from "../../communityArrayTest.json";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";
import BlogCard from "../../components/functional_components/blogCard/BlogCard";

const Community = (props) => {

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    props.dispatch(setCurrentPage("community"));
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
          communityArrayTest.map((event, index) => {
            return (
              <div key={index} className={"blog-second-section-card-container"}>
                <BlogCard
                  permalink={event.id}
                  src={event.image}
                  title={getValueFromLang(event.title, props.languageDuck.currentLanguage)}
                  description={getValueFromLang(event.description, props.languageDuck.currentLanguage)}
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