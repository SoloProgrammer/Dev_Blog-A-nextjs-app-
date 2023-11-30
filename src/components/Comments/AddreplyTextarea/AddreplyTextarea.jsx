"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./addreplyTextarea.module.css";
import TextareaAutosize from "react-textarea-autosize";
import Loader from "@/components/Loader/Loader";
import { api } from "@/utils/api";

const AddreplyTextarea = ({ handleCancel, commentId, increaseReplyCount }) => {
  const [desc, setDesc] = useState();
  const [loading, setLoading] = useState(false);
  let replyBoxTextContainerRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      replyBoxTextContainerRef?.current?.classList?.add(`${styles.active}`);
    }, 0);
  }, []);

  const handleSaveReply = async () => {
    setLoading(true);
    let options = {
      method: "PUT",
      body: JSON.stringify({ desc }),
    };
    let res = await fetch(api.addReply(commentId), options);
    if(res.ok){
      increaseReplyCount()
    }
    setLoading(false);
    handleCancel()
  };

  return (
    <div
      ref={replyBoxTextContainerRef}
      className={`${styles.replyBoxTextContainer} `}
    >
      <div className={`${styles.replyContainer} `}>
        <p>Add your reply</p>
        <TextareaAutosize
          autoFocus={true}
          maxRows={5}
          minRows={3}
          desc={desc}
          onChange={(e) => setDesc(e.target.value)}
          className={styles.replyTextArea}
        />
        <div className={`${styles.replyActions}`}>
          <button
            onClick={handleSaveReply}
            disabled={!desc || loading}
            className={styles.saveReplyBtn}
          >
            Save {loading && <Loader size="mini" />}
          </button>
          <span
            onClick={handleCancel}
            className="material-symbols-outlined icon cancelIcon"
          >
            close
          </span>
        </div>
      </div>
    </div>
  );
};

export default AddreplyTextarea;
