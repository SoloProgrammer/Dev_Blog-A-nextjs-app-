import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import React from "react";
import styles from "./singleBlogPage.module.css";
import Comments from "@/components/Comments/Comments";

const SingleBlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.top}>
          <div className={styles.user}>
            <div className={styles.userImg}>
              <Image src={"/p1.jpg"} fill alt="post_Img" />
            </div>
            <div className={styles.userText}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}>11 April 2023</span>
            </div>
          </div>
          <span className="material-symbols-outlined">bookmark_add</span>
        </div>
        <div className={styles.imgContainer}>
          <Image src={"/p1.jpg"} fill alt="post_Img" />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. okay
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            nihil nulla ullam nostrum fuga sed eveniet, porro consequatur neque
            incidunt possimus libero? Ea similique voluptatibus sit officia
            dolores excepturi consequatur.
            <br />
            <br />
            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            voluptatibus aliquid a, vitae suscipit repellat nisi iure
            temporibus? Optio, atque?
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            error obcaecati eligendi consectetur doloremque iure, ut repudiandae
            dignissimos asperiores sunt maxime dolorum excepturi alias, aperiam
            tempora quidem quaerat quos laborum quo facere rem aliquid. Earum
            voluptatum ab officia pariatur cupiditate!
          </p>
        </div>
        <Comments/>
      </div>
      <Menu />
    </div>
  );
};

export default SingleBlogPage;
