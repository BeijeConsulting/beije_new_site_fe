import React, { useEffect, useState } from "react";

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// MUI
import { Box, Container } from "@mui/material";

// Style
import "./CaseStudiesDetail.css";

// Components
import GoBackBtn from "../../components/functional_components/goBackBtn/GoBackBtn";

// Remove
import caseStudiesTrialObj from "./caseStudiesTrialObj.json";

const CaseStudiesDetail = (props) => {

  const [state, setState] = useState({
    caseStudiesResponse: null
  })

  const permalink = new URLSearchParams(location.search).get("caseStudy");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    props.dispatch(setCurrentPage("up"));
    props.dispatch(setVisibilityNavbar(true));

    getCaseStudiesData();

    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [])

  // Add async and await. Here add call to API
  const getCaseStudiesData = async () => {
    let caseStudiesResponse = caseStudiesTrialObj;

    caseStudiesResponse.map(findCaseStudy)
  }

  const findCaseStudy = (item) => {
    if (item.permalink === permalink) {
      return (
        setState({
          caseStudiesResponse: item
        })
      )
    }
  }

  return (
    <Box
      className={"bg-dark-grey margin-top-container-screens"}
    >


      {
        state.caseStudiesResponse &&
        <Container
          component={"section"}
          maxWidth={"false"}
          className={"case-studies-detail-container paddingX-container-general-pages"}
        >
          <Box
            className="case-studies-detail-btn-container"
          >
            <GoBackBtn />
          </Box>

          <Box
            className={"case-studies-detail-img-container"}
            style={{ backgroundColor: state.caseStudiesResponse.colorBg }}
          >
            <img
              alt="logo"
              src={state.caseStudiesResponse.imgCarousel}
            />


          </Box>
          <Box
            className={"case-studies-detail-txt-container"}
          >
            <h1>
              {state.caseStudiesResponse.title}
            </h1>
            <h2 className="titles-level3">
              {state.caseStudiesResponse.subtitle}
            </h2>
            <p>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
              >
                {state.caseStudiesResponse.description}
              </ReactMarkdown>
            </p>
          </Box>
        </Container>
      }

    </Box>
  )
}

export default connect()(CaseStudiesDetail)