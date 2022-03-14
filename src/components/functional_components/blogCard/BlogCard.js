import React from "react";
import { useTranslation } from "react-i18next";

// Style
import './BlogCard.css';

// MUI
import { Box, Container } from "@mui/material";


const BlogCard = (props) => {

  const { t } = useTranslation();

  return (
    <Box
      className={"blog-card-container"}
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
        <div className={"blog-card-text-subtitle"}>{props.subtitle}</div>
        <div className={"blog-card-text-description"}>{props.description}</div>
        <div className={"blog-card-text-postedby"}>
          {t("blog.postedBy")} {props.postedby} {t("blog.postedOn")} {props.posted}
        </div>
      </Container>
    </Box>
  )
}

export default BlogCard