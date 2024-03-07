import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.content}>
        <h1>Founded in 2017, Bluetick Consultants</h1>
        <p>
          is a technology-driven firm that has made a significant impact in the
          Indian and US startup ecosystems.
        </p>
        <h2>Transforming Enterprises </h2>
        <p>
          with cutting-edge, scalable, privacy-focused Generative AI Solutions
        </p>
        <a
          href="https://www.bluetickconsultants.com/generative-ai.html"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          To know more about us
        </a>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={process.env.PUBLIC_URL + "/images/office.jpg"}
          alt=""
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Home;
