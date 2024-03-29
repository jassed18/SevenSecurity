import React from "react";
import styles from "./Services.module.css";

const Servicios = () => {
  return (
    <div name="Servicios" className={styles.services}>
      <p>We solve your company's problems by creating amazing web pages.</p>
      <img
        className={styles.webImage}
        src={require("../assets/webImage.jpg")}
      ></img>
    </div>
  );
};

export default Servicios;
