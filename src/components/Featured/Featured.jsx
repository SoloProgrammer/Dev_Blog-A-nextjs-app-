import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Commonbtn from "../Commonbtn/Commonbtn";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Dev Shinde here!</b>
        <br />
        Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={"/p1.jpg"} priority={false}  fill alt="post1" />
        </div>
        <div className={styles.content}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
            aperiam! Est, excepturi? Nisi dolor eveniet labore, maiores ipsa
            pariatur suscipit aliquid vitae aperiam quidem veniam exercitationem
            unde ea sequi autem!
          </p>
          <Commonbtn text={"Read more"} />
        </div>
      </div>
    </div>
  );
};

export default Featured;
