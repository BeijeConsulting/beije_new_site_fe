import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useParams, useNavigate } from "react-router-dom";

// Style
import './Blog.css';

// MUI
import { Box, Container, Divider, Skeleton } from "@mui/material";

// Components
import blogArrayTest from "../../blogArrayTest.json";
import GoBackBtn from "../../components/functional_components/goBackBtn/GoBackBtn";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// Constants
import { clock } from "../../utils/properties";

// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlogCard from "../../components/functional_components/blogCard/BlogCard";

// API
import ApiCalls from "../../services/api/ApiCalls";

const Blog = (props) => {

  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const ref = useRef(null);

  // const permalink = new URLSearchParams(location.search).get("article");
  const permalink = useParams();

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

  const getData = async () => {
    let blogDataAPI = await ApiCalls.blog_getListDetail(permalink);
    if (!blogDataAPI) {
      navigate(`/blog`);
    }

    let blogDataResponseAPI = await ApiCalls.blog_getList(props.languageDuck.currentLanguage);
    let latestArticles = removeThisBlogFromList(blogDataResponseAPI);

    setState({
      ...state,
      blogData: blogDataResponseAPI,
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

  const scrollCarousel = (value) => {
    ref.current.scrollLeft += value;
  }

  return (
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
          <h2>{t("blog.title")}</h2>
          <p>{t("blog.description")}</p>
        </Box>
      </Container>

      <Divider
        className={"divider"}
      />
      {
        !state.blogData &&
        <Skeleton />
      }
      {
        state.blogData &&
        <Container
          className={"paddingX-container-general-pages blog-detail-second-section-container d-flex justify-center"}
          component={"article"}
        >
          <Box className={"max-width-1200"}>
            <Container
              className={"blog-detail-image-container"}
            >
              <img
                alt="blog image"
                src={state.blogData.cover_img}
              />
            </Container>
            <Box className={"blog-detail-text-container"}>
              <h1>
                {state.blogData.title}
              </h1>
              <h3>
                {state.blogData.subtitle}
              </h3>
              <div className={"blog-card-text-postedby"}>
                <FontAwesomeIcon icon={clock} className={"blog-card-clock-icon"} />{t("blog.postedBy")} {state.blogData.postedBy} {t("blog.postedOn")} {state.blogData.posted}
              </div>
              <div>
                {state.blogData.description}
              </div>
            </Box>
          </Box>
        </Container>
      }

      <Box
        className={"paddingX-container-general-pages blog-detail-third-section-container d-flex justify-center"}
        component={"article"}
      >
        <Box className={"width-100 max-width-1200"}>
          <h3>{t("blog.latestArticles")}</h3>
          {
            !state.latestArticles &&
            <Skeleton />
          }
          {
            state.latestArticles &&
            <Box className={"position-relative"}>
              <Box className={"blog-detail-latest-articles-container"} ref={ref}>
                {
                  state.latestArticles.map((post, i) => {
                    return (
                      <div key={i} className={"blog-detail-third-section-carousel-card-container"}>
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
              </Box>
              <Box className={"blog-detail-latest-articles-buttons-container max-width-1200"}>
                <button
                  className={"blog-detail-latest-articles-left-button"}
                  onClick={() => scrollCarousel(-345)}
                >
                  &#8249;
                </button>
                <button
                  className={"blog-detail-latest-articles-right-button"}
                  onClick={() => scrollCarousel(345)}
                >
                  &#8250;
                </button>
              </Box>
            </Box>
          }
        </Box>
      </Box>

    </Box >
  )
}

const mapStateToProps = state => (
  {
    languageDuck: state.languageDuck,
  }
)

export default connect(mapStateToProps)(Blog)