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
          sectionTitle="La nostra software factory"
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
        <Box className="up-second-section-all-texts-container">
          <Box
            className="up-second-section-text-container up-second-section-text1-container"
          >
            <p>IN OTTICA PEOPLE FIRST AIUTIAMO LE AZIENDE A COSTRUIRE TEAM DI VALORE ATTRAVERSO FIGUARE ALTAMENTE SPECIALIZZATE
            </p>
          </Box>

          <Box
            className="up-second-section-text-container up-second-section-text2-container"
          >
            <p>BLA BLA BLA</p>
            <p>per le grandezze controlla le variabili su styles.css</p>
          </Box>
        </Box>
      </Container>

      {/* Third section */}
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"consulting-third-section paddingX-container-general-pages bg-lightblue top-oblique-line"}
      >
      </Container>

      {/* section */}
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"paddingX-container-general-pages consulting-fourth-section"}
      >
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