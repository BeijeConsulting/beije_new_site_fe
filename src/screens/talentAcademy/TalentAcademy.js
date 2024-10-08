import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// MUI
import { Box, Container, Skeleton, Tab } from "@mui/material";

// styles
import './TalentAcademy.scss'

// Constants
import { employeesComments, infoGraphicAcademy, logo_fondazione_lavoro, linkYoutube, socialYt } from "../../utils/properties";

// Components
import IntroSectionImgTxt from "../../components/functional_components/introSections/introSectionImgTxt/IntroSectionImgTxt";
import CustomForm from "../../components/hooks_components/customForm/CustomForm";
import CustomLink from "../../components/functional_components/ui/customLink/CustomLink";
import CustomBanner from "../../components/functional_components/customBanner/CustomBanner";
import CustomScrollTab from "../../components/hooks_components/customScrollTab/CustomScrollTab";
import CustomIconButton from "../../components/functional_components/ui/customIconButton/CustomIconButton";
import CustomCarousel from "../../components/hooks_components/customCarousel/CustomCarousel";
import { isEmpty } from "lodash";
import { useState } from "react";
import ApiCalls from "../../services/api/ApiCalls";

const TalentAcademy = (props) => {
  const { t } = useTranslation();
  const secondContainerRef = useRef();
  const formContainer = useRef();
  const [state, setState] = useState({
    caseStudiesResponse: [],
    academiesData: []
  })

  useEffect(() => {

    getData()

    if (window.location.hash === '#TalentAcademy') {
      window.scrollTo({ top: secondContainerRef.current.offsetTop, left: 0, behavior: "smooth" })
    }
    else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    props.dispatch(setCurrentPage("academy"));
    props.dispatch(setVisibilityNavbar(true));
    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [props.languageDuck.currentLanguage])


  const scrollToSection = () => {
    let elementTop = secondContainerRef.current.offsetTop;
    window.scrollTo({
      top: elementTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  const scrollToForm = () => {
    let formTop = formContainer.current.offsetTop;

    window.scrollTo({
      top: formTop + 600,
      left: 0,
      behavior: 'smooth'
    });
  }
  const getData = async () => {
    let caseStudiesResponse = await ApiCalls.caseStudies_getList(props.languageDuck.currentLanguage, 'academy');
    let academiesResponse = await ApiCalls.academies_getList({ 'Accept-Language': props.languageDuck.currentLanguage })
    setState({
      caseStudiesResponse: caseStudiesResponse,
      academiesData: academiesResponse,
    })
  }

  return (
    <>
      <Helmet>
        <title>{t('helmet.meta_title.academy')}</title>
        <meta name="description" content={t('helmet.meta_description.academy')} />
        <meta name="keywords" content={t('helmet.keywords.academy')} />
        <meta name="google" content="notranslate" />
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
            typeSection="academy"
            classNameBgImgDesktop="intro-section-img-academy"
            classNameBgImgMobile="intro-section-img-academy"
            bgIconDownload="download-btn-icon-academy"
            sectionName="People First talent academy"
            sectionTitle={t("academy.firstSection.title")}
            callback={scrollToSection}
            download={"academy"}
          >
            <h3>{t("academy.firstSection.subtitle")}</h3>
            <div className="academy-intro-section-description">
              <p>
                {t("academy.firstSection.description")}
              </p>
            </div>

            <div className="academy-intro-section-apply-container">
              <CustomLink
                content={t("btn.apply")}
                linkTo={"#"}
                callback={scrollToForm}
                typeLink={"apply"}
              />
            </div>

          </IntroSectionImgTxt>
        </Container>
        <div
          className="bg-dark-grey position-relative"
          ref={secondContainerRef}
        >
          {/* Second section */}
          {/* <Container
            component={"section"}
            maxWidth={"false"}
            className={"padding-0"}
          >
            <CustomBanner
              ariaLabel={"Icon button link to youtube People First channel"}
              title={t("academy.secondSection.title")}
              text={t("academy.secondSection.description1")}
              enphasisTxt={t("academy.secondSection.description2")}
            >
              <CustomIconButton
                href={linkYoutube}
                target={"_blank"}
                type={"youtube-videos-primary"}
                iconFontAwsome={socialYt}
                classNameIcon={"youtube-videos-icon-primary"}
              />
            </CustomBanner>
          </Container> */}

          {/* Third section */}
          <Container
            component={"section"}
            maxWidth={"false"}
            className={"academy-third-section-container paddingX-container-general-pages"}
          >
            <Box>
              <h2>{t("academy.thirdSection.title1")}</h2>
              <div
                className="academy-third-section-links-container"
              >
                {state.academiesData && state.academiesData.length > 0 ? state.academiesData.map((item) => {
                  return (
                    <div key={item.id}>
                      <CustomLink
                        linkTo={`/people-first-talent-academy/academy?id=${item.id}`}
                        content={t(item.academy_name)}
                        typeLink={"detail-academy"}
                      />
                    </div>
                  )
                }) : null}
              </div>
            </Box>

            <Box
              className="academy-third-section-img-container"
            >
              <img
                alt="iconography developer"
                src={infoGraphicAcademy}
              />
            </Box>

          </Container>

          {/* Fourth section */}

          <Container
            component={"section"}
            maxWidth={"false"}
            className={"academy-fourth-section-container paddingX-container-general-pages top-oblique-line bg-yellow"}
          >

            <Box>
              <h2>{t("academy.fourthSection.title")}</h2>
            </Box>
            <Box
              className={"academy-fourth-section-tab-comments"}
            >
              <CustomScrollTab
                obj={employeesComments}
              >
                <Tab
                  className={"scroll-tab-lables scroll-tab-lables-bg-diMonaco"}
                />
                <Tab
                  className={"scroll-tab-lables scroll-tab-lables-bg-pignorio"}
                />
                <Tab
                  className={"scroll-tab-lables scroll-tab-lables-bg-ezpeleta"}
                />
                <Tab
                  className={"scroll-tab-lables scroll-tab-lables-bg-savallo"}
                />
                <Tab
                  className={"scroll-tab-lables scroll-tab-lables-bg-zacheo"}
                />
                <Tab
                  className={"scroll-tab-lables scroll-tab-lables-bg-fraioli"}
                />
                <Tab
                  className={"scroll-tab-lables scroll-tab-lables-bg-busseni"}
                />
                <Tab
                  className={"scroll-tab-lables scroll-tab-lables-bg-farina"}
                />
              </CustomScrollTab>
            </Box>
          </Container>

          {/* SECTION CAROUSEL */}
          {/* <Container
            component={"section"}
            maxWidth={"false"}
            className={"up-fourth-section paddingX-container-general-pages position-relative"}
            style={{ backgroundImage: "none" }}
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
                  <CustomCarousel
                    academyCarousel
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
          </Container> */}

          {/* sixth section form*/}
          <Container
            component={"section"}
            maxWidth={"false"}
            className={"up-sixth-section-container paddingX-container-general-pages"}
          >
            <Box
              className={"up-sixth-section-box-form academy-form-gsap"}
              ref={formContainer}
            >
              <CustomForm
                titlePage="Candidatura per Academy"
                cvForm
                radioTypeAcademy
                PopUpExists={true}
                formTitle={t("form.title.apply")}
              />
            </Box>
          </Container>

          {/* seventh section partner*/}
          <Container
            component={"section"}
            maxWidth={"false"}
            className={"academy-seventh-section-container paddingX-container-general-pages"}
          >
            <p
              className="h3"
            >
              Partner
            </p>

            <img
              alt="logo partner Fondazione Lavoro"
              src={logo_fondazione_lavoro}
            />
          </Container>

        </div>
      </Box>
    </>
  )
}


const mapStateToProps = state => (
  {
    languageDuck: state.languageDuck,
  }
)

export default connect(mapStateToProps)(TalentAcademy)