import React from "react";
import styles from "./menuCategories.module.css";
import Link from "next/link";

const MenuCategories = () => {
  return (
    <div className={styles.categories}>
      <Link href={"/blog"} className={`${styles.category} ${styles.style}`}>
        <div className={styles.catText}>News</div>
      </Link>
      <Link href={"/blog"} className={`${styles.category} ${styles.fashion}`}>
        <div className={styles.catText}>Fashion</div>
      </Link>
      <Link href={"/blog"} className={`${styles.category} ${styles.food}`}>
        <div className={styles.catText}>Food</div>
      </Link>
      <Link href={"/blog"} className={`${styles.category} ${styles.culture}`}>
        <div className={styles.catText}>Culture</div>
      </Link>
      <Link href={"/blog"} className={`${styles.category} ${styles.travel}`}>
        <div className={styles.catText}>Travel</div>
      </Link>
      <Link href={"/blog"} className={`${styles.category} ${styles.coding}`}>
        <div className={styles.catText}>Coding</div>
      </Link>
    </div>
  );
};

export default MenuCategories;
