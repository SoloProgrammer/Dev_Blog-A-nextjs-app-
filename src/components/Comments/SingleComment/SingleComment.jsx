"use client";

import React, { useState } from "react";
import styles from "./singleComment.module.css";
import Image from "next/image";
import { getFormattedPostDate } from "@/utils/date";
import { api } from "@/utils/api";
import Loader from "@/components/Loader/Loader";
import TextareaAutosize from "react-textarea-autosize";
import { useDispatch, useSelector } from "react-redux";
import AddreplyTextarea from "../AddreplyTextarea/AddreplyTextarea";
import { useRouter } from "next/navigation";
import ReplyCount from "../ReplyCount/ReplyCount";
import Replies from "../Replies/Replies";
import { updateComments, updateComment } from "@/redux/slices/commentsSlice";
import { ReplyIcon, SaveIcon, XMarkIcon } from "@/GoogleIcons/Icons";

export const getTrimmedValue = (value) => value.replaceAll(/\s+/g, " ").trim();

const SingleComment = ({ comment }) => {
  const { comments } = useSelector((state) => state.comments);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(comment.desc);
  const [edit, setEdit] = useState(false);

  const router = useRouter();

  const handleDelete = async (id) => {
    setLoading(true);
    const query = `?id=${id}`;
    await fetch(api.deleteComment(query), {
      method: "DELETE",
    });
    let updatedComments = comments.filter((c) => c.id !== comment.id);
    dispatch(updateComments(updatedComments));
    setLoading(false);
  };

  const handleSave = async () => {
    let trimedValue = getTrimmedValue(value);
    setValue(trimedValue);
    if (trimedValue !== comment.desc) {
      // updating comments in redux store
      dispatch(updateComment({ commentId: comment.id, desc: value }));
      setEdit(false);

      // updating commnets on server
      let options = {
        method: "PUT",
        body: JSON.stringify({ desc: trimedValue }),
      };
      let query = `?id=${comment.id}`;
      await fetch(api.updateComment(query), options);
    }
    setEdit(false);
  };

  function handleCancel() {
    let trimedValue = getTrimmedValue(value);
    setValue(trimedValue);
    setEdit(false);
    setReply(false);
  }
  const [reply, setReply] = useState(false);

  const handleReply = () => {
    if (!user) return router.push("/login");
    setReply(!reply);
  };

  const [showreplies, setShowReplies] = useState(false);
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
            <ReplyIcon />
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
            <SaveIcon classes={["icon saveIcon"]} handleFunc={handleSave} />
            <XMarkIcon
              classes={["icon cancelIcon"]}
              handleFunc={handleCancel}
            />
          </div>
        </>
      )}
      {reply && (
        <AddreplyTextarea handleCancel={handleCancel} commentId={comment.id} />
      )}
      {comment.replyCount > 0 && (
        <ReplyCount
          count={comment.replyCount}
          comment={comment}
          setShowReplies={setShowReplies}
          showreplies={showreplies}
        />
      )}
      {comment.replies && showreplies && <Replies replies={comment.replies} />}
    </div>
  );
};

export default SingleComment;
