import React from 'react';
import './contact.css';


function Contact() {
  return (
    <section id="contact1">
    <div className="contact">
       <h1>Contact me with your message</h1>
       <h3>Let's be in touch</h3>
      <div className="container">
  
       
        <form className="contact__form">
          <label htmlFor="name"><h3>Name:</h3></label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email"><h3>Email:</h3></label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message"><h3>Message:</h3></label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
    </section>
  );
}

export default Contact;