// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import TagManager from 'react-gtm-module';

TagManager.initialize({
    gtmId: 'GTM-5VLHJJS'
});

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);