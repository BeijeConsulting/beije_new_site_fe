import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import ApiCalls from "../../../services/api/ApiCalls";
import { useLocation } from "react-router-dom";
import { get as __get } from 'lodash';



// Redux
import { setCurrentPage, initCurrentPage } from "../../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../../redux/ducks/showNavbarTopDuck";
import { connect, useSelector } from "react-redux";

// MUI
import { Box, Container } from "@mui/material";

// styles
import '../DetailAcademy.scss';

// Constants
import { infoGraphicFrontend } from "../../../utils/properties";

// Components
import IntroSectionTxtInfoGraphic from "../../../components/functional_components/introSections/introSectionTxtInfoGraphic/IntroSectionTxtInfoGraphic";
import CustomAccordion from "../../../components/functional_components/customAccordion/CustomAccordion";
import CustomForm from "../../../components/hooks_components/customForm/CustomForm";

const AcademyPage = (props) => {
  const currentLanguage = useSelector((state) => __get(state.languageDuck, 'currentLanguage', {}));
  const secondContainerRef = useRef();
  const { t } = useTranslation();
  const formContainer = useRef();
  const location = useLocation();

  const [state, setState] = useState({
    academyData: []
  })

  useEffect(() => {

    getData()

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    props.dispatch(setCurrentPage("academy"));
    props.dispatch(setVisibilityNavbar(true));
    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [window.location.pathname])

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
      top: formTop + 800,
      left: 0,
      behavior: 'smooth'
    });
  }

  const useQuery = () => {
    return new URLSearchParams(location.search);
  }

  const getData = async () => {
    const query = useQuery();
    const pageId = query.get('id');

    const response = await ApiCalls.academies_getListDetail(pageId, { 'Accept-Language': currentLanguage });
    // const item = response.find(obj => obj.id === parseInt(pageId));

    setState({
      academyData: response
    })
  }

  const academyCourseStructure = [
    //duration title and label
    {
      colMobile: 12,
      colDesktop: 6,
      name: "academyFrontend.table.row1Title",
      type: "title"
    },
    {
      colMobile: 12,
      colDesktop: 6,
      name: state.academyData.duration,
      type: ""
    },
    //work mode title and label
    {
      colMobile: 12,
      colDesktop: 6,
      name: "academyFrontend.table.row3Title",
      type: "title"
    },
    {
      colMobile: 12,
      colDesktop: 6,
      name: state.academyData.work_mode,
      type: ""
    }
  ]

  const academyTopics = state.academyData.topics?.map((item) => {
    const topicSubsectionContent = item.subtopics.map((topic) => {
      const title = topic.translations.find(translations => translations.language === currentLanguage.toLowerCase());
      return { p: title.value };
    })
    const topic = item.translations.find(translation => translation.language === currentLanguage.toLowerCase());
    return {
      sectionTitle: topic.name,
      description: topicSubsectionContent
    }
  })
  return (
    <>
      <Helmet>
        <title>{t('helmet.meta_title.academy_frontend')}</title>
        <meta name="description" content={t('helmet.meta_description.academy_frontend')} />
        <meta name="keywords" content={t('helmet.keywords.academy_frontend')} />
        <meta name="google" content="notranslate" />
      </Helmet>

      <Box
        className={"bg-dark-grey margin-top-container-screens"}
      >

        {/* First section Img + text*/}
        < Container
          component={"section"}
          maxWidth={"false"}
          className={"paddingX-container-general-pages "}
        >

          <IntroSectionTxtInfoGraphic
            typeSection="academy"
            sectionName="People First talent academy"
            sectionTitle={t(state.academyData.title)}
            callback={scrollToSection}
            paragraph1Title={t(state.academyData.subtitle)}
            paragraph2Title={t("academyFrontend.titleParagraph2")}
            paragraph1Txt={t(state.academyData.description)}
            obj={academyCourseStructure}
            srcImage={infoGraphicFrontend}
            applyCallback={scrollToForm}
          >
          </IntroSectionTxtInfoGraphic>
        </Container>
        <div
          className="bg-dark-grey position-relative"
          ref={secondContainerRef}
        >

          {/* Second section accordion */}
          <Container
            component={"section"}
            maxWidth={"false"}
            className={"detail-academy-second-section paddingX-container-general-pages"}
          >
            <h2>{t("academyFrontend.program.title")}</h2>
            <CustomAccordion
              obj={academyTopics}
            />
          </Container>

          {/* Third section form */}
          < Container
            ref={formContainer}
            component={"section"}
            maxWidth={"false"}
            className={"detail-academy-third-section paddingX-container-general-pages top-oblique-line bg-yellow"}
          >
            <CustomForm
              titlePage="Candidatura per Academy Frontend"
              cvForm
              PopUpExists={true}
              formTitle={t("form.title.apply")}
            />
          </Container>
        </div>
      </Box >
    </>
  )
}

export default connect()(AcademyPage)