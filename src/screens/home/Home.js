import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

// Redux
import { connect } from "react-redux";
import { setColorHeader, initColorHeader } from "../../redux/ducks/colorHeaderDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";

// MUI
import { Container } from "@mui/material";
import { Box } from "@mui/system";

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Style
import "./Home.css";

// Constants
import { tab_aboutUs, logo_secondary_grey } from "../../utils/properties"

// Components
import CustomNavbar from "../../components/hooks_components/customNavbar/CustomNavbar";
import ScrollDownButton from "../../components/functional_components/scrollDownButton/ScrollDownButton";
import CustomTab from "../../components/hooks_components/customTab/CustomTab";
import CustomCarousel from "../../components/hooks_components/customCarousel/CustomCarousel";
import CustomForm from "../../components/hooks_components/customForm/CustomForm";
import Loading from "../../components/functional_components/loading/Loading";

const Home = (props) => {
  const { t } = useTranslation();
  const refDarkContainer = useRef();

  const [state, setState] = useState({
    loadingEnd: true
  })

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    loadingAnimation();

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    window.addEventListener("scroll", handleScroll);
    props.dispatch(setCurrentPage(""));
    props.dispatch(setVisibilityNavbar(false));

    const element = refDarkContainer.current;
    const fourthSectionP = element.querySelector('.home-fourth-section-p');
    const fifthSection = element.querySelector('.home-fifth-section-container-gsap');
    const fifthSectionFinalSpan = element.querySelector('.home-fifth-section-final-span-gsap')

    gsap.timeline({
      scrollTrigger: {
        trigger: fourthSectionP,
        start: 'top 75%',
        toggleClass: { targets: fourthSectionP, className: "home-fourth-section-p-animation" }
      },
    });

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: fifthSection,
        start: '50% 75%'
      },
    });

    t1.from(fifthSectionFinalSpan, { opacity: 0, duration: 1, ease: 'power2.in' })

    return () => {
      window.removeEventListener("scroll", handleScroll);
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    }
  }, [])

  const loadingAnimation = () => {
    setTimeout(() => {
      setState({
        ...state,
        loadingEnd: true
      })
    }, 2000)
  }

  const handleScroll = () => {
    let elementTop = refDarkContainer.current.offsetTop;
    if (window.pageYOffset >= elementTop) {
      props.dispatch(setColorHeader("#262E36"));
      props.dispatch(setVisibilityNavbar(true));
    }
    else {
      props.dispatch(initColorHeader());
      props.dispatch(initVisibilityNavbar());
    }
  }

  const scrollToSection = () => {
    let elementTop = refDarkContainer.current.offsetTop;
    window.scrollTo({
      top: elementTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      {
        !state.loadingEnd &&
        <Loading />
        // <div>Ciao</div>
      }


      <Box
        className={!state.loadingEnd ? "display-none" : ""}
      >
        {/* First section with title */}
        <Container
          component={"section"}
          maxWidth={"false"}
          className={"home-fist-section-container paddingX-container-default d-flex flex-column"}
        >
          <Box className={"home-first-section-title-container d-flex flex-column justify-center"}>
            <h1>
              {t("home.firstSection.title.part1")}
              <br />
              {t("home.firstSection.title.part2")}
              <br />
              {t("home.firstSection.title.part3")}
            </h1>
          </Box>
          <Box className={"home-first-section-navbar-container"}>
            <CustomNavbar
              type={"home-navbar"}
            />
          </Box>
          <Box className={"home-first-section-scroll-down-container"}>
            <ScrollDownButton
              callback={scrollToSection}
            />
          </Box>
        </Container>

        {/* Second section with description */}
        <Container
          component={"section"}
          maxWidth={"false"}
          className={"home-second-section-container d-flex flex-column justify-center"}
        >
          <h3 className={"home-second-section-txt"}>
            <span className={"home-second-section-quotation-marks"}>&#8220;</span>
            <span>
              {t("home.secondSection.part1")}
              <br />
              {t("home.secondSection.part2")}
              <br />
              {t("home.secondSection.part3")}
            </span>
            {/* <span>Lavoriamo costantemente per arrivare <br />alla piena soddisfazione <br />dei nostri clienti</span> */}
            <span className={"home-second-section-quotation-marks"}>&#8222;</span>
          </h3>
        </Container>

        {/* Box with dark bg for next sections */}
        <Box
          ref={refDarkContainer}
          className={"bg-dark-grey position-relative"}
        >
          <img
            src={logo_secondary_grey}
            alt="logo sullo sfondo"
            className="home-logo-bg" />

          <p
            className={"home-written-bg-desktop"}
          >People first
          </p>

          {/* Third section with tab */}
          <Container
            component={"section"}
            maxWidth={"false"}
            className={"home-third-section-container paddingX-container-default"}
          >
            <Box className={"home-third-section-tab-container d-flex"}>
              <CustomTab
                obj={tab_aboutUs}
              />
            </Box>
          </Container>

          {/* Fourth section desktop with center sentence*/}
          <Container
            component={"section"}
            maxWidth={"false"}
            className={"home-fourth-section-container paddingX-container-default top-oblique-line"}
          >
            <Box>
              <p
                className="home-fourth-section-p"
              >
                <strong>{t("home.fourthSection.title.part1")}</strong>&nbsp;<br />
                <strong>{t("home.fourthSection.title.part2")}</strong>&nbsp;<br />
                <strong>{t("home.fourthSection.title.part3")}</strong>
              </p>
            </Box>

            <p
              className={"home-written-bg-mobile"}
            >People first
            </p>
          </Container>

          {/* Fifth section desktop with about us description and carousel*/}
          <Container
            component={"section"}
            maxWidth={"false"}
            className={"position-relative"}
          >
            <Container
              component={"section"}
              maxWidth={"false"}
              className={"home-fifth-section-container paddingX-container-default home-fifth-section-container-gsap"}
            >
              <Box className={"home-fifth-section-first-box"}>
                <h2>{t("home.fifthSection.title")}</h2>
              </Box>
              <Box className={"home-fifth-section-second-box"}>
                <p>
                  <span
                    className="home-fifth-section-span"
                  >
                    {t("home.fifthSection.content.part1")}
                  </span>

                  <span
                    className="home-fifth-section-span-strong"
                  >
                    <strong>{t("home.fifthSection.content.part2")}</strong>
                  </span>

                  <span
                    className="home-fifth-section-span"
                  >
                    {t("home.fifthSection.content.part3")}
                  </span>

                  <span
                    className="home-fifth-section-span-strong"
                  >
                    <strong>{t("home.fifthSection.content.part4")}</strong>
                  </span>

                  <span
                    className="home-fifth-section-span"
                  >
                    {t("home.fifthSection.content.part5")}
                  </span>

                  <span
                    className="home-fifth-section-span-strong"
                  >
                    <strong>{t("home.fifthSection.content.part6")}</strong>
                  </span>

                  <span
                    className="home-fifth-section-span"
                  >
                    {t("home.fifthSection.content.part7")}
                  </span>

                  <span
                    className="home-fifth-section-span-strong"
                  >
                    <strong>{t("home.fifthSection.content.part8")}</strong>
                  </span>

                  <span
                    className="home-fifth-section-span"
                  >
                    {t("home.fifthSection.content.part9")}
                  </span>

                  <span
                    className="home-fifth-section-span-strong"
                  >
                    <strong>{t("home.fifthSection.content.part10")}</strong>
                  </span>

                  <span
                    className="home-fifth-section-span"
                  >
                    {t("home.fifthSection.content.part11")}
                  </span>

                  <span
                    className="home-fifth-section-span-strong"
                  >
                    <strong>{t("home.fifthSection.content.part12")}</strong>
                  </span>

                  <span
                    className="home-fifth-section-span"
                  >
                    {t("home.fifthSection.content.part13")}
                  </span>

                  <span
                    className="home-fifth-section-span-strong"
                  >
                    <strong>{t("home.fifthSection.content.part14")}</strong>
                  </span>

                  <span
                    className="home-fifth-section-span"
                  >
                    {t("home.fifthSection.content.part15")}
                  </span>

                  <br />
                  <br />
                  <span
                    className="home-fifth-section-span-strong home-fifth-section-final-span-gsap"
                  >
                    {t("home.fifthSection.content.part16")}
                  </span>
                </p>
                {/* <CustomLink
                  linkTo=""
                  content="Read more"
                /> */}
              </Box>
            </Container>

            <Container
              component={"section"}
              maxWidth={"false"}
              className={"home-sixth-section-container"}
            >
              <CustomCarousel
                homeCarousel
              />
            </Container>
          </Container>

          {/* Sixth section with form*/}
          <Container
            component={"section"}
            maxWidth={"false"}
            className={"home-seventh-section-container paddingX-container-default top-oblique-line"}
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
      </Box >

    </>

  );
}

export default connect()(Home);
