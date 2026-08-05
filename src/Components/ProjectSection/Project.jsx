import React from "react";
import styles from "./Project.module.css";
import TTTI from "../../assets/TTT.webp"
import SPSI from "../../assets/SPS.webp"
import ACI from "../../assets/AC.webp"
import CBI from "../../assets/CB.webp"
import CCI from "../../assets/CC.webp"
import GLSI from "../../assets/GLS.webp"
import ICTI from "../../assets/ICT.webp"

const PROJECTS = [
  {
    title: "Tic Tac Toe",
    image : TTTI,
    description:
      "A responsive Tic Tac Toe game built with React featuring interactive gameplay and clean UI.",
    stack: "HTML • CSS • JavaScript",
  },
  {
    title: "Stone Paper Scissors",
    image: SPSI,
    description:
      "A fun game built using JavaScript with score tracking and responsive design.",
    stack: "HTML • CSS • JavaScript",
  },
  {
    title: "Analog Clock",
    image: ACI,
    description:
      "A real-time analog clock that updates every second using JavaScript.",
    stack: "HTML • CSS • JavaScript",
  },
  {
    title: "Brand Template",
    image: CBI,
    description:
      "A modern and fully responsive landing page template designed with clean UI principles.",
    stack: "HTML • CSS",
  },
  {
    title: "Currency Converter",
    image: CCI,
    description:
      "Converts currencies in real-time using an API with a clean and responsive interface.",
    stack: "JavaScript • API • CSS • HTML",
  },
  // GYM LIFE STYLE Project
  // {
  //   title: "GYM Life Style",
  //   image: GLSI,
  //   description: 
  //     "A responsive fitness website designed to showcase gym services, workout programs, trainers, and membership plans with a modern ",
  //   stack: "HTML • CSS • JavaScript"
  // }
  {
    title: "Crafto – IT Business Agency Website",
    image: ICTI,
    description:
      "Responsive IT business agency website with a modern and clean UI.",
    stack: "HTML5 • CSS3 • Responsive Design"
  }
];

function Projects() {
  return (
    <section id="project" className={styles.projects}>
      <h2 className={styles.title}>My Projects</h2>

      <p className={styles.subtitle}>
        Here are some of the projects I've built while learning and improving
        my frontend development skills.
      </p>

      <div className={styles.container}>
        {PROJECTS.map((project) => (
          <article className={styles.card} key={project.title}>
            <img
               src={project.image}
               alt={project.title}
               className={styles.image}
            />
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span>{project.stack}</span>

            <div className={styles.buttons}>
              <button type="button" aria-label={`View live demo of ${project.title}`}>
                Live Demo
              </button>
              <button type="button" aria-label={`View ${project.title} source code on GitHub`}>
                GitHub
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
