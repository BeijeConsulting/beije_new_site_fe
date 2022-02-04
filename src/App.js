import React from "react";
import { useRoutes } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import ReactGa from 'react-ga';
import { Layout } from 'antd';
import { ENVIRONMENT } from "./utils/properties";
const { Header, Footer } = Layout;

// import cookies
import CookieConsent, { Cookies } from "react-cookie-consent";

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

  let testCookieName = "test"
  Cookies.remove(testCookieName)
  console.log("cookie: ", Cookies.get(testCookieName));
  Cookies.set(testCookieName, 500);
  console.log("cookie: ", Cookies.get(testCookieName));

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
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        enableDeclineButton
        declineButtonText="Decline"
        cookieName="Cookies_BeijePeopleFirst"
        style={{ background: "#323e48", borderTop: '1px solid #d6e3e5' }}
        buttonStyle={{ color: "#323e48", fontSize: "15px", backgroundColor: '#d6e3e5', borderRadius: '30px' }}
        declineButtonStyle={{ color: "#323e48", fontSize: "15px", backgroundColor: '#d6e3e5', borderRadius: '30px' }}
        expires={150}
      >
        <span>This website uses cookies to enhance the user experience.</span>
      </CookieConsent>

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