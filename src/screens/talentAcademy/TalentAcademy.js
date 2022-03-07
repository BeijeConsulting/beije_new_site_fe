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
import CustomLink from "../../components/functional_components/ui/customLink/CustomLink";
import CustomBanner from "../../components/functional_components/customBanner/CustomBanner";


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
          typeSection="academy"
          classNameBgImgDesktop="intro-section-img-academy"
          classNameBgImgMobile="intro-section-img-academy"
          bgIconDownload="intro-section-download-icon-academy"
          sectionName="Beije talent academy"
          sectionTitle="Corsi specializzati"
        >
          <h3>Frontend &#38; Backend per diventare Software Developer</h3>
          <div className="academy-intro-section-description">
            <p>Svilupperai le tue competenze attraverso lezioni frontali, esercitazioni, valutazioni e progetti reali.
            </p>
          </div>

          <div className="academy-intro-section-apply-container">
            <CustomLink
              content={"candidati"}
              linkTo={"#"}
              typeLink={"apply"}
            />
          </div>

        </IntroSectionImgTxt>
      </Container>

      <Container
        component={"section"}
        maxWidth={"false"}
      > 
        <CustomBanner />
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