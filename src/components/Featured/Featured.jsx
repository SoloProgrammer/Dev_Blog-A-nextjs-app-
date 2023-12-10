import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Commonbtn from "../Commonbtn/Commonbtn";
import axios from "axios";
import { api } from "@/utils/api";
import { getTrimmedPostDesc } from "../BlogCard/BlogCard";
import Link from "next/link";

const getData = async () => {
  const response = await axios.get(api.getFeaturedPost());
  if (response.statusText !== "OK") {
    throw { Error: "Failed" };
  }
  return response.data.post[0];
};

const Featured = async () => {
  const post = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Dev Shinde here!</b>
        <br />
        Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={post?.img} priority={false} fill alt="post1" />
        </div>
        <div className={styles.content}>
          <span className={styles.featuredText}>
            <span class="material-symbols-outlined">editor_choice</span>
            <i>Featured</i>
          </span>
          <h1 className={styles.postTitle}>{post?.title}</h1>
          <p
            className={styles.postDesc}
            dangerouslySetInnerHTML={{ __html: getTrimmedPostDesc(post?.desc) }}
          />
          <Link href={`/posts/${post.slug}`}>
            <Commonbtn text={"Read more"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
