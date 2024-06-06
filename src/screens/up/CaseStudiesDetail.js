import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// Api
import ApiCalls from "../../services/api/ApiCalls";

// MUI
import { Box, Container, Skeleton } from "@mui/material";

// Style
import "./CaseStudiesDetail.scss";

// Components
import GoBackBtn from "../../components/functional_components/goBackBtn/GoBackBtn";

// utils
import { converter } from "../../utils/utilities";

const CaseStudiesDetail = (props) => {

  const [state, setState] = useState({
    caseStudiesResponse: null
  })

  const { permalink, lang } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    props.dispatch(setVisibilityNavbar(true));
    if (pathname.includes("beije-up")) {
      props.dispatch(setCurrentPage("up"));
      getCaseStudiesDataUp();
    }
    else if (pathname.includes("beije-talent-academy")) {
      props.dispatch(setCurrentPage("academy"));
      getCaseStudiesDataAcademy();
    }

    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [location.href])

  const { pathname } = useLocation();

  // Add async and await. Here add call to API
  const getCaseStudiesDataUp = async () => {
    let caseStudiesResponse = [];

    caseStudiesResponse = await ApiCalls.caseStudies_getListDetail(permalink);
    // if (!caseStudiesResponse) {
    //   navigate(`/beije-up`);

    // } else if (caseStudiesResponse.language !== lang) {
    //   navigate(`/${lang}/beije-up/${caseStudiesResponse.translateCasePermalink}`, { replace: true });
    // }

    setState({
      ...state,
      caseStudiesResponse: caseStudiesResponse
    })
  }

  const getCaseStudiesDataAcademy = async () => {
    let caseStudiesResponse = [];
    caseStudiesResponse = await ApiCalls.caseStudies_getListDetail(permalink);
    if (!caseStudiesResponse) {
      navigate(`/beije-talent-academy`);
    } else if (caseStudiesResponse.language !== lang) {
      navigate(`/${lang}/beije-talent-academy/${caseStudiesResponse.translateCasePermalink}`, { replace: true });
    }

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
        !state.caseStudiesResponse &&
        <div
          className="d-flex flex-column items-center paddingX-container-general-pages"
        >
          <div
            className="d-flex flex-column max-width-1200 width-100 marginY-30"
          >
            <Skeleton variant="text" animation="wave" width={"20%"} className="marginY-30" />
            <Skeleton variant="rectangular" width={"100%"} height={300} animation="wave" className="marginY-30" />
            <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
            <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
            <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
            <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
            <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
            <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
            <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
            <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
          </div>
        </div>
      }

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
            <GoBackBtn callback={() => navigate(`/${lang}/beije-up`)} />
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
            <h2 className="h3">
              {state.caseStudiesResponse.subtitle}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(state.caseStudiesResponse.description) }} />
          </Box>
        </Container>
      }

    </Box>
  )
}

const mapStateToProps = state => (
  {
    languageDuck: state.languageDuck,
  }
)

export default connect(mapStateToProps)(CaseStudiesDetail)