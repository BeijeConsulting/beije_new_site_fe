import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import actions to dispatch
import { setVisibility, initVisibility } from "../../redux/ducks/visibilityDuck"
import { setColorHeader, initColorHeader } from "../../redux/ducks/colorHeaderDuck";

//import style
import './Home.css';

//import components
import BackgroundVideo from '../../components/functional_components/backgroundVideo/BackgroundVideo'
import FirstSection from "../../components/homeSections/firstSection/FirstSection";
import SecondSectionDesktop from "../../components/homeSections/secondSection/secondSectionDesktop/SecondSectionDesktop";
import ThirdSection from "../../components/homeSections/thirdSection/ThirdSection";
import FourthSection from "../../components/homeSections/fourthSection/FourthSection";
import InitialBounce from "../../components/functional_components/initialBounce/InitialBounce";
//import constats
import PolygonSection from "../../components/functional_components/polygonSection/PolygonSection";
import { setBounce } from "../../redux/ducks/Loading";
import { get } from "lodash";
import { Helmet } from "react-helmet";



const Home = (props) => {
  const pageIsBouncing = useSelector((state) => get(state.loadingDuck, 'pageIsBouncing', false));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBounce(true));
  }, []);

  setTimeout(() => {
    dispatch(setBounce(false));
  }, 5000);

  //GSAP
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    props.dispatch(setVisibility(false))
    props.dispatch(initColorHeader())

    return () => {
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
    <>
      <Helmet>
        <title>My Title</title>
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
      </Helmet>

      <div
        className="gsap-home-container"
      >
        <InitialBounce showBounce={pageIsBouncing} />
        <div className={`${pageIsBouncing && 'overflow-hidden'} container-fade-in`}>
          <section className="home-polygen-firstSec">
            <BackgroundVideo
              autoPlay
              muted
              loop
              src={'https://beije.s3.eu-west-1.amazonaws.com/video_home.mp4'}
            />
            <div className="home-video-filter">
              <FirstSection
              />
            </div>
          </section>
        </div>
        <div className={`${pageIsBouncing && 'hidden'}`} style={{ backgroundColor: '#fff' }}>
          <section
            className="home-second-section"
          >
            <SecondSectionDesktop />
          </section>

          <PolygonSection>
            <section>
              <ThirdSection />
            </section>
          </PolygonSection>

          {/* <PolygonSection
          polygenClipPath={'home-polygen-clip-path-contancts'}
        > */}
          <section
            className="home-fourth-section"
          >
            <FourthSection />
          </section>
          {/* </PolygonSection> */}
        </div>

      </div >
    </>
  );
}

export default connect()(Home);
