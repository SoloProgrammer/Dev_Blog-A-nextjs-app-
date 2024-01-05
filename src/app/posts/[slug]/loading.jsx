"use client";

import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./loading.module.css";
import "react-loading-skeleton/dist/skeleton.css";
import { ThemeStates } from "@/context/ThemeContext";

const Loading = () => {
  const { skeletonTheme } = ThemeStates();
  return (
    <SkeletonTheme
      className={styles.mtop}
      baseColor={skeletonTheme.color}
      highlightColor={skeletonTheme.highlightColor}
    >
      <div className={styles.singlePostLoadingBox}>
        <div className={styles.leftLoadingSide}>
          <h1 className={styles.h1}>
            <Skeleton width={"100%"} height={"100%"} />
          </h1>
          <div className={styles.userLoadingBox}>
            <div className={styles.user}>
              <div className={styles.userImg}>
                <Skeleton circle width={"100%"} height={"100%"} />
              </div>
              <div className={styles.userInfo}>
                <Skeleton width={120} height={20} />
                <Skeleton width={180} height={13} />
              </div>
            </div>
            <div className={styles.icon}>
              <Skeleton width={20} height={25} />
            </div>
          </div>
          <Skeleton height={2} width={"100%"} />
          <div className={styles.actionLoadingBox}>
            <div className={styles.left}>
              <Skeleton borderRadius={"2rem"} width={130} height={25} />
            </div>
            <div className={styles.right}>
              <Skeleton borderRadius={"50%"} width={40} height={40} />
              <Skeleton borderRadius={"50%"} width={40} height={40} />
            </div>
          </div>
          <Skeleton height={2} width={"100%"} />
          <div className={styles.postLoadingDetail}>
            <div className={styles.postImg}>
              <Skeleton height={"100%"} width={"100%"} />
            </div>
          </div>
        </div>
        <div className={styles.rightLoadingSide}></div>
      </div>
    </SkeletonTheme>
  );
};

export default Loading;
