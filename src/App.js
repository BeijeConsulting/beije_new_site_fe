import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import { connect } from "react-redux";
import ReactGa from 'react-ga';
import { Layout } from 'antd';
const { Header, Footer } = Layout;
import { Player } from '@lottiefiles/react-lottie-player';


// import style
import './style.css'

import bounce_intro from './assets/lottie/bounce_intro.json'


// import components
import CustomHeader from './components/hooks_components/customHeader/CustomHeader'
import CustomFooter from "./components/functional_components/customFooter/CustomFooter";
import SiteRoutes from './routes';
import { googleAnalyticsKey } from "./utils/properties";
import RouteChangeTracker from "./components/functional_components/RouteChangeTracker";


const App = (props) => {
  ReactGa.initialize(googleAnalyticsKey);

  // const [state, setState] = useState({
  //   showBounce: true
  // });
  let element = useRoutes(SiteRoutes);
  // setTimeout(() => { setState({ ...state, showBounce: false }) }, 3500);

  // const finishAnimation = () => {
  //   console.log('finisch animation')
  // }

  return (
    <>
      {/* {state.showBounce && <div className="bounce-intro-positioning">
        <Player
          onEvent={event => {
            if (event === 'complete') finishAnimation(); // check event type and do something
          }}
          autoplay
          // loop
          src={bounce_intro}
          className="bounce-intro"
          renderer='svg'
        />
      </div>} */}
      <Header
        className={!props?.menuDuck?.menuOpen ? 'header-ant-general-style' : 'header-ant-style'}
        style={{
          backgroundColor: props?.colorHeaderDuck?.colorHeader !== undefined ?
            props?.colorHeaderDuck?.colorHeader : "transparent",
          transition: '1.5s'
        }}
      >
        <CustomHeader />
      </Header>

      <RouteChangeTracker />
      {element}

      <Footer className={'generalLayout-footer'}>
        <CustomFooter />
      </Footer>
    </>
  )
}
const mapStateToProps = state => ({
  colorHeaderDuck: state.colorHeaderDuck
})

export default connect(mapStateToProps)(App)
