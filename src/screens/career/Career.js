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

// Components
import CustomTable from "../../components/functional_components/customTable/CustomTable";
import CustomButton from "../../components/functional_components/ui/customButton/CustomButton";


// Remove
import careerTrialObj from "./careerTrialObj.json"

const Career = (props) => {

  const { t } = useTranslation();

  const [state, setState] = useState({
    buttonSelected: "academy",
    careerDataResponse: null
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

  const getCareerData = () => {
    // let careerDataResponse = await ApiCalls.career_getList(props.languageDuck.currentLanguage);
    // console.log("careerDataResponse", careerDataResponse);
    let careerDataResponse = careerTrialObj;
    console.log("careerDataResponse in career general: ", careerDataResponse);

    setState({
      ...state,
      careerDataResponse: careerDataResponse
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
        className={"career-first-section paddingX-container-general-pages"}
      >
        <h1>Career</h1>
        <p
          className="career-first-section-description"
        >
          Lorem ipsum dolor sit amet. Aut impedit totam ut consequuntur earum qui quis neque quo sint labore et sapiente dignissimos. In unde perferendis a internos sit expedita deserunt et quibusdam obcaecati est voluptatem sapiente.</p>
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
      </Container>
      <Divider
        className={"divider"}
      />
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"career-second-section paddingX-container-general-pages"}
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
      </Container>
    </Box>
  )
}

const mapStateToProps = state => (
  {
    languageDuck: state.languageDuck,
  }
)

export default connect(mapStateToProps)(Career)