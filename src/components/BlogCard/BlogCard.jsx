import React from "react";
import styles from "./blogCard.module.css";
import Image from "next/image";
import Commonbtn from "../Commonbtn/Commonbtn";
import Link from "next/link";

const BlogCard = () => {
  const icon = <span style={{fontSize:'.9rem'}} className="material-symbols-outlined">arrow_forward</span>;
  return (
    <div className={styles.post}>
      <div className={styles.imgContainer}>
        <Image src={"/p1.jpg"} fill />
      </div>
      <div className={styles.postTextContent}>
        <div className={styles.details}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.cat}>&nbsp;CULTURE</span>
        </div>
        <h3 className={styles.postTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          deleniti?
        </h3>
        <p className={styles.postDesc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          maxime hic nam quod, ipsa nostrum modi. Enim doloribus atque dolor rem
          odio accusantium ipsa iure, amet veritatis? Quod, quis quae?
        </p>
        <Link href={"/blog/1234"}>
          <Commonbtn text={"Read more"} size="small" icon={icon} />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
