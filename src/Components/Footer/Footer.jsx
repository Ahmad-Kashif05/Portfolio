import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>Ahmad Kashif</h2>
          <p>Frontend Developer • React Enthusiast</p>
        </div>

        <nav className={styles.links} aria-label="Footer">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#service">Services</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={styles.right}>
          <div className={styles.socials}>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Ahmad Kashif on GitHub"
            >
              <FaGithub aria-hidden="true" />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Ahmad Kashif on LinkedIn"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
          </div>

          <a href="#home" className={styles.top} aria-label="Back to top">
            <FaArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} Ahmad Kashif. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
