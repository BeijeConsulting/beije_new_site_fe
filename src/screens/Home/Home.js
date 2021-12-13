import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import ReactFullpage from "@fullpage/react-fullpage";
import { Layout } from "antd";
const { Footer } = Layout;


//import actions to dispatch
import { setColor, initColor } from "../../redux/ducks/colorDuck";
import { setVisibility, initVisibility } from "../../redux/ducks/visibilityDuck"


//import style
import './Home.css';
import '../../style.css'
import '../../layout/homeLayout/HomeLayout'

//import assets
import video_trial from '../../assets/videos/trial_video.mp4'

//import components
import CustomFooter from "../../components/functional_components/customFooter/CustomFooter";
import FirstSection from "../../components/homeSections/firstSection/FirstSection";
import BackgroundVideo from "../../components/functional_components/backgroundVideo/BackgroundVideo";
import ContainerSectionScroll from "../../components/functional_components/containerSectionScroll/ContainerSectionScroll";
import SecondSection from "../../components/homeSections/secondSection/SecondSection";
import ThirdSection from "../../components/homeSections/thirdSection/ThirdSection";
import FourthSection from "../../components/homeSections/fourthSection/FourthSection";


const Home = (props) => {
  const colorContactPage = '#d6e3e5'

  useEffect(() => {
    props.dispatch(setColor(true))
    props.dispatch(setVisibility(false)) //set visibility of navbar
  }, [])

  const [state, setState] = useState({
    originIndex: 0,
    destinationIndex: null
  })

  //this function need three params: origin, destination, direction. 
  //Due to we are using both origin and dastination we can't remove one of the two params from the function, 
  //cause it won't work anymore
  const onLeave = (origin, destination) => {

    setState({
      ...state,
      originIndex: origin.index
    })
  }

  //this function need three params: origin, destination, direction. 
  const afterLoad = (origin, destination) => {

    if (destination.index === 0) {
      props.dispatch(setColor(true))
      props.dispatch(setVisibility(false)) //set visibility of navbar
    }
    else {
      props.dispatch(initColor())
      props.dispatch(initVisibility())
    }

    setState({
      ...state,
      destinationIndex: destination.index
    })
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
        sectionsColor={["transparent", "#fff", "#fff", colorContactPage]}
        onLeave={onLeave}
        afterLoad={afterLoad}
        render={({ state, fullpageApi }) => {
          return (
            <div style={{ height: '100vh' }}>
              <div className="section section1">

                <div className='home-video-filter'>
                  <BackgroundVideo
                    autoPlay
                    muted
                    loop
                    src={video_trial}
                  />
                  <FirstSection
                    callbackScroll={() => fullpageApi.moveTo(2, 0)}
                  />
                </div>
              </div>

              <div className="section section2">
                <ContainerSectionScroll
                  className='home-container-section2'
                  scrollBar={true}
                >
                  <SecondSection />

                </ContainerSectionScroll>
              </div>

              <div className="section">
                <ContainerSectionScroll
                  className='home-container-section3'
                >
                  <ThirdSection />

                </ContainerSectionScroll>
              </div>

              <div className="section">
                <ContainerSectionScroll>
                  <FourthSection />
                </ContainerSectionScroll>
              </div>

              <div className="section">
                <Footer className={'homeLayout-footer'}>
                  <CustomFooter />
                </Footer>
              </div>

            </div>
          );
        }}
      />

    </div>


  );
}

export default connect()(Home);
