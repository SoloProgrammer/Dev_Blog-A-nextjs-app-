import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Popular Categories</h2>
      </div>
      <div className={styles.categories}>
        <Link href={"/blog"} className={`${styles.category} ${styles.style}`}>
          <div className={styles.imgContainer}>
            <Image src="/news.png" fill alt="cat_image" />
          </div>
          <div className={styles.catText}>News</div>
        </Link>
        <Link href={"/blog"} className={`${styles.category} ${styles.fashion}`}>
          <div className={styles.imgContainer}>
            <Image src="/fashion.webp" fill alt="cat_image" />
          </div>
          <div className={styles.catText}>Fashion</div>
        </Link>
        <Link href={"/blog"} className={`${styles.category} ${styles.food}`}>
          <div className={styles.imgContainer}>
            <Image src="/food.avif" fill alt="cat_image" />
          </div>
          <div className={styles.catText}>Food</div>
        </Link>
        <Link href={"/blog"} className={`${styles.category} ${styles.culture}`}>
          <div className={styles.imgContainer}>
            <Image src="/culture.jpg" fill alt="cat_image" />
          </div>
          <div className={styles.catText}>Culture</div>
        </Link>
        <Link href={"/blog"} className={`${styles.category} ${styles.travel}`}>
          <div className={styles.imgContainer}>
            <Image src="/travel.jpg" fill alt="cat_image" />
          </div>
          <div className={styles.catText}>Travel</div>
        </Link>
        <Link href={"/blog"} className={`${styles.category} ${styles.coding}`}>
          <div className={styles.imgContainer}>
            <Image src="/coding.jpg" fill alt="cat_image" />
          </div>
          <div className={styles.catText}>Coding</div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
