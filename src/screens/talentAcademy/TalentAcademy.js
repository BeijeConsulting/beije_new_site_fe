import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// MUI
import { Box, Container } from "@mui/material";

// styles
import './TalentAcademy.css'

// Components
import IntroSectionImgTxt from "../../components/functional_components/introSectionImgTxt/IntroSectionImgTxt";
import CustomForm from "../../components/hooks_components/customForm/CustomForm";


const TalentAcademy = (props) => {

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

  return (

    <Box
      className={"bg-dark-grey margin-top-container-screens"}
    // style={{ height: "3000px" }}
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



      {/* sixth section form*/}
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"up-sixth-section-container paddingX-container-general-pages"}
      >
        <Box
          className={"home-seventh-section-box-form"}
        >
          <CustomForm
            formTitle={t("up.form.title")}
          />
        </Box>
      </Container>


    </Box>

  )
}

export default connect()(TalentAcademy)