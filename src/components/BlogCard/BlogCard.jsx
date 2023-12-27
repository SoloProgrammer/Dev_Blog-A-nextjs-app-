import React from "react";
import styles from "./blogCard.module.css";
import Image from "next/image";
import Commonbtn from "../Commonbtn/Commonbtn";
import Link from "next/link";
import { getFormattedPostDate } from "@/utils/date";
import SavePostIcon from "../SavePostIcon/SavePostIcon";

export function getTrimmedPostDesc(desc) {
  const DESC_LEN = desc.length;
  return `${desc.slice(0, 210)} ${DESC_LEN > 210 ? " ..." : ""}`;
}
const BlogCard = ({ post, showBtn = true }) => {
  const icon = (
    <span style={{ fontSize: ".9rem" }} className="material-symbols-outlined">
      arrow_forward
    </span>
  );

  return (
    <div className={styles.post}>
      <div className={styles.imgContainer}>
        <Image src={post.img} priority={false} fill alt="alt" />
      </div>
      <div className={styles.postTextContent}>
        <div className={styles.seperator}>
          <div className={styles.details}>
            <span className={styles.date}>
              {getFormattedPostDate(post.createdAt)} -{" "}
            </span>
            <span className={styles.cat}>&nbsp;{post.catSlug}</span>
          </div>
          <SavePostIcon slug={post.slug} postId={post.id} />
        </div>
        <Link href={`/posts/${post.slug}`} style={{ flexGrow: 1 }}>
          <h3 style={{ marginBottom: "1rem" }} className={styles.postTitle}>
            {post.title}
          </h3>
          <p
            className={styles.postDesc}
            dangerouslySetInnerHTML={{ __html: getTrimmedPostDesc(post.desc) }}
          ></p>
        </Link>
        {showBtn && (
          <Link href={`/posts/${post.slug}`}>
            <Commonbtn text={"Read more"} size="small" icon={icon} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
