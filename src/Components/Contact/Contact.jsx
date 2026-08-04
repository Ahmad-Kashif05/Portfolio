import styles from "./Contact.module.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
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

        <form className={styles.form}>
          <label className="srOnly" htmlFor="contact-name">Your Name</label>
          <input id="contact-name" name="name" type="text" placeholder="Your Name" autoComplete="name" required />

          <label className="srOnly" htmlFor="contact-email">Your Email</label>
          <input id="contact-email" name="email" type="email" placeholder="Your Email" autoComplete="email" required />

          <label className="srOnly" htmlFor="contact-subject">Subject</label>
          <input id="contact-subject" name="subject" type="text" placeholder="Subject" />

          <label className="srOnly" htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows="6" placeholder="Write your message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
