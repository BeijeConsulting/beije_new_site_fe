import React, { useEffect, useState } from "react";

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// Api
import ApiCalls from "../../services/api/ApiCalls";

// MUI
import { Box, Container } from "@mui/material";

// Style
import "./CaseStudiesDetail.css";

// Components
import GoBackBtn from "../../components/functional_components/goBackBtn/GoBackBtn";

// Remove
import caseStudiesTrialObj from "./caseStudiesTrialObj.json";
import { useNavigate, useParams } from "react-router-dom";

const CaseStudiesDetail = (props) => {

  const [state, setState] = useState({
    caseStudiesResponse: null
  })

  const { permalink } = useParams();
  const navigate = useNavigate();

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
    let caseStudiesResponse = await ApiCalls.caseStudies_getListDetail(permalink);
    if (!caseStudiesResponse) {
      navigate(`/beije-up`);
    }
    // let caseStudiesResponse = caseStudiesTrialObj;

    setState({
      ...state,
      caseStudiesResponse: caseStudiesResponse
    })

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
          className={"case-studies-detail-container paddingX-container-general-pages d-flex items-center flex-column"}
        >
          <Box
            className="case-studies-detail-btn-container max-width-1200 width-100"
          >
            <GoBackBtn />
          </Box>

          <Box
            className={"case-studies-detail-img-container max-width-1200 width-100"}
            style={{ backgroundColor: state.caseStudiesResponse.backgroundColor }}
          >
            <img
              alt="logo"
              src={state.caseStudiesResponse.logo}
            />


          </Box>
          <Box
            className={"case-studies-detail-txt-container max-width-1200 width-100"}
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