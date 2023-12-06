"use client";

import React, { useEffect, useState } from "react";
import styles from "./writePage.module.css";
import "react-quill/dist/quill.bubble.css";
import { ThemeStates } from "@/context/ThemeContext";
import {
  ImageIcon,
  UploadIcon,
  VideoIcon,
  XMarkIcon,
} from "@/GoogleIcons/Icons";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Modal from "@/components/Modal/Modal";
import ImageDropZone from "@/components/ImageDropZone/ImageDropZone";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader/Loader";
import dynamic from "next/dynamic";
import { api } from "@/utils/api";
import { updateCategories } from "@/redux/slices/cayegoriesSlice";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Writepage = () => {
  const [value, setValue] = useState("");
  const [title, setTile] = useState("");
  const [categories, setCategories] = useState(null);

  const getCategories = async () => {
    const res = await fetch(api.getCategories(), { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed!");
    }
    let { categories } = await res.json();
    setCategories(categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const { theme } = ThemeStates();

  const { status } = useSession();

  const router = useRouter();

  const emptyData = "<p><br></p>";
  const handleValueChange = (e) => {
    e !== emptyData ? setValue(e) : setValue(null);
  };
  const [open, setOpen] = useState(false);
  const [showImgDropZone, setShowImgDropZone] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [img, setImg] = useState("");
  const openImageDropZone = () => {
    setShowImgDropZone(true);
  };
  const handleSetImg = (imgObj) => {
    setImg(imgObj);
  };
  const removeImg = () => setImg("");

  const hideImgDropZone = () => {
    setShowImgDropZone(false);
  };

  if (status === "loading") {
    return (
      <div className="LoadingContainer">
        <Loader size="medium" />
      </div>
    );
  }

  if (status === "unauthenticated") {
    return router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input
          value={title}
          onChange={(e) => setTile(e.target.value)}
          placeholder="Title"
          type="text"
          className={styles.titleInput}
        />
        <div className={styles.actions}>
          <div className={styles.tools}>
            <span
              onClick={() => setOpen(!open)}
              className={`material-symbols-outlined ${styles.plus_icon} ${
                open && styles.active
              }`}
            >
              add_circle
            </span>
            <div className={`${styles.extraTools} ${open && styles.active}`}>
              <ImageIcon
                handleFunc={openImageDropZone}
                classes={[styles.tool_icon]}
              />
              <UploadIcon classes={[styles.tool_icon]} />
              <VideoIcon classes={[styles.tool_icon]} />
            </div>
          </div>
          <div className={styles.right}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedCategory || ""}
                label="Category"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => {
                  return (
                    <MenuItem value={cat.title} key={cat.id}>
                      {cat.title}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <button
              disabled={!value || !title}
              className={`${styles.publish_btn} ${
                theme === "dark" ? styles.dark : styles.light
              }`}
            >
              Publish
            </button>
          </div>
        </div>
        {img && (
          <div
            className={`${styles.imgName} ${theme === "dark" && styles.dark}`}
          >
            <span>{img.name}</span>
            <XMarkIcon classes={[styles.xmark]} handleFunc={removeImg} />
          </div>
        )}
        <div className={styles.editor}>
          <ReactQuill
            className={styles.quillTextArea}
            theme="bubble"
            value={value}
            onChange={handleValueChange}
            placeholder="Tell your story"
          />
        </div>
      </div>
      {showImgDropZone && (
        <Modal setShowImgDropZone={setShowImgDropZone}>
          <ImageDropZone
            handleSetImg={handleSetImg}
            hideImgDropZone={hideImgDropZone}
          />
        </Modal>
      )}
    </div>
  );
};

export default Writepage;
