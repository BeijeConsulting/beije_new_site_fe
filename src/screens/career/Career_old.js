import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

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

const Career = (props) => {

  const { t } = useTranslation();

  const [state, setState] = useState({
    buttonSelected: "job",
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
    let careerDataResponse = await ApiCalls.career_getList();

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
    <>
      <Helmet>
        <title>{t('helmet.meta_title.career')}</title>
        <meta name="description" content={t('helmet.meta_description.career')} />
        <meta name="keywords" content={t('helmet.keywords.career')} />
        <meta name="google" content="notranslate" />
      </Helmet>

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
            <h1>{t("career.titlePage")}</h1>
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
                content={t("btn.jobTabCareer")}
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
              <div
                className="d-flex flex-column width-100"
              >
                <div
                  className="d-flex flex-row width-100 marginY-30"
                >
                  <Skeleton variant="text" animation="wave" width={"25%"} />
                  <Skeleton variant="text" animation="wave" width={"25%"} className="marginX-20" />
                  <Skeleton variant="text" animation="wave" width={"25%"} className="marginX-20" />
                  <Skeleton variant="text" animation="wave" width={"25%"} />
                </div>
                <div
                  className="d-flex flex-row width-100 marginY-30"
                >
                  <Skeleton variant="text" animation="wave" width={"25%"} />
                  <Skeleton variant="text" animation="wave" width={"25%"} className="marginX-20" />
                  <Skeleton variant="text" animation="wave" width={"25%"} className="marginX-20" />
                  <Skeleton variant="text" animation="wave" width={"25%"} />
                </div>
                <div
                  className="d-flex flex-row width-100 marginY-30"
                >
                  <Skeleton variant="text" animation="wave" width={"25%"} />
                  <Skeleton variant="text" animation="wave" width={"25%"} className="marginX-20" />
                  <Skeleton variant="text" animation="wave" width={"25%"} className="marginX-20" />
                  <Skeleton variant="text" animation="wave" width={"25%"} />
                </div>
              </div>
            }
            {
              state.careerDataResponse &&
              <CustomTable
                isAcademy={state.buttonSelected === "academy"}
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
    </>
  )
}

export default connect()(Career)