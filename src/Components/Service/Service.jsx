import styles from "./Service.module.css";

import {
  FaCode,
  FaReact,
  FaLaptopCode,
  FaPalette,
  FaRocket,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description:
      "Modern, responsive and user-friendly websites built using HTML, CSS, JavaScript and React.",
  },
  {
    icon: <FaReact />,
    title: "React Applications",
    description:
      "Building reusable React components with clean structure and scalable code.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Responsive Design",
    description:
      "Websites that look perfect on desktop, tablet and mobile devices.",
  },
  {
    icon: <FaPalette />,
    title: "UI Implementation",
    description:
      "Converting modern UI designs into clean, responsive and pixel-perfect websites.",
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    description:
      "Optimizing website speed, performance and user experience for better results.",
  },
  {
    icon: <FaTools />,
    title: "Website Maintenance",
    description:
      "Updating existing websites, fixing bugs and improving overall functionality.",
  },
];

function Services() {
  return (
    <section className={styles.services} id="service" data-theme="dark">
      <div className={styles.heading}>
        <span>What I Offer</span>

        <h2>My Services</h2>

        <p>
          I build modern, responsive and high-performance web experiences with
          clean code and attention to detail.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon} aria-hidden="true">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;