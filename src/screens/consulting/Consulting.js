import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

// Style
import './Consulting.css'

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// MUI
import { Box, Container } from "@mui/material";

// Components
import IntroSectionImgTxt from "../../components/functional_components/introSections/introSectionImgTxt/IntroSectionImgTxt";
import CustomForm from "../../components/hooks_components/customForm/CustomForm";
import PercentageContainer from "../../components/functional_components/percentageContainer/PercentageContainer";

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Consulting = (props) => {

  const { t } = useTranslation();
  const refCountUp = useRef();
  const secondContainerRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    props.dispatch(setCurrentPage("consulting"));
    props.dispatch(setVisibilityNavbar(true));

    const element = refCountUp.current;
    const thirdSectionNumber1 = element.querySelectorAll('.percentage-card-data-number-gsap');
    const thirdSectionNumber2 = element.querySelectorAll('.percentage-card-data-number-right-gsap');
    const thirdSection1Container = element.querySelectorAll('.percentage-container');
    const thirdSection2Container = element.querySelectorAll('.percentage-container-right');
    const bannerText = element.querySelector('.consulting-fourth-section-banner-text');

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: thirdSection1Container,
        start: '28% 100%',
        toggleActions: "play none restart restart"
      }
    })

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: thirdSection2Container,
        start: '28% 100%',
        toggleActions: "play none restart restart"
      }
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: bannerText,
        start: 'top 75%',
        toggleClass: { targets: bannerText, className: "home-fourth-section-p-animation" }
      },
    });

    t1.from(thirdSectionNumber1, { textContent: 0, duration: 3, ease: 'Power2.easeOut', snap: { textContent: 1 } });
    t2.from(thirdSectionNumber2, { textContent: 0, duration: 3, ease: 'Power2.easeOut', snap: { textContent: 1 } });

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
      ref={refCountUp}
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
          bgIconDownload="download-btn-icon-consulting"
          sectionName="Beije Consulting"
          sectionTitle={t("consulting.title")}
          callback={scrollToSection}
          download={"consulting"}
        >
          <div className="consulting-first-section-description-container">
            <p>{t("consulting.intro.part1")} <span className="text-lightblue">{t("consulting.intro.part2")}</span> {t("consulting.intro.part3")}</p>
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
          className={"paddingX-container-general-pages"}
        >
          <Box className="consulting-second-section-all-texts-container">
            <Box
              className="consulting-second-section-text-container"
            >
              <p>{t("consulting.firstSection.description")}</p>
            </Box>

            <Box
              className="consulting-second-section-text-list-container up-second-section-text2-container titles-level-1-2"
            >
              <p>{t("consulting.firstSection.list.element1")}</p>
              <p>{t("consulting.firstSection.list.element2")}</p>
              <p>{t("consulting.firstSection.list.element3")}</p>
              <p>{t("consulting.firstSection.list.element4")}</p>
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
            percentageContainer1Title={t("consulting.percentageBox.title1")}
            percentageContainer1Subtitle={t("consulting.percentageBox.subtitle")}
            percentage1={"96,5"}
            percentage2={"92,2"}
            percentage3={"89,3"}
          />
          <PercentageContainer
            percentageContainer1Title={t("consulting.percentageBox.title2")}
            percentageContainer1Subtitle={t("consulting.percentageBox.subtitle")}
            percentage1={"100"}
            percentage2={"94"}
            percentage3={"100"}
            right
          />
        </Container>

        {/* Fourth section */}
        <Container
          component={"section"}
          maxWidth={"false"}
          className={"padding-0"}
        >
          <Box className="consulting-fourth-section-banner">
            <div className="consulting-fourth-section-banner-text">
              {t("consulting.bannerTitle")}
            </div>
          </Box>
        </Container>

        {/* Fifth section with form*/}
        <Container
          component={"section"}
          maxWidth={"false"}
          className={"home-seventh-section-container paddingX-container-general-pages"}
        >
          <Box>
            <CustomForm
              formTitle={t("consulting.contactFormTitle")}
            />
          </Box>
        </Container>
      </div>
    </Box>
  )
}



export default connect()(Consulting)