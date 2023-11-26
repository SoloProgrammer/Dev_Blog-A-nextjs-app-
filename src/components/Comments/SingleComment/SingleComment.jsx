"use client";
import React from "react";
import styles from "./singleComment.module.css";
import Image from "next/image";
import { getFormattedPostDate } from "@/utils/date";
import { api } from "@/utils/api";

const SingleComment = ({ comment, mutate }) => {

  const handleDelete = async (id) => {
    const query = `?id=${id}`;
    await fetch(api.deleteComment(query), {
      method: "DELETE",
    });
    mutate();
  };

  return (
    <div className={styles.container}>
      <div className={styles.seperator}>
        <div className={styles.userInfo}>
          <div className={styles.userAvatar}>
            <Image
              src={comment?.user?.image}
              priority={false}
              fill
              alt="avatar"
            />
          </div>
          <div className={styles.userText}>
            <span className={styles.userName}>{comment?.user?.name}</span>
            <span className={styles.date}>
              {getFormattedPostDate(comment?.createdAt, true)}
            </span>
          </div>
        </div>
        <div className={styles.actions}>
          <span
            onClick={() => handleDelete(comment.id)}
            className="material-symbols-outlined"
          >
            delete
          </span>
          <span className="material-symbols-outlined">edit_square</span>
        </div>
      </div>
      <p className={styles.commentText}>{comment.desc}</p>
    </div>
  );
};

export default SingleComment;
