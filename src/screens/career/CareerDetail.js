import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// MUI
import { Box, Container } from "@mui/material";

// Style
import "./Career.css";

// Components
import CustomForm from "../../components/hooks_components/customForm/CustomForm";
import GoBackBtn from "../../components/functional_components/goBackBtn/GoBackBtn";

// Remove
import careerTrialObj from "./careerTrialObj.json";

const CareerDeatil = (props) => {
  const { t } = useTranslation();

  const [state, setState] = useState({
    careerResponse: null
  })

  const permalink = new URLSearchParams(location.search).get("jobOffer");

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

  // Add async and await. Here add call to API
  const getCareerData = () => {
    let careerResponse = careerTrialObj;

    careerResponse.map(findJobOffer)

  }

  const findJobOffer = (item) => {
    if (item.permalink === permalink) {
      return (
        setState({
          careerResponse: item
        })
      )
    }
  }

  return (
    <Box
      className={"bg-dark-grey margin-top-container-screens"}
    >

      <Container
        component={"section"}
        maxWidth={"false"}
        className={"career-detail-container paddingX-container-general-pages"}
      >
        <GoBackBtn />
        {/* <p
          className="career-detail-tag"
        >
          Job Opportunities
        </p> */}
        {
          state.careerResponse &&
          <>
            <h1>{state.careerResponse.title}</h1>


            <Box
              className="career-detail-txt-container"
            >
              <p>
                {state.careerResponse.description}
              </p>

            </Box>
          </>
        }
      </Container>

      <Container
        component={"section"}
        maxWidth={"false"}
        className={"up-sixth-section-container paddingX-container-general-pages"}
      >
        <Box
          className={"academy-sixth-section-box-form"}
        >
          <CustomForm
            cvForm
            formTitle={t("form.title.apply")}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default connect()(CareerDeatil)