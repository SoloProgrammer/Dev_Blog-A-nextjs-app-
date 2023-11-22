import React from "react";
import styles from "./commonbtn.module.css";

const Commonbtn = ({ text, size = "medium",isAnimate = true, icon }) => {
  const sizes = {
    small: ".85rem",
    medium: "1.1rem",
    large: "1.5rem",
  };
  return (
    <button style={{ fontSize: sizes[size] }} className={`${styles.btn} ${isAnimate && styles.animateBtn}`}>
      {text}
      {icon}
    </button>
  );
};

export default Commonbtn;
