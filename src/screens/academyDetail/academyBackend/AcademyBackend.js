import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

// Redux
import { setCurrentPage, initCurrentPage } from "../../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// MUI
import { Box, Container } from "@mui/material";

// styles
import '../DetailAcademy.css';

// Constants
import { academyCourseStructure, programBackendAcademy, infoGraphicBackend } from "../../../utils/properties";

// Components
import IntroSectionTxtInfoGraphic from "../../../components/functional_components/introSections/introSectionTxtInfoGraphic/IntroSectionTxtInfoGraphic";
import CustomAccordion from "../../../components/functional_components/customAccordion/CustomAccordion";
import CustomForm from "../../../components/hooks_components/customForm/CustomForm";

const AcademyBackend = (props) => {

  const secondContainerRef = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    props.dispatch(setCurrentPage("academy"));
    props.dispatch(setVisibilityNavbar(true));
    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [])

  const scrollToSection = () => {
    let elementTop = secondContainerRef.current.offsetTop;
    window.scrollTo({
      top: elementTop,
      left: 0,
      behavior: 'smooth'
    });
  }


  return (

    <Box
      className={"bg-dark-grey margin-top-container-screens"}
    >

      {/* First section Img + text*/}
      < Container
        component={"section"}
        maxWidth={"false"}
        className={"paddingX-container-general-pages"}
      >

        <IntroSectionTxtInfoGraphic
          typeSection="academy"
          sectionName="Beije talent academy"
          sectionTitle={t("academyBackend.title")}
          callback={scrollToSection}
          paragraph1Title={t("academyBackend.titleParagraph1")}
          paragraph2Title={t("academyBackend.titleParagraph2")}
          paragraph1Txt={t("academyBackend.paragraph1Txt")}
          obj={academyCourseStructure}
          srcImage={infoGraphicBackend}
        >

        </IntroSectionTxtInfoGraphic>
      </Container>
      <div
        className="bg-dark-grey position-relative"
        ref={secondContainerRef}
      >

        {/* Second section accordion */}
        < Container
          component={"section"}
          maxWidth={"false"}
          className={"detail-academy-second-section paddingX-container-general-pages"}
        >
          <h2>Programma</h2>
          <CustomAccordion
            obj={programBackendAcademy}
          />
        </Container>

        {/* Third section form */}
        < Container
          component={"section"}
          maxWidth={"false"}
          className={"detail-academy-third-section paddingX-container-general-pages top-oblique-line bg-yellow"}
        >
          <CustomForm
            cvForm
            formTitle={"Invia la tua candidatura"}
          />
        </Container>
      </div>
    </Box >

  )
}

export default connect()(AcademyBackend)