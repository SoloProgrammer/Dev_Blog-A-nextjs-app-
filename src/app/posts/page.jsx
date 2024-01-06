import BlogList from "@/components/BlogList/BlogList";
import Menu from "@/components/Menu/Menu";
import React, { Suspense } from "react";
import styles from "./categoryPage.module.css";
import Loading from "./loading";

const CategoryPage = ({ searchParams }) => {
  const category = searchParams.category;
  const page = searchParams.page || 1;
  return (
    <Suspense fallback={<Loading category={category} />}>
      <div className={`${styles.container}`}>
        <h1
          className={`${styles.title} ${styles.category} ${styles[category]}`}
        >
          Blog/{category}
        </h1>
        <div className={styles.content}>
          <BlogList
            key={`${category}BlogList`}
            page={page}
            category={category}
            showBtn={false}
          />
          <Menu />
        </div>
      </div>
    </Suspense>
  );
};

export default CategoryPage;
