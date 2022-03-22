import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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
    // let blogDataResponse = await blog_getList();
    let blogDataResponse = blogArrayTest;
    setState({
      blogDataResponse: blogDataResponse
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
        <h1>{t("blog.title")}</h1>
        <p>{t("blog.description")}</p>
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
          !state.blogDataResponse &&
          <>
            <Skeleton variant="rectangular" width={300} height={200} />
            <Skeleton />
            <Skeleton width="60%" />
          </>
        }
        {
          state.blogDataResponse &&
          state.blogDataResponse.map((post, index) => {
            return (
              <div key={index} className={"blog-second-section-card-container"}>
                <BlogCard
                  permalink={post.permalink}
                  src={post.cover_img}
                  title={post.title}
                  subtitle={post.subtitle}
                  description={post.description}
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