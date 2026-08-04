import styles from "./Education.module.css";

const EducationData = [
  {
    year: "2025 - Present",
    title: "BS Computer Science",
    company: "Government Graduate College",
    description:
      "Learning Programming, Data Structures, Web Development, Database Management System and Object-Oriented Programming.",
  },
  {
    year: "2025",
    title: "Frontend Development",
    company: "Self Learning",
    description:
      "Built responsive websites using HTML, CSS, JavaScript and React. Practiced modern UI design and reusable components.",
  },
  {
    year: "2024",
    title: "Intermediate (ICS)",
    company: "Aspire Group of Colleges",
    description:
      "Completed Intermediate in Computer Science with a strong foundation in Mathematics, Computer Science and Programming.",
  },
];

function Education() {
  return (
    <section className={styles.Education} id="education">
      <h2 className={styles.title}>Experience & Education</h2>

      <p className={styles.subtitle}>
        My education journey and development Education.
      </p>

      <div className={styles.timeline}>
        {EducationData.map((item, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.circle}></div>

            <div className={styles.content}>
              <span className={styles.year}>{item.year}</span>

              <h3>{item.title}</h3>

              <h4>{item.company}</h4>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;