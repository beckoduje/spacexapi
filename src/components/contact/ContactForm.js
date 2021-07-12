import React from "react";

export default function ContactForm() {
  return (
    <form action="#" method="POST" className="form-container">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required="required" placeholder="Name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required="required"
          placeholder="Email"
        />
      </div>
      <div className="form-group textarea">
        <label htmlFor="message">Message</label>
        <textarea id="message" required="required" placeholder="Message" />
      </div>
      <button type="submit" className="submit-btn">
        Send message
      </button>
    </form>
  );
}
