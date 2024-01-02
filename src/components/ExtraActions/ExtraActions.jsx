"use client";

import React from "react";
import styles from "./extraActions.module.css";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-scroll";

const ExtraActions = ({ commentsCount }) => {
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
              {commentsCount ? `(${commentsCount})` : ""}
            </span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ExtraActions;
