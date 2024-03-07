import React from "react";
import styles from "./Footer.module.css";
import { columns, icons } from "./data/FooterData";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div className={styles.column}>
          <h3>
            {" "}
            <ImageHandler image={"/images/logo.png"} />
          </h3>
          <h4>Bluetick Consultants LLP</h4>
          <p>contact@bluetickconsultants.com</p>
        </div>
        {columns.map((column, index) => (
          <div className={styles.column} key={index}>
            <h3>{column.title}</h3>
            <p>{column.content}</p>
          </div>
        ))}
      </footer>{" "}
      <div className={styles.socialLink}>
        <h2>
          <ImageHandler className image={"/images/glassdoor-rating.webp"} />
          <ImageHandler image={"/images/bluetick-iso.webp"} />
        </h2>
        <h2 className={styles.socialIcons}>
          {icons.map((icon, index) => (
            <a href="#home" key={index} className={styles.socialIcon}>
              {React.createElement(icon.icon, { className: styles.icon })}
            </a>
          ))}
        </h2>
        <p> 2024 © All rights reserved by Abhinas Dash</p>
      </div>
    </div>
  );
};

const ImageHandler = ({ image }) => {
  return (
    <img src={process.env.PUBLIC_URL + image} alt="" className={styles.image} />
  );
};
export default Footer;
