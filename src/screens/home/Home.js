import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
import { connect } from "react-redux";

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import actions to dispatch
import { setVisibility, initVisibility } from "../../redux/ducks/visibilityDuck"
import { setColorHeader, initColorHeader } from "../../redux/ducks/colorHeaderDuck";

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

//import constats
import { cardWhoWeAre } from "../../utils/properties";
import SecondSectionTablet from "../../components/homeSections/secondSection/secondSectionTablet/SecondSectionTablet";
import PolygonSection from "../../components/functional_components/polygonSection/PolygonSection";
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

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    window.addEventListener("scroll", handleScroll);
    props.dispatch(setVisibility(false))

    return () => {
      window.removeEventListener("resize", updateMedia);
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      props.dispatch(initVisibility())
      props.dispatch(setColorHeader('#fff'))
    }
    else {
      props.dispatch(setVisibility(false))
      props.dispatch(initColorHeader())
    }
  }

  return (

    <div
      className="gsap-home-container"
    >
      <PolygonSection
        polygenClipPath={'home-polygen-clip-path-contancts'}
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
            <FirstSection
            />
          </div>
        </section>
      </PolygonSection>

      <div style={{ backgroundColor: '#fff' }}>
        <section
          className="gsap-home-second-section"
        >
          <SecondSectionDesktop />
        </section>

        <section>
          <ThirdSection />
        </section>

        <PolygonSection
          polygenClipPath={'home-polygen-clip-path-contancts'}
        >
          <section className="home-fourth-section">
            <FourthSection />
          </section>
        </PolygonSection>
      </div>

    </div >


  );
}

export default connect()(Home);
