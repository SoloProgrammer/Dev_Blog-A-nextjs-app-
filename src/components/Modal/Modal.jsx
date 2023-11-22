"use client";

import React, { useEffect, useState } from "react";
import styles from "./modal.module.css";

const Modal = ({ children, setShowImgDropZone }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    !show &&
      setTimeout(() => {
        setShow(true);
      }, 50);
  }, []);
  return (
    <div
      onClick={() => {
        setShow(false)
        setShowImgDropZone(false)
      }}
      className={`${styles.container} ${show ? styles.show : ""}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.inner} ${show ? styles.show : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
