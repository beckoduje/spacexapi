import React from "react";

export default function ContactForm() {
  return (
    <form action="#" method="POST" className="form-container">
      <div className="form-group">
        <input type="text" id="name" required="required" placeholder="Name" />
        <label htmlFor="name">Name</label>
      </div>
      <div className="form-group">
        <input
          type="email"
          id="email"
          required="required"
          placeholder="Email"
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="form-group textarea">
        <textarea id="message" required="required" placeholder="Message" />
        <label htmlFor="message">Message</label>
      </div>
      <button type="submit" className="submit-btn">
        Send message
      </button>
    </form>
  );
}
