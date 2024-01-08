"use client";
import { Tooltip as ReactTooltip } from "react-tooltip";

import React from "react";
import styles from "./extraActions.module.css";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";
import { api } from "@/utils/api";

const ExtraActions = ({ postAuthor, commentsCount }) => {
  const { user } = useSelector((state) => state.auth);
  const handleSubscribe = async () => {
    const query = `?subId=${user.id}&authorId=${postAuthor.id}`;
    try {
      const res = await fetch(api.subscribeAuthor(query), {
        method: "PUT",
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div className={styles.extraActionsContainer}>
      <div
        onClick={handleSubscribe}
        className={styles.subBtn}
        data-tooltip-id="subscribe-btn"
      >
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
      <ReactTooltip
        className="react-tooltip"
        style={{
          fontSize: ".7rem",
          borderRadius: "2rem",
        }}
        id="subscribe-btn"
        content="Subscribe to Solo Playz newsletter!"
      />
    </div>
  );
};

export default ExtraActions;
