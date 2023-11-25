import React from "react";
import styles from "./blogCard.module.css";
import Image from "next/image";
import Commonbtn from "../Commonbtn/Commonbtn";
import Link from "next/link";

const BlogCard = ({ post, key }) => {
  const icon = (
    <span style={{ fontSize: ".9rem" }} className="material-symbols-outlined">
      arrow_forward
    </span>
  );

  function getTrimmedPostDesc(desc) {
    let descLen = desc.length
    return `${desc.slice(0, 210)} ${descLen > 210 ? " ..." : ""}`;
  }

  return (
    <div key={key} className={styles.post}>
      <div className={styles.imgContainer}>
        <Image src={post.img} priority={false} fill alt="alt" />
      </div>
      <div className={styles.postTextContent}>
        <div className={styles.details}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.cat}>&nbsp;{post.catSlug}</span>
        </div>
        <h3 className={styles.postTitle}>{post.title}</h3>
        <p
          className={styles.postDesc}
          dangerouslySetInnerHTML={{ __html: getTrimmedPostDesc(post.desc) }}
        ></p>
        <Link href={"/blog/1234"}>
          <Commonbtn text={"Read more"} size="small" icon={icon} />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
