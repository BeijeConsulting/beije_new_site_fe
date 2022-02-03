import React from "react";
import { useRoutes } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import ReactGa from 'react-ga';
import { Layout } from 'antd';
import { ENVIRONMENT } from "./utils/properties";
const { Header, Footer } = Layout;

// import style
import './style.css'

// import components
import CustomHeader from './components/hooks_components/customHeader/CustomHeader'
import CustomFooter from "./components/functional_components/customFooter/CustomFooter";
import SiteRoutes from './routes';
import RouteChangeTracker from "./components/functional_components/RouteChangeTracker";
import { get } from "lodash";

const App = (props) => {
  ReactGa.initialize(ENVIRONMENT.GOOGLE_ANALITYCS_KEY);
  let element = useRoutes(SiteRoutes);
  const pageIsBouncing = useSelector((state) => get(state.loadingDuck, 'pageIsBouncing', false));
  return (
    <>
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
      <Footer className={`${pageIsBouncing && 'hidden'} generalLayout-footer`}>
        <CustomFooter />
      </Footer>
    </>
  )
}

const mapStateToProps = state => ({
  colorHeaderDuck: state.colorHeaderDuck
})

export default connect(mapStateToProps)(App)