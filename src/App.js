import React, { useState } from "react";
import "./css/style.css";
import Home from "./components/home/Home";
import About from "./components/about/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [stickyNav, setStickyNav] = useState(false);

  // const [companyData, setCompanyData] = useState();
  let companyData;

  fetch("https://api.spacexdata.com/v4/company")
    // fetch vraća Promise
    // koristimo then metodu da nešto napravimo s promise
    .then(function (response) {
      // data moramo vratiti i na njemu koristiti json() metodu da dobijemo data (novi promise)
      return response.json();
    })
    // onda opet then metodu
    .then(function (data) {
      companyData = data;
      console.log(companyData);
    });

  console.log(companyData);

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
