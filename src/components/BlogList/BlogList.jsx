import React from "react";
import styles from "./blogList.module.css";
import Pagination from "../Pagination/Pagination";
import BlogCard from "../BlogCard/BlogCard";
import { api } from "@/utils/api";
import PageProvider from "@/providers/PageProvider";

const getPosts = async (page, category) => {
  const query = `?page=${page}&category=${category}`;
  const res = await fetch(api.getPosts(query), { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

const BlogList = async ({ page, category = "", showBtn = true }) => {
  const { posts, postsCount } = await getPosts(page, category);
  const POSTS_PER_PAGE = 4;
  let maxPage = Math.ceil(postsCount / POSTS_PER_PAGE) || 1;

  let hasPrev = page > 1 && page <= maxPage;
  let hasNext = page * POSTS_PER_PAGE < postsCount;

  return (
    <PageProvider page={page} maxPage={maxPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Recent Posts</h1>
        <div className={styles.posts}>
          {posts?.map((post) => {
            return <BlogCard post={post} key={post._id} showBtn={showBtn} />;
          })}
        </div>
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
      </div>
    </PageProvider>
  );
};

export default BlogList;
