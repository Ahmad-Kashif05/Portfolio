import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>

      <h2 className={styles.title}>About Me</h2>

      <p className={styles.subtitle}>
        Get to know a little more about me and my journey as a Frontend Developer.
      </p>

      <div className={styles.content}>

        <p className={styles.description}>
          Hi, I'm <span>Ahmad Kashif</span>, a passionate Frontend Developer
          dedicated to building modern, responsive, and user-friendly web
          applications. I enjoy transforming creative ideas into engaging
          digital experiences using React and modern web technologies.
          <br /><br />
          I'm continuously learning new tools and frameworks to improve my
          skills and deliver clean, efficient, and scalable solutions. My goal
          is to create websites that not only look beautiful but also provide
          an excellent user experience.
        </p>

        <div className={styles.cards}>

          <div className={styles.card}>
            <h3><span aria-hidden="true">💻</span> Frontend</h3>
            <p>React, JavaScript, HTML, CSS</p>
          </div>

          <div className={styles.card}>
            <h3><span aria-hidden="true">🚀</span> Learning</h3>
            <p>Next.js, TypeScript & Backend Basics</p>
          </div>

          <div className={styles.card}>
            <h3><span aria-hidden="true">📂</span> Projects</h3>
            <p>Responsive Portfolio & Mini Applications</p>
          </div>

          <div className={styles.card}>
            <h3><span aria-hidden="true">🎯</span> Goal</h3>
            <p>Creating fast, clean and modern web experiences.</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;