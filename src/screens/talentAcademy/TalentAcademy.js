import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// MUI
import { Box, Container, Tab } from "@mui/material";

// styles
import './TalentAcademy.css'

// Constants
import { employeesComments } from "../../utils/properties";

// Components
import IntroSectionImgTxt from "../../components/functional_components/introSectionImgTxt/IntroSectionImgTxt";
import CustomForm from "../../components/hooks_components/customForm/CustomForm";
import CustomLink from "../../components/functional_components/ui/customLink/CustomLink";
import CustomBanner from "../../components/functional_components/customBanner/CustomBanner";
import CustomTable from "../../components/functional_components/customTable/CustomTable";
import SimpleCarousel from "../../components/functional_components/simpleCarousel/SimpleCarousel";
import CustomTab from "../../components/hooks_components/customTab/CustomTab";
import CustomScrollTab from "../../components/hooks_components/customScrollTab/CustomScrollTab";


const TalentAcademy = (props) => {

  const { t } = useTranslation();
  const secondContainerRef = useRef();

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
          callback={scrollToSection}
          download={"academy"}
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
      <div
        className="bg-dark-grey position-relative"
        ref={secondContainerRef}
      >
        {/* Second section */}
        <Container
          component={"section"}
          maxWidth={"false"}
          className={"padding-0"}
        >
          <CustomBanner
            ariaLabel={"Icon button link to youtube Beije channel"}
            title={"DIVENTA IL PROSSIMO SOFTWARE NINJANEER!"}
            text={"Vieni a scoprire il nostro canale YouTube: troverai le pillole digitali dei nostri esperti Frontend e Backend, i webinar e molto altro ancora."}
            enphasisTxt={"Ti aspettiamo!"}
          />
        </Container>

        {/* Third section */}
        <Container
          component={"section"}
          maxWidth={"false"}
          className={"academy-third-section-container paddingX-container-general-pages"}
        >

          <h2>Le nostre academy</h2>
          <div
            className="academy-third-section-links-container"
          >
            <div>
              <CustomLink
                content={"Academy Frontend"}
                typeLink={"detail-academy"}
              />
            </div>
            <div>
              <CustomLink
                content={"Academy Backend"}
                typeLink={"detail-academy"}
              />
            </div>
          </div>

          <h2>I nostri prossimi corsi</h2>

          <Box
            className={"academy-third-section-table-container"}
          >
            <CustomTable />
          </Box>
          <div
            className={"academy-third-section-go-to-career-link-container"}
          >
            <CustomLink
              content={"Vedi tutti"}
            />
          </div>
        </Container>

        {/* Fourth section */}

        <Container
          component={"section"}
          maxWidth={"false"}
          className={"academy-fourth-section-container paddingX-container-general-pages top-oblique-line bg-yellow"}
        >

          <Box>
            <h2>Dicono di noi</h2>
          </Box>
          <Box
            className={"academy-fourth-section-tab-comments"}
          >
            {/* <SimpleCarousel
              obj={employeesComments}
            /> */}
            {/* <CustomTab
              obj={employeesComments}
              classNameContainer={"tab-container-academy"}
            /> */}
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

        {/* sixth section form*/}
        <Container
          component={"section"}
          maxWidth={"false"}
          className={"up-sixth-section-container paddingX-container-general-pages"}
        >
          <Box
            className={"academy-sixth-section-box-form"}
          >
            <CustomForm
              formTitle={t("up.form.title")}
            />
          </Box>
        </Container>

      </div>
    </Box>

  )
}

export default connect()(TalentAcademy)