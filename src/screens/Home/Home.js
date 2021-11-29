import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { setColor, initColor } from "../../redux/ducks/colorDuck";
import { setVisibility, initVisibility } from "../../redux/ducks/visibilityDuck"

import { useTranslation } from 'react-i18next';
import ReactFullpage from "@fullpage/react-fullpage";
import { get } from 'lodash';
import { Helmet } from "react-helmet";
import { Typography, Layout } from "antd";
const { Title } = Typography;
const { Header, Footer, Content } = Layout;


//import style
import './Home.css';
import '../../style.css'
import '../../layout/basicLayout/BasicLayout.css'

//import assets
import video_trial from '../../assets/videos/trial_video.mp4'

//import components
import CustomFooter from "../../components/hooks_components/customFooter/CustomFooter";
import FirstSection from "../../components/hooks_components/homePages/firstSection/FirstSection";
import BackgroundVideo from "../../components/functional_components/backgroundVideo/BackgroundVideo";
import CustomButton from "../../components/functional_components/Button/CustomButton";
import ContainerSectionScroll from "../../components/functional_components/containerSectionScroll/ContainerSectionScroll";
import CustomCard from "../../components/functional_components/customCard/CustomCard";
import SecondSection from "../../components/hooks_components/homePages/secondSection/SecondSection";


const Home = (props) => {
  const { t } = useTranslation();
  const userInfo = useSelector((state) => get(state.userInfoDuck, 'userInfo', {}));
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
    // <div className="home-container">
    //   {/* *he* */}
    //   {/* 
    //     <Helmet>
    //         <title>Beije People First</title>
    //         <meta name='description' content='beije home page' />
    //         <meta name='keywords' content='web developer, people first' />
    //     </Helmet> 
    //   */}

    //   <Row justify="center">
    //     <Col className="center">
    //       <Title level={2}>{t('general.Welcome')} {userInfo.name}</Title>
    //     </Col>
    //   </Row>
    // </div>
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
                >
                  <SecondSection />

                </ContainerSectionScroll>
              </div>
              <div className="section">
                <h3>Section 3</h3>
                <button onClick={() => fullpageApi.moveTo(1, 0)}>
                  Move top
                </button>
              </div>
              <div className="section">
                <p>Section 4</p>
              </div>
              <div className="section">
                <Footer className={'basicLayout-footer'}>
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
