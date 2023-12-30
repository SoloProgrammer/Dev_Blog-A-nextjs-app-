"use client";

import React, { useEffect, useState } from "react";
import styles from "./extraActions.module.css";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";

var commentsCountGB;
const ExtraActions = ({ commentsCount }) => {
  const { comments } = useSelector((state) => state.comments);
  const [count, setCount] = useState(commentsCount);

  useEffect(() => {
    commentsCountGB = commentsCount;
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (comments.length === 0) {
        if (commentsCountGB) {
          commentsCountGB = null;
        } else {
          setCount(comments.length);
        }
      } else if (commentsCountGB === null) {
        setCount(comments.length);
      }
    }, 20);
  }, [comments.length]);

  return (
    <div className={styles.extraActionsContainer}>
      <div className={styles.subBtn}>
        <button>Subscribe&nbsp;+</button>
      </div>
      <div className={styles.shareIcon}>
        <span class="material-symbols-outlined">share</span>
        <span>
          <Link to="comments" smooth={true} duration={500}>
            <FaRegComment />{" "}
            <span className={styles.commentsCount}>
              {count ? `(${count})` : ""}
            </span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ExtraActions;
