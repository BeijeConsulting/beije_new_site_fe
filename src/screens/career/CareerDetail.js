import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// 
import ApiCalls from "../../services/api/ApiCalls";

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

  const id = new URLSearchParams(location.search).get("jobOffer");

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
  const getCareerData = async () => {

    // let careerResponse = await ApiCalls.career_getListDetail(id, props.languageDuck.currentLanguage);
    // console.log("careerResponse: ", careerResponse);

    let careerResponse = careerTrialObj;

    let item;
    careerResponse.map((el) => {
      if (el.permalink == id) {
        item = el
      }
    })
    console.log("item: ", item);

    setState({
      ...state,
      // careerResponse: careerResponse
      careerResponse: item
    })

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
        {
          state.careerResponse &&
          <>
            <h1>{props.languageDuck.currentLanguage === "it" ? state.careerResponse.title_it : state.careerResponse.title_en}</h1>


            <Box
              className="career-detail-txt-container"
            >

              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
              >
                {props.languageDuck.currentLanguage === "it" ? state.careerResponse.description_it : state.careerResponse.description_en}

              </ReactMarkdown>

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
            titlePage={state.careerResponse ? state.careerResponse.title_it : ""}
            cvForm
            formTitle={t("form.title.apply")}
          />
        </Box>
      </Container>
    </Box>
  )
}

const mapStateToProps = state => (
  {
    languageDuck: state.languageDuck,
  }
)

export default connect(mapStateToProps)(CareerDeatil)