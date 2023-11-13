import React from "react";
import styles from "./comments.module.css";
import SingleComment from "./SingleComment/SingleComment";

const Comments = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span>Comments</span>
        <span className="material-symbols-outlined">comment</span>
      </h1>
      <div className={styles.input}>
        <textarea rows={3} type="text" name="" id="" placeholder="What's your thought"/>
      </div>
      <div className={styles.commentsList}>
        <SingleComment/>
        <SingleComment/>
        <SingleComment/>
        <SingleComment/>
      </div>
      <span className={styles.viewMore}>View more comments..</span>
    </div>
  );
};

export default Comments;
