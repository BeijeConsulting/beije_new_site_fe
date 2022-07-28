import React from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

// Style
import './BlogCard.css';

// MUI
import { Box, Container } from "@mui/material";

// Constants
import { clock } from "../../../utils/properties";

// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";


const BlogCard = (props) => {

  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToDetail = () => {
    let route = props.community ? `/community/${props.permalink}` : `/blog/${props.permalink}`
    navigate(route)
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

        <div className={"blog-card-text-description"}>

          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
          >
            {props.description}
          </ReactMarkdown>
        </div>
        {
          !props.community &&
          <div className={"blog-card-text-postedby"}>
            <FontAwesomeIcon icon={clock} className={"blog-card-clock-icon"} />{t("blog.postedBy")} {props.postedby} {t("blog.postedOn")} {props.posted}
          </div>
        }

      </Container>
    </Box>
  )
}

export default BlogCard