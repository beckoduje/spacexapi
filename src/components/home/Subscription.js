import React from "react";

export default function Subscription() {
  return (
    <section className="section subscription">
      <form action="#" method="POST">
        <label htmlFor="mail-field">
          Enter your email to sign up for SpaceX updates:
        </label>
        <div className="input-btn-container">
          <input id="mail-field" type="mail" placeholder="example@gmail.com" />
          <button type="submit" className="submit-subscription-btn">
            SIGN UP
          </button>
        </div>
      </form>
    </section>
  );
}
