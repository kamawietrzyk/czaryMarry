import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'AW-750267016'
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
