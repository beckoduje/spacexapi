import "./css/style.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MissionSection from "./components/MissionSection";

function App() {
  return (
    <>
      <Nav className="sticky-nav" />
      <MissionSection />
    </>
  );
}

export default App;
