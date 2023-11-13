import React from "react";
import styles from "./pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <div className={`${styles.prevBtn} ${styles.btn}`}>
        <span style={{fontSize:'.9rem'}} className="material-symbols-outlined ">arrow_back_ios</span>
        Prev
      </div>
      <div className={`${styles.nextBtn} ${styles.btn}`}>
        Next
        <span style={{fontSize:'.9rem'}} className="material-symbols-outlined ">arrow_forward_ios</span>
      </div>
    </div>
  );
};

export default Pagination;
