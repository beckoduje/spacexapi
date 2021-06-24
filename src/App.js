import React, { useState, useEffect } from "react";
import "./css/style.css";
import Home from "./components/home/Home";
import About from "./components/about/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const DataContext = React.createContext();

function App() {
  const api = process.env.REACT_APP_API;

  const [stickyNav, setStickyNav] = useState(false);
  const [companyInfo, setCompanyInfo] = useState();

  useEffect(() => {
    fetch(`${api}/company`)
      // fetch vraća Promise
      // koristimo then metodu da nešto napravimo s promise
      .then(function (response) {
        // data moramo vratiti i na njemu koristiti json() metodu da dobijemo data (novi promise)
        return response.json();
      })
      // onda opet then metodu
      .then(function (data) {
        setCompanyInfo(data);
      });
  }, []);

  console.log(companyInfo);

  return (
    <DataContext.Provider value={companyInfo}>
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home stickyNav={stickyNav} setStickyNav={setStickyNav} />
          </Route>
        </Switch>
      </Router>
    </DataContext.Provider>
  );
}

export default App;
