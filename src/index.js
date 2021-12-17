import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import 'antd/dist/antd.css';
import './style.css';
import App from './App';
import './i18n/i18n-config';
import {Provider} from "react-redux";
import store from "./redux/createStore";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
