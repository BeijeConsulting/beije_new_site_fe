import React from "react";
import { useTranslation } from "react-i18next";

// Style
import './BlogCard.scss';

// MUI
import { Box, Container } from "@mui/material";

// Constants
import { clock } from "../../../utils/properties";

// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

// utils
// import { converter } from "../../../utils/utilities";

const BlogCard = (props) => {

  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToDetail = () => {
    if (props.events) {
      navigate(`/events/${props.permalink}`);
    }
    else {
      navigate(`/blog/${props.permalink}`);
    }
  }

  return (
    <Box
      className={"blog-card-container"}
      onClick={goToDetail}
    >
      <Container
        className={"blog-card-image-container"}
      >
        <img
          alt="blog image"
          src={props.src}
        />
      </Container>
      <Container
        className={"blog-card-text-container"}
      >
        <div className={"blog-card-text-title"}>{props.title}</div>
        {
          !props.community &&
          <div className={"blog-card-text-subtitle"}>{props.subtitle}</div>
        }
        {/* <div className={"blog-card-text-description"}>
          <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(props.subtitle) }} />
        </div> */}
        {
          !props.community &&
          <div className={"blog-card-text-postedby"}>
            <FontAwesomeIcon icon={clock} className={"blog-card-clock-icon"} />{props.postedby?.length > 0 ? t("blog.postedBy") : t("blog.posted")} {props.postedby} {t("blog.postedOn")} {props.posted}
          </div>
        }

      </Container>
    </Box>
  )
}

export default BlogCard