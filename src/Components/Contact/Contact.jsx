import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";


import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
    const form = useRef();
    const [status, setStatus] = useState("");
    const sendEmail = (e) => {
  e.preventDefault();

  const formData = {
    from_name: form.current.from_name.value,
    from_email: form.current.from_email.value,
    message: form.current.message.value,
  };

  // Send message to you
  emailjs
    .sendForm(
      "service_pm5r45s",
      "template_9ywis1s",
      form.current,
      {
        publicKey: "M1NpeKttLOyPZ7l1y",
      }
    )
    .then(() => {
      
      // Auto reply to visitor
      emailjs.send(
        "service_pm5r45s",
        "template_h3bzu3q",
        formData,
        {
          publicKey: "M1NpeKttLOyPZ7l1y",
        }
      );

      setStatus("Message sent successfully!");
      form.current.reset();

    })
    .catch(() => {
      setStatus("Something went wrong. Please try again.");
    });

};


  return (
    <section className={styles.contact} id="contact" data-theme="dark">
      <div className={styles.heading}>
        <span>Let's Connect</span>
        <h2>Contact Me</h2>
        <p>
          Have a project in mind or looking for a frontend developer? Feel free
          to get in touch. I'm always open to discussing new opportunities.
        </p>
      </div>

      <div className={styles.container}>
        {/* Left */}

        <div className={styles.info}>
          <a className={styles.card} href="mailto:imahmadkashif@gmail.com">
            <FaEnvelope className={styles.icon} aria-hidden="true" />

            <div>
              <h3>Email</h3>
              <p>imahmadkashif@gmail.com</p>
            </div>
          </a>

          <a className={styles.card} href="tel:+923168468546">
            <FaPhoneAlt className={styles.icon} aria-hidden="true" />

            <div>
              <h3>Phone</h3>
              <p>+92 316 8468546</p>
            </div>
          </a>

          <div className={styles.card}>
            <FaMapMarkerAlt className={styles.icon} aria-hidden="true" />

            <div>
              <h3>Location</h3>
              <p>Jhang, Punjab, Pakistan</p>
            </div>
          </div>

          <div className={styles.socials}>
            <a href="#" aria-label="Ahmad Kashif on GitHub">
              <FaGithub aria-hidden="true" />
            </a>

            <a href="#" aria-label="Ahmad Kashif on LinkedIn">
              <FaLinkedin aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right */}

       <form ref={form} className={styles.form} onSubmit={sendEmail}>
          <label className="srOnly" htmlFor="contact-name">Your Name</label>
          <input id="contact-name" name="from_name" type="text" placeholder="Your Name" autoComplete="name" required />

          <label className="srOnly" htmlFor="contact-email">Your Email</label>
          <input id="contact-email" name="from_email" type="email" placeholder="Your Email" autoComplete="email" required />

          <label className="srOnly" htmlFor="contact-subject">Subject</label>
          <input id="contact-subject" name="subject" type="text" placeholder="Subject" />

          <label className="srOnly" htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows="6" placeholder="Write your message" required></textarea>

          <button type="submit">Send Message</button>
          {status && <p className={styles.status}>{status}</p>}

        </form>
      </div>
    </section>
  );
}

export default Contact;
