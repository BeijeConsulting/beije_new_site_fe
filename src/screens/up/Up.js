import React, { useEffect } from "react";

// Redux
import { connect } from "react-redux";
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";

// MUI
import { Box, Container } from "@mui/material";

// Style
import "./Up.css";

// Constants
import { logo_secondary_transparent } from "../../utils/properties";

// Components
import IntroSectionImgTxt from "../../components/functional_components/introSectionImgTxt/IntroSectionImgTxt";

const Up = (props) => {

  console.log("window.innerHeight", window.innerHeight);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    props.dispatch(setCurrentPage("up"));
    props.dispatch(setVisibilityNavbar(true));
    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [])

  return (
    <Box>

      <Box
        className={"bg-dark-grey margin-top-container-screens"}
        style={{ height: "3000px" }}
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
            bgIconDownload="intro-section-download-icon-up"
            sectionName="Beije Up"
            sectionTitle="La nostra software factory"
            photoTitle="UP"
          >
            <div>
              <p>Lavoriamo con dedizione al fianco dei nostri clienti.<br />
                Realizziamo progetti partendo dall’analisi tecnica frontend / backend, realizzazione mockup fino all’implementazione del software attraverso le tecnologie presenti sul mercato.
              </p>
              <div
                className={"first-section-list-container"}
              >
                <p>PROGETTAZIONE</p>
                <p>IMPLEMENTAZIONE</p>
                <p>DELIVERY</p>
                <p>INTEGRATION SOFTWARE</p>
                <p>APPLICATION MAINTENACE</p>
              </div>
            </div>
          </IntroSectionImgTxt>
        </Container>

        {/* Second section */}
        <Container
          component={"section"}
          maxWidth={"false"}
          className={"up-second-section paddingX-container-general-pages"}
        >

          <img
            src={logo_secondary_transparent}
            alt="logo sullo sfondo"
            className="up-logo-bg" />

          <Box className="up-second-section-all-texts-container">
            <Box
              className="up-second-section-text-container up-second-section-text1-container"
            >
              <p>Attraverso metodologia AGILE, verranno definiti step di verifica e di aggiornamento del prodotto già durante lo sviluppo, con frequenti rilasci di versioni testabili dal cliente, in modo da ottimizzare puntualmente miglioramenti e modifiche sulle attività concordate. Dall’analisi del progetto alla stesura della documentazione fino all’implementazione: vi seguiamo in ogni fase.
              </p>
            </Box>

            <Box
              className="up-second-section-text-mobile-container"
            >
              Vi seguiamo in ogni fase
            </Box>

            <Box
              className="up-second-section-text-container up-second-section-text2-container"
            >
              <p>Le tecnologie utilizzate vanno dall’ecosistema Java a quello .Net per il Backend , mentre Javascript e i principali framework per il Frontend (React, Angular e Vue). Per l’infrastruttura basiamo abitualmente i progetti in Cloud su servizi Amazon Web Services.</p>
            </Box>
          </Box>
        </Container>

        {/* Third section */}
        <Container
          component={"section"}
          maxWidth={"false"}
          className={"up-third-section paddingX-container-general-pages bg-blue top-oblique-line"}
        >
        </Container>

      </Box>

    </Box >
  )
}

export default connect()(Up)