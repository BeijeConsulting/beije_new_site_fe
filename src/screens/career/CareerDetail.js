import React, { useEffect, useRef, useState } from "react";
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
import { Box, Container, Skeleton } from "@mui/material";

// Style
import "./Career.css";

// Components
import CustomForm from "../../components/hooks_components/customForm/CustomForm";
import GoBackBtn from "../../components/functional_components/goBackBtn/GoBackBtn";
import CustomLink from "../../components/functional_components/ui/customLink/CustomLink";

const CareerDeatil = (props) => {
  const { t } = useTranslation();
  const formRef = useRef();

  const [state, setState] = useState({
    careerResponse: null
  })

  const idJob = new URLSearchParams(location.search).get("jobOffer");
  const idAcademy = new URLSearchParams(location.search).get("academyOffer");

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
    let id = idJob ? idJob : idAcademy;
    let careerResponse;

    if (id) {
      careerResponse = await ApiCalls.career_getListDetail(id, props.languageDuck.currentLanguage);
    }
    setState({
      ...state,
      careerResponse: careerResponse
    })

  }

  const scrollToForm = () => {
    let formTop = formRef.current.offsetTop;

    window.scrollTo({
      top: formTop,
      left: 0,
      behavior: 'smooth'
    });
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
          !state.careerResponse &&
          <div
            className="d-flex flex-column items-center"
          >
            <div
              className="d-flex flex-column max-width-1200 width-100 marginY-30"
            >
              <Skeleton variant="text" animation="wave" width={"50%"} height={100} className="marginY-30" />
              <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
              <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
              <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
              <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
              <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
              <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
              <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
              <Skeleton variant="text" animation="wave" width={"100%"} className="marginY-30" />
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
          state.careerResponse &&
          <>
            <h1>{state.careerResponse.title}</h1>


            <Box
              className="career-detail-txt-container"
              style={{ borderTopColor: idJob ? '#9EC1DB' : '#feef87' }}
            >
              <div
                className="career-detail-link-apply-container"
              >
                <CustomLink
                  content={t("btn.apply")}
                  linkTo={"#"}
                  callback={scrollToForm}
                  typeLink={idJob ? "apply-primary" : "apply-secondary"}
                />
              </div>
              <div>
                <ReactMarkdown>
                  {state.careerResponse.description}
                </ReactMarkdown>
              </div>
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
          ref={formRef}
        >
          <CustomForm
            titlePage={state.careerResponse ? `Candidatura per ${state.careerResponse.title}` : "Offerta di lavoro"}
            cvForm
            formTitle={t("form.title.apply")}
          />
        </Box>
      </Container>
    </Box >
  )
}

const mapStateToProps = state => (
  {
    languageDuck: state.languageDuck,
  }
)

export default connect(mapStateToProps)(CareerDeatil)