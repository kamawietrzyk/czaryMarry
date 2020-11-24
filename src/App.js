import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import URLS from './utils/urls';
import Home from './components/Home'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path={URLS.HOME} component={Home} />
      </Switch>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
