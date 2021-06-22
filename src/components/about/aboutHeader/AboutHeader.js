import React from "react";
import Nav from "../../nav/Nav";
import AboutMessageOne from "./AboutMessageOne";
import AboutMessageTwo from "./AboutMessageTwo";

export default function AboutHeader() {
  return (
    <section className="section about-header">
      <div className="section-shader">
        <Nav />
        <AboutMessageOne />
        <AboutMessageTwo />
      </div>
    </section>
  );
}
