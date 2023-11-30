"use client";
import React, { useState } from "react";
import styles from "./singleComment.module.css";
import Image from "next/image";
import { getFormattedPostDate } from "@/utils/date";
import { api } from "@/utils/api";
import Loader from "@/components/Loader/Loader";
import TextareaAutosize from "react-textarea-autosize";
import { useSelector } from "react-redux";
import AddreplyTextarea from "../AddreplyTextarea/AddreplyTextarea";
import { useRouter } from "next/navigation";

const SingleComment = ({ comment, comments, updateComments }) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(comment.desc);
  const [edit, setEdit] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  const handleDelete = async (id) => {
    setLoading(true);
    const query = `?id=${id}`;
    await fetch(api.deleteComment(query), {
      method: "DELETE",
    });
    let updatedComments = comments.filter((c) => c.id !== comment.id);
    updateComments(updatedComments);
    setLoading(false);
  };

  const increaseReplyCount = () => {
    let updatedComments = comments.map((c) => {
      if (c.id !== comment.id) c.replyCount += 1;
      return c;
    });
    updateComments(updatedComments);
  };

  const getTrimmedValue = () => value.replaceAll(/\s+/g, " ").trim();

  const handleSave = async () => {
    let trimedValue = getTrimmedValue();
    setValue(trimedValue);
    if (trimedValue !== comment.desc) {
      let updatedComments = comments.map((c) => {
        if (c.id === comment.id) {
          c.desc = trimedValue;
        }
        return c;
      });

      setEdit(false);

      // updating commnets on server
      let options = {
        method: "PUT",
        body: JSON.stringify({ desc: trimedValue }),
      };
      let query = `?id=${comment.id}`;
      await fetch(api.updateComment(query), options);
      updateComments(updatedComments);
    }
    setEdit(false);
  };

  function handleCancel() {
    let trimedValue = getTrimmedValue();
    setValue(trimedValue);
    setEdit(false);
    setReply(false);
  }
  const [reply, setReply] = useState(false);

  const handleReply = () => {
    if (!user) return router.push("/login");
    setReply(!reply);
  };

  const fetchReplies = async () => {
    setLoading(true);
    let res = await fetch(api.getReplies(comment.id));
    if (res.ok) {
      let data = await res.json();
      console.log(data);
    }
    setLoading(false);
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
        {user && comment.user.id === user?.id ? (
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
              onClick={() => {
                setEdit(true);
                setValue(comment.desc);
              }}
              className="material-symbols-outlined"
            >
              edit_square
            </span>
          </div>
        ) : (
          <div onClick={handleReply} className={styles.actions}>
            <span className="material-symbols-outlined">reply</span>
          </div>
        )}
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
          <div className={`${styles.editActions}`}>
            <span
              onClick={handleSave}
              className="material-symbols-outlined icon saveIcon"
            >
              done
            </span>{" "}
            <span
              onClick={handleCancel}
              className="material-symbols-outlined icon cancelIcon"
            >
              close
            </span>
          </div>
        </>
      )}
      {reply && (
        <AddreplyTextarea
          handleCancel={handleCancel}
          commentId={comment.id}
          increaseReplyCount={increaseReplyCount}
        />
      )}
      {comment.replyCount > 0 && (
        <div className={styles.replyCount} onClick={fetchReplies}>
          {comment.replyCount}{" "}
          <span style={{ marginRight: "5px" }}>
            {comment.replyCount > 1 ? "Replies" : "Reply"}
          </span>
          {loading && <Loader size="tooMini" />}
        </div>
      )}
    </div>
  );
};

export default SingleComment;
