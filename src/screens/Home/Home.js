import React, { useState } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

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
import HomeFirstPage from "../../components/hooks_components/homePages/homeFirstPage/HomeFirstPage";
import BackgroundVideo from "../../components/functional_components/backgroundVideo/BackgroundVideo";
import CustomButton from "../../components/functional_components/Button/CustomButton";


const Home = (props) => {
  const { t } = useTranslation();
  const userInfo = useSelector((state) => get(state.userInfoDuck, 'userInfo', {}));

  const [state, setState] = useState({
    originIndex: 0,
    destinationIndex: null
  })

  const onLeave = (origin) => {

    setState({
      ...state,
      originIndex: origin.index
    })
  }
  const afterLoad = (destination) => {

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
        sectionsColor={["transparent", "purple", "green", 'blue']}
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
                  <HomeFirstPage
                    callbackScroll={() => fullpageApi.moveTo(2, 0)}
                  />
                </div>
              </div>

              <div className="section section2">
                <p>Section 2</p>
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

export default Home;
