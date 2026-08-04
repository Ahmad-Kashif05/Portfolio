import React from "react";
import styles from "./Skill.module.css";

function Skills() {
  return (
    <section id="skills" className={styles.skills}>

      <h2 className={styles.title}>My Skills</h2>

      <p className={styles.subtitle}>
        Technologies I use to build modern, responsive and interactive web applications.
      </p>

      <div className={styles.container}>

        <div className={styles.card}>
          <h3>HTML5</h3>
          <p>Semantic and accessible web structure.</p>
        </div>

        <div className={styles.card}>
          <h3>CSS3</h3>
          <p>Responsive layouts, Flexbox, Grid & Animations.</p>
        </div>

        <div className={styles.card}>
          <h3>JavaScript</h3>
          <p>Modern ES6+, DOM manipulation and APIs.</p>
        </div>

        <div className={styles.card}>
          <h3>React</h3>
          <p>Reusable components and SPA development.</p>
        </div>

        <div className={styles.card}>
          <h3>Git & GitHub</h3>
          <p>Version control and project collaboration.</p>
        </div>

        <div className={styles.card}>
          <h3>Responsive Design</h3>
          <p>Mobile-first and cross-device compatibility.</p>
        </div>

      </div>

    </section>
  );
}

export default Skills;