import React from "react";
import styles from "./comments.module.css";
import SingleComment from "./SingleComment/SingleComment";
import Commonbtn from "../Commonbtn/Commonbtn";

const Comments = () => {
  const status = "authenticated";
  const postCommentIcon = (
    <span style={{ fontSize: ".85rem" }} className="material-symbols-outlined">
      send
    </span>
  );
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span>Comments</span>
        <span className="material-symbols-outlined">comment</span>
      </h1>
      <div className={styles.input}>
        <textarea
          rows={3}
          type="text"
          name=""
          id=""
          disabled={status === "notauthenticated"}
          placeholder={
            status === "notauthenticated"
              ? `Login to leave your thought!`
              : `What's your thought`
          }
        />
        {status !== "notauthenticated" && (
          <Commonbtn text={"Post"} size="small" icon={postCommentIcon} />
        )}
      </div>
      <div className={styles.commentsList}>
        <SingleComment />
        <SingleComment />
        <SingleComment />
        <SingleComment />
      </div>
      <span className={styles.viewMore}>View more comments..</span>
    </div>
  );
};

export default Comments;
