"use client";
import React, { useState } from "react";
import styles from "./replyCount.module.css";
import Loader from "@/components/Loader/Loader";
import { api } from "@/utils/api";
import { addReplies } from "@/redux/slices/commentsSlice";
import { useDispatch } from "react-redux";

const ReplyCount = ({ count, comment, setShowReplies, showreplies }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const fetchReplies = async () => {
    // toggling replies-container if replies is already fetched from the server
    if (comment.replies) return setShowReplies(!showreplies);

    setLoading(true);
    let res = await fetch(api.getReplies(comment.id));
    if (res.ok) {
      let data = await res.json();
      dispatch(addReplies({ replies: data.replies, commentId: comment.id }));
    }
    setLoading(false);
    setShowReplies(true);
  };
  return (
    <div className={styles.replyCount} onClick={fetchReplies}>
      {showreplies && "Hide "}
      {count}{" "}
      <span style={{ marginRight: "5px" }}>
        {count > 1 ? " Replies" : " Reply"}
      </span>
      {loading && <Loader size="tooMini" />}
    </div>
  );
};

export default ReplyCount;
