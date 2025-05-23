// @ts-nocheck
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import URLS from './utils/urls';
import Home from './components/Home'
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import HowWeWork from './components/HowWeWork';
import OurCouples from './components/OurCouples';
import Offer from './components/Offer';
import Blog from './components/Blog';
import PostPage from './components/PostPage';
import LandingPage from './components/LandingPage';
import smoothscroll from 'smoothscroll-polyfill';
import RealizationPage from './components/OurCouples/RealizationPage';

smoothscroll.polyfill();

function App () {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path={URLS.HOME} component={Home} />
                <Route exact path={URLS.ABOUT} component={AboutUs} />
                <Route exact path={URLS.WORK} component={HowWeWork} />
                <Route exact path={URLS.COUPLES} component={OurCouples} />
                <Route exact path={URLS.COUPLES_EVENT} component={RealizationPage} />
                <Route exact path={URLS.POST} component={PostPage} />
                <Route exact path={URLS.CATEGORY} component={Blog} />
                <Route exact path={URLS.CATEGORY_PAGE} component={Blog} />
                <Route exact path={URLS.BLOG} component={Blog} />
                <Route exact path={URLS.BLOG_PAGE} component={Blog} />
                <Route exact path={URLS.OFFER} component={Offer} />
                <Route exact path={URLS.CONTACT} component={Home} />
                <Route exact path={URLS.LANDING} component={LandingPage} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
