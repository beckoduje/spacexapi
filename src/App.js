import React, { useState, useEffect } from "react";
import "./css/style.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Rockets from "./components/rockets/Rockets";
import Dragons from "./components/dragons/Dragons";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [stickyNav, setStickyNav] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path="/dragons">
          <Dragons />
        </Route>
        <Route path="/rockets">
          <Rockets />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home stickyNav={stickyNav} setStickyNav={setStickyNav} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
