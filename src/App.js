import React from 'react';
import { Route, Switch } from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={URLS.HOME} component={Home} />
        <Route exact path={URLS.ABOUT} component={AboutUs} />
        <Route exact path={URLS.WORK} component={HowWeWork} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
