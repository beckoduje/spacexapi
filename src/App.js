import React, { useState } from "react";
import "./css/style.css";
import Home from "./components/Home";
import About from "./components/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [stickyNav, setStickyNav] = useState(false);
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About setStickyNav={setStickyNav} />
        </Route>
        <Route path="/">
          <Home stickyNav={stickyNav} setStickyNav={setStickyNav} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
