import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card
