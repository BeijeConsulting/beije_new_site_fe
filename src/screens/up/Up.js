import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { isEmpty } from "lodash";

// Redux
import { connect } from "react-redux";
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";

// Api
import ApiCalls from "../../services/api/ApiCalls";

// MUI
import { Box, Container, Skeleton, Tab } from "@mui/material";

// Style
import "./Up.css";

// Constants
import { clientComments } from "../../utils/properties";

// Components
import IntroSectionImgTxt from "../../components/functional_components/introSections/introSectionImgTxt/IntroSectionImgTxt";
import CustomCarousel from "../../components/hooks_components/customCarousel/CustomCarousel";
import CustomForm from "../../components/hooks_components/customForm/CustomForm";
import SimpleCarousel from "../../components/functional_components/simpleCarousel/SimpleCarousel"

const Up = (props) => {

  const { t } = useTranslation();
  const secondContainerRef = useRef();
  const [state, setState] = useState({
    caseStudiesResponse: null
  })

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    props.dispatch(setCurrentPage("up"));
    props.dispatch(setVisibilityNavbar(true));

    getCaseStudiesData();

    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [])

  const getCaseStudiesData = async () => {
    let caseStudiesResponse = await ApiCalls.caseStudies_getList(props.languageDuck.currentLanguage);

    // let caseStudiesResponse = caseStudiesTrialObj;
    setState({
      ...state,
      caseStudiesResponse: caseStudiesResponse
    })

  }

  const scrollToSection = () => {
    let elementTop = secondContainerRef.current.offsetTop;
    window.scrollTo({
      top: elementTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (

    <>
      <Helmet>
        <title>{t('helmet.meta_title.up')}</title>
        <meta name="description" content={t('helmet.meta_description.up')} />
        <meta name="keywords" content={t('helmet.keywords.up')} />
      </Helmet>


      <Box
        className={"bg-dark-grey margin-top-container-screens"}
      >

        {/* First section Img + text*/}
        < Container
          component={"section"}
          maxWidth={"false"}
          className={"padding-0"}
        >
          <IntroSectionImgTxt
            typeSection="up"
            classNameBgImgDesktop="intro-section-img-up"
            classNameBgImgMobile="intro-section-img-up"
            bgIconDownload="download-btn-icon-up"
            sectionName="Beije Up"
            sectionTitle={t("up.title")}
            photoTitle="UP"
            callback={scrollToSection}
            download={"up"}
          >
            <div>
              <p>{t("up.intro.part1")}<br />
                {t("up.intro.part2")}
                <strong>{t("up.intro.part3")}</strong>
                {t("up.intro.part4")}
                <strong>{t("up.intro.part5")}</strong>
                {t("up.intro.part6")}
                <strong>{t("up.intro.part7")}</strong>
                {t("up.intro.part8")}
                <strong>{t("up.intro.part9")}</strong>
                {t("up.intro.part10")}
              </p>
              <div
                className={"first-section-list-container"}
              >
                <p>{t("up.intro2List.planning")}</p>
                <p>{t("up.intro2List.implementation")}</p>
                <p>{t("up.intro2List.delivery")}</p>
                <p>{t("up.intro2List.integrationSoftware")}</p>
                <p>{t("up.intro2List.applicationMaintenace")}</p>
              </div>
            </div>
          </IntroSectionImgTxt>
        </Container>

        <div
          className="bg-dark-grey position-relative"
          ref={secondContainerRef}
        >
          {/* Second section description up*/}
          <Container
            component={"section"}
            maxWidth={"false"}
            className={"up-second-section padding-0"}
          >

            <Box className="up-second-section-all-texts-external-container">
              <Box
                className="up-second-section-all-texts-container"
              >
                <Box
                  className="up-second-section-text-container up-second-section-text1-container"
                >
                  <p>
                    {t("up.desc1.part1")}
                    <strong>{t("up.desc1.part2")}</strong>
                    {t("up.desc1.part3")}
                    <strong>{t("up.desc1.part4")}</strong>
                    {t("up.desc1.part5")}
                    <strong>{t("up.desc1.part6")}</strong>
                    {t("up.desc1.part7")}
                    <strong>{t("up.desc1.part8")}</strong>
                    {t("up.desc1.part9")}
                    <strong>{t("up.desc1.part10")}</strong>
                    {t("up.desc1.part11")}
                    <strong>{t("up.desc1.part12")}</strong>
                    {t("up.desc1.part13")}
                    <strong>{t("up.desc1.part14")}</strong>
                    {t("up.desc1.part15")}
                    <span
                      className="up-second-section-text-span-desktop"
                    >
                      <strong>{t("up.desc1.part16")}</strong>{t("up.desc1.part17")}
                    </span>
                  </p>
                  <br />
                </Box>

                <Box
                  className="up-second-section-text-mobile-container"
                >
                  {t("up.desc1.part16")}
                </Box>

                <Box
                  className="up-second-section-text-container up-second-section-text2-container"
                >
                  <p>
                    {t("up.desc2.part1")}
                    <strong>{t("up.desc2.part2")}</strong>
                    {t("up.desc2.part3")}
                    <strong>{t("up.desc2.part4")}</strong>
                    {t("up.desc2.part5")}
                    <strong>{t("up.desc2.part6")}</strong>
                    {t("up.desc2.part7")}
                    <strong>{t("up.desc2.part8")}</strong>
                    {t("up.desc2.part9")}
                    <strong>{t("up.desc2.part10")}</strong>
                    {t("up.desc2.part11")}
                    <strong>{t("up.desc2.part12")}</strong>
                    {t("up.desc2.part13")}
                    <strong>{t("up.desc2.part14")}</strong>
                    {t("up.desc2.part15")}
                    <strong>{t("up.desc2.part16")}</strong>
                    {t("up.desc2.part17")}
                    <strong>{t("up.desc2.part18")}</strong>
                    {t("up.desc2.part19")}
                    <strong>{t("up.desc2.part20")}</strong>
                  </p>
                </Box>
              </Box>
            </Box>
            {/* Box with image visible only from desktop */}
            <Box
              className="up-second-section-box-img"
            >

            </Box>
          </Container>

          {/* Third section comments*/}
          <Container
            component={"section"}
            maxWidth={"false"}
            className={"up-third-section paddingX-container-general-pages bg-blue top-oblique-line"}
          >
            <Box>
              <h2>{t("up.commentsSection.title")}</h2>
            </Box>

            <Box>
              <SimpleCarousel
                obj={clientComments}
              />
            </Box>
            {/* <Box
              className={"academy-fourth-section-tab-comments"}
            >
              <CustomScrollTab
                obj={clientComments}
              >
                <Tab
                  className={"scroll-tab-lables scroll-tab-lables-bg-FPancaro"}
                />
                <Tab
                  className={"scroll-tab-lables scroll-tab-lables-bg-MMilione"}
                />
              </CustomScrollTab>
            </Box> */}
          </Container>

          {/* Fourth section case studies*/}
          <Container
            component={"section"}
            maxWidth={"false"}
            className={"up-fourth-section paddingX-container-general-pages position-relative"}
          >
            <Box>
              <h2>Case studies</h2>
            </Box>

            <Container
              component={"section"}
              maxWidth={"false"}
              className={"up-fifth-section-container d-flex justify-center"}
            >
              <Box className="width-100 max-width-1800">
                {
                  !state.caseStudiesResponse &&
                  <Skeleton />
                }
                {
                  state.caseStudiesResponse && !isEmpty(state.caseStudiesResponse) &&
                  < CustomCarousel
                    upCarousel
                    // obj={caseStudiesTrialObj}
                    obj={state.caseStudiesResponse}
                    classNameSwiperContainer={"swiper-container-up"}
                    imgCarousel
                  />
                }
                {
                  isEmpty(state.caseStudiesResponse) &&
                  <div></div>
                }
              </Box>
            </Container>
          </Container>

          {/* sixth section form*/}
          <Container
            component={"section"}
            maxWidth={"false"}
            className={"up-sixth-section-container paddingX-container-general-pages"}
          >
            <Box
              className={"up-sixth-section-box-form"}
            >
              <CustomForm
                titlePage="Richiesta informazioni - sito Beije Up"
                formTitle={t("form.title.info")}
              />
            </Box>
          </Container>

        </div>
      </Box >
    </>
  )
}


const mapStateToProps = state => (
  {
    languageDuck: state.languageDuck,
  }
)


export default connect(mapStateToProps)(Up)