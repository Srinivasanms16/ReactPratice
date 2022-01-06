import React from 'react';
import ReactDOM from 'react-dom';
import App from './basicComponent/App';
import App1 from './functionHooks/App1';
import Hoc from "./HOC_otherFeatures/App2";
import reportWebVitals from './reportWebVitals';
import MyRouter from "./Router/App3";
import {BrowserRouter} from "react-router-dom"
import "./index.scss";
//here we are not actually importing bootstrap but we are running side-effects. 
import "../node_modules/jquery/dist/jquery.min";
import "../node_modules/@popperjs/core/dist/cjs/popper";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";




ReactDOM.render(
  <React.StrictMode>
    {/* <Hoc name="srini" age="32"></Hoc> */}
    {/* <App1></App1> */}
    <BrowserRouter> <MyRouter></MyRouter> </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
