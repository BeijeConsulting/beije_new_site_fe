import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

// function RedirectToLanguage() {
//   const { pathname, search } = useLocation();
//   const { i18n } = useTranslation();
//   if (
//     !["/it/", "/en/"].some((l) =>
//       pathname.includes(l)
//     )
//   ) {
//     console.log(i18n.resolvedLanguage)
//     window.location.href = "/" + i18n.resolvedLanguage + pathname + (search ? search : "");
//   }
//   return null;
// }

function RedirectToLanguage() {
  const { pathname, search } = useLocation();
  const { i18n } = useTranslation();
  const langs = ["/it/", "/en/"];
  if (!langs.some((l) => pathname.includes(l))) {
    window.location.href =
      "/" + i18n.resolvedLanguage + pathname + (search ? search : "");
  } else {
    const chosenLang = langs
      .find((l) => pathname.includes(l))
      .replace(/\//g, "");
    if (i18n.resolvedLanguage !== chosenLang) {
      i18n.changeLanguage(
        langs.find((l) => pathname.includes(l)).replace(/\//g, "")
      );
      window.location.reload();
    }
  }
  return null;
}

function Root() {
  const { i18n } = useTranslation();

  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter basename={i18n.resolvedLanguage}>
          <App />
          <CookieConsent
            buttonText={<span className='simple-paragraph'>Acconsenti</span>}
          >
            🍪 Acconsenti i cookies. Clicca su&nbsp;&nbsp;

            <CustomLink
              linkTo="#"
              download={true}
              target={"_blank"}
              rel="noreferrer"
              content="questo link"
            />
            &nbsp;&nbsp;per leggere l&apos;informativa.
          </CookieConsent>
        </BrowserRouter>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<RedirectToLanguage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
}



ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
