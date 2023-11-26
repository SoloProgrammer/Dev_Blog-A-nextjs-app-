import React from "react";
import styles from "./loader.module.css";

const Loader = ({ size = "large", customSize }) => {
  let sizes = {
    small: "30px",
    medium: "40px",
    large: "48px",
  };
  return (
    <span
      style={{ width: size ? sizes[size] : customSize, height: sizes[size] }}
      className={styles.loader}
    ></span>
  );
};

export default Loader;
