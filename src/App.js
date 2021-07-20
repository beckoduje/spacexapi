import React, { useState, useEffect } from "react";
import "./css/style.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Rockets from "./components/rockets/Rockets";
import Dragons from "./components/dragons/Dragons";
import Launches from "./components/launches/Launches";
import Crew from "./components/crew/Crew";
import Roadster from "./components/roadster/Roadster";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [stickyNav, setStickyNav] = useState(false);
  const [menuState, setMenuState] = useState(false);

  return (
    <Router>
      <Menu menuState={menuState} setMenuState={setMenuState} />
      <Switch>
        <Route path="/contact">
          <Contact
            menuState={menuState}
            setMenuState={setMenuState}
            stickyNav={stickyNav}
            setStickyNav={setStickyNav}
          />
        </Route>
        <Route path="/roadster">
          <Roadster
            menuState={menuState}
            setMenuState={setMenuState}
            stickyNav={stickyNav}
            setStickyNav={setStickyNav}
          />
        </Route>
        <Route path="/crew">
          <Crew
            menuState={menuState}
            setMenuState={setMenuState}
            stickyNav={stickyNav}
            setStickyNav={setStickyNav}
          />
        </Route>
        <Route path="/launches">
          <Launches
            menuState={menuState}
            setMenuState={setMenuState}
            stickyNav={stickyNav}
            setStickyNav={setStickyNav}
          />
        </Route>
        <Route path="/dragons">
          <Dragons
            menuState={menuState}
            setMenuState={setMenuState}
            stickyNav={stickyNav}
            setStickyNav={setStickyNav}
          />
        </Route>
        <Route path="/rockets">
          <Rockets
            menuState={menuState}
            setMenuState={setMenuState}
            stickyNav={stickyNav}
            setStickyNav={setStickyNav}
          />
        </Route>
        <Route path="/about">
          <About
            menuState={menuState}
            setMenuState={setMenuState}
            stickyNav={stickyNav}
            setStickyNav={setStickyNav}
          />
        </Route>
        <Route path="/">
          <Home
            menuState={menuState}
            setMenuState={setMenuState}
            stickyNav={stickyNav}
            setStickyNav={setStickyNav}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
