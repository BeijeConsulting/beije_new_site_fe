import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './style.css';
import App from './App';
import './i18n/i18n-config';
import { Provider } from "react-redux";
import store from "./redux/createStore";

function RedirectToLanguage() {
  const { pathname, search } = useLocation();
  const { i18n } = useTranslation();
  if (
    !["/it/", "/en/"].some((l) =>
      pathname.includes(l)
    )
  ) {
    console.log(i18n.resolvedLanguage)
    window.location.href = "/" + i18n.resolvedLanguage + pathname + (search ? search : "");
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
