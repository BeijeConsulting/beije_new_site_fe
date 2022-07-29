import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './style.css';
import App from './App';
import './i18n/i18n-config';
import { Provider } from "react-redux";
import store from "./redux/createStore";

import CookieConsent from "react-cookie-consent";

// Style
import "./index.css"

// Components 
import CustomLink from './components/functional_components/ui/customLink/CustomLink';
import CookiePolicies_en from "./components/functional_components/cookiePolicies/CookiePolicies_en"
import CookiePolicies_it from "./components/functional_components/cookiePolicies/CookiePolicies_it"
import CustomModal from './components/hooks_components/customModal/CustomModal';

function Root() {
  const { t } = useTranslation();

  const [state, setState] = useState({
    modalIsOpen: false
  })

  const openModal = () => {
    setState({
      ...state,
      modalIsOpen: true,
    })
  }

  const closeModal = () => {
    setState({
      ...state,
      modalIsOpen: false,
    })
  }

  return (
    // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <CookieConsent
          buttonText={<span className='simple-paragraph'>{t("btn.accept")}</span>}
        >
          🍪 {t("cookiePolicies.message.part1")}

          <CustomLink
            linkTo="#"
            callback={openModal}
            content={t("cookiePolicies.message.part2")}
          />
          {t("cookiePolicies.message.part3")}
        </CookieConsent>

        <CustomModal
          stateModal={state.modalIsOpen}
          callbackClose={closeModal}
          modalTitle={t("cookiePolicies.title")}
        >
          {t("cookiePolicies.lang") === "it" ? <CookiePolicies_it /> : <CookiePolicies_en />}

        </CustomModal>
      </BrowserRouter>
      {/* <BrowserRouter>
        <Routes>
          <Route path="*" element={<RedirectToLanguage />} />
        </Routes>
      </BrowserRouter> */}
    </Provider>
    // </React.StrictMode>
  )
}



ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
