import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import Home from './views/Home';
import ListData from './views/ListData';
import CountDown from './views/CountDown';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let mess = "Home";

  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/listAnime">
              <ListData />
            </Route>
            <Route path="/countDown">
              <CountDown />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
