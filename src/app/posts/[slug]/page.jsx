import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import React from "react";
import styles from "./singleBlogPage.module.css";
import Comments from "@/components/Comments/Comments";
import { api } from "@/utils/api";
import { getFormattedPostDate } from "@/utils/date";

const getSinglePost = async (slug) => {
  const res = await fetch(api.getSinglePost(slug), { cache: "no-cache" });
  if (!res.ok) {
    throw new Error("Some error occured");
  }
  return res.json();
};

const SingleBlogPage = async ({ params }) => {
  const { slug } = params;
  const { post } = await getSinglePost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.top}>
          <div className={styles.user}>
            <div className={styles.userImg}>
              <Image
                src={post?.user?.image}
                priority={false}
                fill
                alt="post_Img"
              />
            </div>
            <div className={styles.userText}>
              <span className={styles.userName}>{post?.user?.name}</span>
              <span className={styles.date}>
                {getFormattedPostDate(post.createdAt)}
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined">bookmark_add</span>
        </div>
        <div className={styles.imgContainer}>
          <Image src={post.img} priority={false} fill alt="post_Img" />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: post.desc }}
          />
        </div>
        <Comments postSlug={post.slug} />
      </div>
      <div className={styles.Menu}>
        <Menu />
      </div>
    </div>
  );
};

export default SingleBlogPage;
