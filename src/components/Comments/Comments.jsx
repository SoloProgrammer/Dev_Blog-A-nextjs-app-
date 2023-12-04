"use client";

import React, { useEffect, useState } from "react";
import styles from "./comments.module.css";
import SingleComment, { getTrimmedValue } from "./SingleComment/SingleComment";
import Commonbtn from "../Commonbtn/Commonbtn";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { api } from "@/utils/api";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { updateComments } from "@/redux/slices/commentsSlice";

var isInterSecting = false;

const fetcher = async (url) => {
  try {
    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const { comments } = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const [shouldCommentsLoad, setShouldCommentsLoad] = useState(false);
  const query = `?postSlug=${postSlug}`;
  const { data, mutate, isLoading } = useSWR(
    !shouldCommentsLoad || comments.length ? null : api.getPostComments(query),
    fetcher
  );
  useEffect(() => {
    data?.comments && dispatch(updateComments(data?.comments));
  }, [data]);

  const postCommentIcon = (
    <span style={{ fontSize: ".85rem" }} className="material-symbols-outlined">
      send
    </span>
  );

  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!desc) return;
    setLoading(true);
    setDesc("");
    const options = {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    };
    await fetch(api.createNewComment(), options);
    mutate();
    setLoading(false);
  };

  // Intersection observer effect/logic for activating comments fetching...
  useEffect(() => {
    function callback(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          setShouldCommentsLoad(true);
        }
      });
    }
    let options = { threshold: 0.9 };
    let observer = new IntersectionObserver(callback, options);
    let commentsList = document.querySelector(`.${styles.commentsList}`);
    commentsList && observer.observe(commentsList);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span>Comments</span>
        <span className="material-symbols-outlined">comment</span>
      </h1>
      <div className={styles.input}>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          rows={3}
          type="text"
          name=""
          id=""
          disabled={status === "unauthenticated"}
          placeholder={
            status === "unauthenticated"
              ? `Login to leave your thought!`
              : `What's your thought`
          }
        />
        {status !== "unauthenticated" && (
          <Commonbtn
            disabled={loading || !getTrimmedValue(desc)}
            handleFunc={handleSubmit}
            text={"Post"}
            size="small"
            icon={postCommentIcon}
          />
        )}
      </div>
      {!isLoading && !comments?.length && (
        <p style={{ marginTop: "2rem" }}>
          No comments yet! be the first one to comment ☝️!
        </p>
      )}
      {isLoading && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginTop: "1rem",
          }}
        >
          <Loader size="small" />
          Loading comments.....
        </div>
      )}
      <div className={styles.commentsList}>
        {comments?.length > 0 &&
          comments?.map((comment) => {
            return (
              <SingleComment
                comments={comments}
                comment={comment}
                key={comment.id}
              />
            );
          })}
      </div>
      {comments?.length > 4 && (
        <span className={styles.viewMore}>View more comments..</span>
      )}
    </div>
  );
};

export default Comments;
