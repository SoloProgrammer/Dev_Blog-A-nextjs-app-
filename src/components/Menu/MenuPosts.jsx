import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menu.module.css";

const MenuPosts = ({ withImg }) => {
  return (
    <div className={styles.items}>
      <Link href={"/"} className={styles.item}>
        {withImg && (
          <div className={styles.imgContainer}>
            <Image src={"/p1.jpg"} priority={false}  fill alt="blog_img" />
          </div>
        )}
        <div className={styles.textContainer}>
          <div className={`${styles.category} ${styles.travel}`}>Travel</div>
          <div className={styles.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className={styles.detail}>
            <span className={styles.user}>John doe -</span>
            <span className={styles.date}>&nbsp;11.02.2023</span>
          </div>
        </div>
      </Link>
      <Link href={"/"} className={styles.item}>
        {withImg && (
          <div className={styles.imgContainer}>
            <Image src={"/p1.jpg"} priority={false}  fill alt="blog_img" />
          </div>
        )}
        <div className={styles.textContainer}>
          <div className={`${styles.category} ${styles.culture}`}>Culture</div>
          <div className={styles.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className={styles.detail}>
            <span className={styles.user}>John doe -</span>
            <span className={styles.date}>&nbsp;11.02.2023</span>
          </div>
        </div>
      </Link>
      <Link href={"/"} className={styles.item}>
        {withImg && (
          <div className={styles.imgContainer}>
            <Image src={"/p1.jpg"} priority={false}  fill alt="blog_img" />
          </div>
        )}
        <div className={styles.textContainer}>
          <div className={`${styles.category} ${styles.coding}`}>Coding</div>
          <div className={styles.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className={styles.detail}>
            <span className={styles.user}>John doe -</span>
            <span className={styles.date}>&nbsp;11.02.2023</span>
          </div>
        </div>
      </Link>
      <Link href={"/"} className={styles.item}>
        {withImg && (
          <div className={styles.imgContainer}>
            <Image src={"/p1.jpg"} priority={false}  fill alt="blog_img" />
          </div>
        )}
        <div className={styles.textContainer}>
          <div className={`${styles.category} ${styles.food}`}>Food</div>
          <div className={styles.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className={styles.detail}>
            <span className={styles.user}>John doe -</span>
            <span className={styles.date}>&nbsp;11.02.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
