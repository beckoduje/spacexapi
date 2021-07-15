import React from "react";
import Nav from "../nav/Nav";
import ContactForm from "./ContactForm";

export default function Contact(props) {
  return (
    <section className="section contact">
      <div className="section-shader">
        <Nav menuState={props.menuState} setMenuState={props.setMenuState} />
        <h1>Contact Us</h1>
        <ContactForm />
      </div>
    </section>
  );
}
