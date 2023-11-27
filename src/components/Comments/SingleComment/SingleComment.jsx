"use client";
import React, { useRef, useState } from "react";
import styles from "./singleComment.module.css";
import Image from "next/image";
import { getFormattedPostDate } from "@/utils/date";
import { api } from "@/utils/api";
import Loader from "@/components/Loader/Loader";
import TextareaAutosize from "react-textarea-autosize";

const SingleComment = ({ comment, data, mutate }) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(comment.desc);
  const [edit, setEdit] = useState(false);

  const handleDelete = async (id) => {
    setLoading(true);
    const query = `?id=${id}`;
    await fetch(api.deleteComment(query), {
      method: "DELETE",
    });
    let updatedComments = data.comments.filter((c) => c.id !== comment.id);
    mutate({ ...data, comments: updatedComments });
    setLoading(false);
  };

  const handleSave = () => {
    let trimedValue = value.replaceAll(/\s+/g, " ").trim();
    setValue(trimedValue);
    if (trimedValue !== comment.desc) {
      let updatedComments = data.comments.map((c) => {
        if (c.id === comment.id) {
          c.desc = trimedValue;
        }
        return c;
      });
      mutate({ ...data, comments: updatedComments });
    }
    setEdit(false);
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
          {loading ? (
            <Loader size="mini" />
          ) : (
            <span
              onClick={() => handleDelete(comment.id)}
              className="material-symbols-outlined"
            >
              delete
            </span>
          )}
          <span
            onClick={() => setEdit(true)}
            className="material-symbols-outlined"
          >
            edit_square
          </span>
        </div>
      </div>
      {!edit && <p className={styles.commentText}>{comment.desc}</p>}
      {edit && (
        <>
          <TextareaAutosize
            onFocus={(e) =>
              e.target.setSelectionRange(
                comment.desc.length,
                comment.desc.length
              )
            }
            autoFocus={edit}
            maxRows={5}
            className={styles.editCommentArea}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className={styles.editActions}>
            <span
              onClick={handleSave}
              className="material-symbols-outlined icon saveIcon"
            >
              done
            </span>{" "}
            <span
              onClick={() => setEdit(false)}
              className="material-symbols-outlined icon cancelIcon"
            >
              close
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleComment;
