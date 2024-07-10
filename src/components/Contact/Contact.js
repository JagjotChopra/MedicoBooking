// Contact.js
import React from 'react';
import './Contact.css'
const Contact = () => {
  return (
    <div class="container-contact">
    <h2>Contact Us</h2>
    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" required/>

        <button type="submit">Submit</button>
    </form>
</div>
  );
}

export default Contact;
