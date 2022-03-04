import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

// Style
import './Consulting.css'

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// MUI
import { Box, Container } from "@mui/material";

// Constants
import { logo_secondary_transparent } from "../../utils/properties";

// Components
import IntroSectionImgTxt from "../../components/functional_components/introSectionImgTxt/IntroSectionImgTxt";
import CustomForm from "../../components/hooks_components/customForm/CustomForm";
import PercentageContainer from "../../components/functional_components/percentageContainer/PercentageContainer";



const Consulting = (props) => {

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    props.dispatch(setCurrentPage("consulting"));
    props.dispatch(setVisibilityNavbar(true));
    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [])

  return (
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
          typeSection="consulting"
          classNameBgImgDesktop="intro-section-img-consulting"
          classNameBgImgMobile="intro-section-img-consulting"
          bgIconDownload="intro-section-download-icon-consulting"
          sectionName="Beije COnsulting"
          sectionTitle="Titolo lorem ipsum"
        >
          <div className="consulting-first-section-description-container">
            <p>I nostri consulenti Beije forniscono 𝗰𝗼𝗻𝘀𝘂𝗹𝗲𝗻𝘇𝗮 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗰𝗮 professionale per lo sviluppo di software in grado di offrire le migliori soluzioni che si adattino alle esigenze del cliente. Ci impegniamo ad ottenere i risultati migliori attraverso aggiornamenti mirati e formazione costante per la realizzazione di PROGETTI INNOVATIVI.
            </p>
          </div>
        </IntroSectionImgTxt>
      </Container>

      {/* Second section */}
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"paddingX-container-general-pages"}
      >
        <Box className="consulting-second-section-all-texts-container">
          <Box
            className="consulting-second-section-text-container"
          >
            <p>IN OTTICA PEOPLE FIRST AIUTIAMO LE AZIENDE A COSTRUIRE TEAM DI VALORE ATTRAVERSO FIGUARE ALTAMENTE SPECIALIZZATE</p>
          </Box>

          <Box
            className="consulting-second-section-text-list-container up-second-section-text2-container"
          >
            <p>ARCHITECT</p>
            <p>PROJECT MANAGER</p>
            <p>ANALYST</p>
            <p>DEVELOPER</p>
          </Box>
        </Box>
      </Container>

      {/* Third section */}
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"consulting-third-section paddingX-container-general-pages bg-lightblue top-oblique-line"}
      >
        <PercentageContainer
          percentageContainer1Title={"Soddisfazione consulenti"}
          percentageContainer1Subtitle={"Dati survey 2021"}
          percentage1={96.5}
          percentage2={92.2}
          percentage3={89.3}
        />
        <PercentageContainer
          percentageContainer1Title={"Soddisfazione clienti"}
          percentageContainer1Subtitle={"Dati survey 2021"}
          percentage1={100}
          percentage2={94}
          percentage3={100}
        />
      </Container>

      {/* section */}
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"consulting-fourth-section"}
      >
        <Box className="consulting-fourth-section-banner">
          <div className="consulting-fourth-section-banner-text">
            Segui il cambiamento!
          </div>
        </Box>
      </Container>

      {/* Fourth section with form*/}
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"home-seventh-section-container paddingX-container-default"}
      >
        <Box
          className={"home-seventh-section-box-form"}
        >
          <CustomForm
            formTitle={t("home.form.title")}
          />
        </Box>
      </Container>

    </Box>
  )
}



export default connect()(Consulting)