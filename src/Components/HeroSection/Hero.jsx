import React from "react";
import styles from "./Hero.module.css";
import heroPic from "./heroPic.webp";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.kicker}>Frontend Developer</p>

        <div className={styles.heading}>
          <h1>
            Hello, I'm Ahmad Kashif<span aria-hidden="true">...</span>
          </h1>
        </div>

        <div className={styles.text}>
          <p>
            I'm a Frontend Developer passionate about creating modern,
            responsive, and interactive websites using React. I transform
            creative ideas into clean and engaging digital experiences.
          </p>
        </div>

        <div className={styles.actions}>
          <a href="#project" className={styles.primaryBtn}>
            View My Work
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Get In Touch
          </a>
        </div>
      </div>

      <div className={styles.image}>
        <img src={heroPic} alt="Portrait of Ahmad Kashif" width="450" height="450" />
      </div>
    </section>
  );
}

export default Hero;
