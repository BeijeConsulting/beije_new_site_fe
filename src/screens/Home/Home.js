import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import ReactFullpage from "@fullpage/react-fullpage";
import { Layout } from "antd";
const { Footer } = Layout;

//import actions to dispatch
import { setColor, initColor } from "../../redux/ducks/colorDuck";
import { setVisibility, initVisibility } from "../../redux/ducks/visibilityDuck"
import { setColorHeader, initColorHeader } from "../../redux/ducks/colorHeaderDuck";


//import style
import './Home.css';
import '../../style.css'
import '../../layout/homeLayout/HomeLayout'

//import constants
// import { video_home } from "../../utils/properties";

//import components
import ContainerSectionScroll from "../../components/functional_components/containerSectionScroll/ContainerSectionScroll";
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
  const colorContactPage = '#d6e3e5'

  useEffect(() => {
    props.dispatch(setColor(true))
    props.dispatch(setVisibility(false)) //set visibility of navbar
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [])

  const [myState, setState] = useState({
    originIndex: 0,
    destinationIndex: null,
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


  //this function need three params: origin, destination, direction. 
  //Due to we are using both origin and dastination we can't remove one of the two params from the function, 
  //cause it won't work anymore
  const onLeave = (origin, destination) => {

    setState({
      ...myState,
      originIndex: origin.index
    })
  }

  //this function need three params: origin, destination, direction. 
  const afterLoad = (origin, destination) => {

    if (destination.index === 0) {
      props.dispatch(setColor(true))
      props.dispatch(setVisibility(false)) //set visibility of navbar
      props.dispatch(initColorHeader())
    }
    else if (destination.index === 6 && !myState.isDesktop) {
      props.dispatch(setColorHeader(colorContactPage))
    }
    else if (destination.index === 4 && myState.isTablet) {
      props.dispatch(setColorHeader(colorContactPage))
    }
    else if (destination.index === 3 && myState.isDesktop) {
      props.dispatch(setColorHeader(colorContactPage))
    }
    else {
      props.dispatch(initColor())
      props.dispatch(initVisibility())
      props.dispatch(setColorHeader('#fff'))
    }

    setState({
      ...myState,
      destinationIndex: destination.index
    })
  }

  const switchColorPage = () => {
    let pageColorList = ["transparent", "#fff", "#fff", colorContactPage];
    if (myState.isTablet) {
      pageColorList = ["transparent", "#fff", "#fff", "#fff", colorContactPage]
    }
    else if (!myState.isTablet && !myState.isDesktop) {
      pageColorList = ["transparent", "#fff", "#fff", "#fff", "#fff", "#fff", colorContactPage]
    }

    return (pageColorList)
  }

  return (
    /* *he* */
    //   {/* 
    //     <Helmet>
    //         <title>Beije People First</title>
    //         <meta name='description' content='beije home page' />
    //         <meta name='keywords' content='web developer, people first' />
    //     </Helmet> 
    //   */}

    <div >
      <ReactFullpage
        scrollOverflow={true}
        sectionsColor={switchColorPage()}
        onLeave={onLeave}
        afterLoad={afterLoad}
        render={({ state, fullpageApi }) => {
          return (
            <div style={{ height: '100vh' }}>
              <section className="section section1">

                <div className='home-video-filter'>
                  {/* <BackgroundVideo
                    autoPlay
                    muted
                    loop
                    src={video_home}
                  /> */}
                  <ContainerSectionScroll>
                    <FirstSection
                      callbackScroll={() => fullpageApi.moveTo(2, 0)}
                    />
                  </ContainerSectionScroll>
                </div>
              </section>

              <section className="section section2 ">
                <ContainerSectionScroll
                  className='home-container-section2 home.gsap.second.section'
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
                <section className="section">
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

              {!myState.isDesktop && !myState.isTablet &&

                <section className="section">
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

                <section className="section">
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

                <section className="section">
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

              <section className="section">
                <ContainerSectionScroll
                  className='home-container-section3'
                >
                  <ThirdSection />

                </ContainerSectionScroll>
              </section>

              <section className="section">
                <ContainerSectionScroll>
                  <FourthSection />
                </ContainerSectionScroll>
              </section>

              <section className="section">
                <Footer className={'homeLayout-footer'}>
                  <CustomFooter />
                </Footer>
              </section>

            </div>
          );
        }}
      />

    </div >


  );
}

export default connect()(Home);
