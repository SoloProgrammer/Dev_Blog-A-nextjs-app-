import React from "react";
import styles from "./blogList.module.css";
import Pagination from "../Pagination/Pagination";
import BlogCard from "../BlogCard/BlogCard";

const getData = async () => {
  console.log("get data");
  const res = await fetch(api.posts(), { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

const BlogList = async () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <Pagination />
    </div>
  );
};

export default BlogList;
