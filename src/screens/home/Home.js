import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Layout } from "antd";
const { Footer } = Layout;

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";

//import actions to dispatch
import { setVisibility, initVisibility } from "../../redux/ducks/visibilityDuck"

//import style
import './Home.css';

//import components
import ContainerSectionScroll from "../../components/functional_components/containerSectionScroll/ContainerSectionScroll";
import BackgroundVideo from '../../components/functional_components/backgroundVideo/BackgroundVideo'
import FirstSection from "../../components/homeSections/firstSection/FirstSection";
import SecondSectionDesktop from "../../components/homeSections/secondSection/secondSectionDesktop/SecondSectionDesktop";
import SecondSectionMobile from "../../components/homeSections/secondSection/secondSectionMobile/SecondSectionMobile";
import ThirdSection from "../../components/homeSections/thirdSection/ThirdSection";
import FourthSection from "../../components/homeSections/fourthSection/FourthSection";
import CustomFooter from "../../components/functional_components/customFooter/CustomFooter";

//import constats
import { cardWhoWeAre } from "../../utils/properties";
import SecondSectionTablet from "../../components/homeSections/secondSection/secondSectionTablet/SecondSectionTablet";
const historyObj = cardWhoWeAre[1];
const missionObj = cardWhoWeAre[2];
const visionObj = cardWhoWeAre[3];


const Home = (props) => {

  const [myState, setState] = useState({
    isDesktop: window.innerWidth >= 1024,
    isTablet: window.innerWidth >= 768 && window.innerWidth < 1024
  })

  const updateMedia = () => {
    setState({
      ...myState,
      isDesktop: window.innerWidth >= 1024,
      isTablet: window.innerWidth >= 768 && window.innerWidth < 1024
    });
  };


  //GSAP
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    window.addEventListener("scroll", handleScroll);
    props.dispatch(setVisibility(false))

    let panels = gsap.utils.toArray(".home-section");

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
      });
    });

    ScrollTrigger.create({
      start: 0,
      end: "max",
      // snap: 1 / (panels.length - 1)
    })

    return () => {
      window.removeEventListener("resize", updateMedia);
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      props.dispatch(initVisibility())
    }
    else { props.dispatch(setVisibility(false)) }
  }

  return (

    <div
      className="gsap-home-container"
    >
      <section
        className="home-section gsap-home-first-section"
      >
        <div className='home-video-filter'>
          <BackgroundVideo
            autoPlay
            muted
            loop
            src={'https://beije.s3.eu-west-1.amazonaws.com/video_home.mp4'}
          />
          {/* <ContainerSectionScroll> */}
            <FirstSection
            // callbackScroll={ }
            />
          {/* </ContainerSectionScroll> */}
        </div>
      </section>

      <section
        className="home-section home-second-section gsap-home-second-section"
      >
        <ContainerSectionScroll
          className='home-container-section2'
          scrollBar={true}
        >
          {
            myState.isDesktop &&
            <SecondSectionDesktop />
          }
          {
            myState.isTablet &&
            <SecondSectionTablet />
          }
          {
            !myState.isDesktop && !myState.isTablet &&
            <SecondSectionMobile />
          }
        </ContainerSectionScroll>
      </section>

      {
        myState.isTablet &&
        <section className="home-section home-second-section">
          <ContainerSectionScroll
            className='home-container-section2'
            scrollBar={true}
          >
            <SecondSectionTablet
              card1={2}
              card2={4}
            />
          </ContainerSectionScroll>
        </section>
      }

      {
        !myState.isDesktop && !myState.isTablet &&
        <section className="home-section home-second-section">
          <ContainerSectionScroll
            className='home-container-section2'
            scrollBar={true}
          >
            <SecondSectionMobile
              obj={historyObj}
            />
          </ContainerSectionScroll>
        </section>
      }

      {!myState.isDesktop && !myState.isTablet &&

        <section className="home-section home-second-section">
          <ContainerSectionScroll
            className='home-container-section2'
            scrollBar={true}
          >
            <SecondSectionMobile
              obj={missionObj}
            />
          </ContainerSectionScroll>
        </section>
      }

      {!myState.isDesktop && !myState.isTablet &&

        <section className="home-section home-second-section">
          <ContainerSectionScroll
            className='home-container-section2'
            scrollBar={true}
          >
            <SecondSectionMobile
              obj={visionObj}
            />
          </ContainerSectionScroll>
        </section>
      }

      <section className="home-section home-third-section">
        <ContainerSectionScroll
          className='home-container-section3'
        >
          <ThirdSection />

        </ContainerSectionScroll>
      </section>

      <section className="home-section home-fourth-section">
        <ContainerSectionScroll>
          <FourthSection />
        </ContainerSectionScroll>
      </section>

      <section className="home-section home-last-section">
        <Footer className={'homeLayout-footer'}>
          <CustomFooter />
        </Footer>
      </section>

    </div >


  );
}

export default connect()(Home);
