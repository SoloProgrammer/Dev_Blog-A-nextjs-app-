"use client";

import { savePost, unSavePost } from "@/redux/slices/authSlice";
import { api } from "@/utils/api";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from './saveposticon.module.css'

const SavePostIcon = ({ slug, postId }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const hanldeSavePost = async (e) => {
    if (e.target.classList.contains("fill")) {
      e.target.innerText = "bookmark_add";
      e.target.classList.remove("fill");
      dispatch(unSavePost({ postId }));
    } else {
      e.target.innerText = "bookmark_added";
      e.target.classList.add("fill");
      dispatch(savePost({ postId }));
    }
    const options = {
      method: "PUT",
    };
    await fetch(api.savePost(slug), options);
  };

  if (!user) return;

  return (
    <div>
      <span
        onClick={hanldeSavePost}
        className={`${Styles.saveIcon} material-symbols-outlined ${
          user?.savedPosts.includes(postId) ? "fill" : ""
        }`}
      >
        {user?.savedPosts.includes(postId) ? "bookmark_added" : "bookmark_add"}
      </span>
    </div>
  );
};

export default SavePostIcon;
