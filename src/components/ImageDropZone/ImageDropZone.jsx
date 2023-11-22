"use client";

import React, { useCallback, useState } from "react";
import styles from "./imageDropZone.module.css";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { ThemeStates } from "@/context/ThemeContext";
import { handleFileUpload } from "@/utils/upload";
import Loader from "../Loader/Loader";
import Commonbtn from "../Commonbtn/Commonbtn";

const ImageDropZone = () => {
  const { theme } = ThemeStates();
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState(null);

  const onDrop = useCallback(async (acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
    let e = {
      target: {
        files: [acceptedFiles[0]],
      },
    };
    const picture = await handleFileUpload(e, setLoading);
    picture && setImg({ url: picture, name: acceptedFiles[0].name });
    handleSetImgName(img.name)
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className={styles.container}>
      <h2>Pick an image for your blog!</h2>
      <div {...getRootProps()} className={styles.flexCenter}>
        {loading ? (
          <Loader />
        ) : (
          <>
            {!img && !loading && (
              <input {...getInputProps()} multiple={false} />
            )}
            {!img && !loading ? (
              <>
                <div className={styles.imgdropZone}>
                  <Image
                    className={theme === "dark" && styles.imgWhite}
                    src={
                      "https://cdn-icons-png.flaticon.com/512/4303/4303472.png"
                    }
                    width={30}
                    height={30}
                    alt="img_img"
                  />
                  {isDragActive ? (
                    <p>Drop the files here ...</p>
                  ) : (
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  )}
                </div>
              </>
            ) : (
              img &&
              !loading && (
                <>
                  <div className={styles.imgViewBox}>
                    {/* <Image fill alt="blog_img" src={img}/> */}
                    <img src={img.url} alt="img" />
                  </div>
                </>
              )
            )}
          </>
        )}
      </div>
      {img && !loading && (
        <div className={styles.actions}>
          <Commonbtn size="small" text={"Change"} />
          <Commonbtn size="small" text={"Continue"} />
        </div>
      )}
    </div>
  );
};

export default ImageDropZone;
