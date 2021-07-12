import React from "react";
import Nav from "../nav/Nav";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="section contact">
      <div className="section-shader">
        <Nav />
        <h1>Contact Us</h1>
        <ContactForm />
      </div>
    </section>
  );
}
