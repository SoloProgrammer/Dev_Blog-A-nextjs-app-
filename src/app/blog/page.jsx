import BlogList from "@/components/BlogList/BlogList";
import Menu from "@/components/Menu/Menu";
import React from "react";
import styles from "./categoryPage.module.css";

const CategoryPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog/Culture</h1>
      <div className={styles.content}>
        <BlogList />
        <Menu />
      </div>
    </div>
  );
};

export default CategoryPage;
