import React from "react";
import { useRoutes } from "react-router-dom";
import { connect } from "react-redux";

import { Layout } from 'antd';
const { Header, Footer } = Layout;

// import style
import './style.css'


// import components
import CustomHeader from './components/hooks_components/customHeader/CustomHeader'
import CustomFooter from "./components/functional_components/customFooter/CustomFooter";
import SiteRoutes from './routes';


const App = (props) => {
  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.

  let element = useRoutes(SiteRoutes);

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
      {element}

      <Footer className={'generalLayout-footer'}>
        <CustomFooter />
      </Footer>
    </>
  );
}

const mapStateToProps = state => ({
  colorHeaderDuck: state.colorHeaderDuck
})

export default connect(mapStateToProps)(App)
