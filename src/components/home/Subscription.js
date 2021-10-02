import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Subscription() {
  useEffect(() => {
    ScrollReveal().reveal(".subs-title-reveal", {
      delay: 500,
      distance: "50px",
      origin: "bottom",
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".subs-input-reveal", {
      delay: 700,
      distance: "50px",
      origin: "bottom",
    });
  }, []);

  return (
    <section className="section subscription">
      <form action="#" method="POST">
        <label htmlFor="mail-field" className="subs-title-reveal">
          Enter your email to sign up for SpaceX updates:
        </label>
        <div className="input-btn-container subs-input-reveal">
          <input id="mail-field" type="mail" placeholder="example@gmail.com" />
          <button type="button" className="submit-subscription-btn">
            SIGN UP
          </button>
        </div>
      </form>
    </section>
  );
}
