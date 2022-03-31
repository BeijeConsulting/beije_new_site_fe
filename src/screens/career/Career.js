import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// Api
import ApiCalls from "../../services/api/ApiCalls";

// MUI
import { Box, Container, Divider, Skeleton } from "@mui/material";

// Style
import "./Career.css";

// Constants 
import { career_empty_academy, career_empty_job } from "../../utils/properties";

// Components
import CustomTable from "../../components/functional_components/customTable/CustomTable";
import CustomButton from "../../components/functional_components/ui/customButton/CustomButton";


// Remove
import careerTrialObj from "./careerTrialObj.json"

const Career = (props) => {

  const { t } = useTranslation();

  const [state, setState] = useState({
    buttonSelected: "academy",
    careerDataResponse: null,
    academyElements: false,
    jobElements: false
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    props.dispatch(setCurrentPage("career"));
    props.dispatch(setVisibilityNavbar(true));

    getCareerData();

    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [])

  const getCareerData = async () => {
    // let careerDataResponse = await ApiCalls.career_getList();
    let careerDataResponse = careerTrialObj;
    console.log("careerDataResponse in career general: ", careerDataResponse);

    // careerDataResponse.map(findIf(academyElements, jobElements))
    let academyElements = careerDataResponse.find((item) => {
      return item.academy === true
    })

    let jobElements = careerDataResponse.find((item) => {
      return item.academy === false
    })

    setState({
      ...state,
      careerDataResponse: careerDataResponse,
      academyElements: academyElements,
      jobElements: jobElements
    })
  }

  const showJobOpportunities = () => {
    setState({
      ...state,
      buttonSelected: "job"
    })
  }

  const showAcademy = () => {
    setState({
      ...state,
      buttonSelected: "academy"
    })
  }

  return (
    <Box
      className={"bg-dark-grey margin-top-container-screens"}
    >

      <Container
        component={"section"}
        maxWidth={"false"}
        className={"career-first-section paddingX-container-general-pages d-flex justify-center"}
      >
        <Box
          className="max-width-1200 width-100"
        >
          <h1>Career</h1>
          <p
            className="career-first-section-description"
          >
            {t("career.description")}
          </p>
          <Box
            className="career-first-section-button-container"
          >
            <CustomButton
              type={"filter-btn"}
              content={"Academy"}
              classNameFilterBtn={state.buttonSelected === "academy" ? "career-selected-academy" : ""}
              callback={showAcademy}
            />
            <CustomButton
              type={"filter-btn"}
              content={"Job Opportunities"}
              classNameFilterBtn={state.buttonSelected === "job" ? "career-selected-job" : ""}
              callback={showJobOpportunities}
            />
          </Box>
        </Box>

      </Container>
      <Divider
        className={"divider"}
      />
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"career-second-section paddingX-container-general-pages d-flex justify-center"}
      >
        <Box
          className="max-width-1200 width-100"
        >
          <h3>{t("career.title")}</h3>
          {
            !state.careerDataResponse &&
            <Skeleton />
          }
          {
            state.careerDataResponse &&
            <CustomTable
              isAcademy={state.buttonSelected === "academy"}
              // obj={state.buttonSelected === "academy" ? academyObj : jobObj}
              // obj={careerTrialObj}
              obj={state.careerDataResponse}
              classNameLink={state.buttonSelected === "academy" ? "career-table-academy-link" : "career-table-job-link"}
            />
          }
          {
            state.careerDataResponse && !state.academyElements && state.buttonSelected === "academy" &&
            <div
              className="career-empty-message-container"
            >
              <img
                alt="icon for empty academy positions"
                src={career_empty_academy}
              />
              <p>{t("career.messageAcademy")}</p>
            </div>

          }
          {
            state.careerDataResponse && !state.jobElements && state.buttonSelected === "job" &&
            <div
              className="career-empty-message-container"
            >
              <img
                alt="icon for empty academy positions"
                src={career_empty_job}
              />
              <p>{t("career.messageJob")}</p>
            </div>
          }
        </Box>

      </Container>
    </Box >
  )
}

export default connect()(Career)