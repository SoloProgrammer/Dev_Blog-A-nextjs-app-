import BlogList from "@/components/BlogList/BlogList";
import Menu from "@/components/Menu/Menu";
import React from "react";
import styles from "./categoryPage.module.css";

const CategoryPage = ({ searchParams }) => {
  const category = searchParams.category;
  const page = searchParams.page || 1;
  return (
    <div className={`${styles.container}`}>
      <h1 className={`${styles.title} ${styles.category} ${styles[category]}`}>Blog/{category}</h1>
      <div className={styles.content}>
        <BlogList key={`${category}BlogList`} page={page} category={category}/>
        <Menu />
      </div>
    </div>
  );
};

export default CategoryPage;
