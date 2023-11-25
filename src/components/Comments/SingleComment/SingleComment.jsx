import React from 'react'
import styles from './singleComment.module.css'
import Image from 'next/image'

const SingleComment = () => {
  return (
    <div className={styles.container}>
        <div className={styles.userInfo}>
            <div className={styles.userAvatar}>
                <Image src={"/p1.jpg"} priority={false}  fill alt='avatar'/>
            </div>
            <div className={styles.userText}>
                <span className={styles.userName}>John Doe</span>
                <span className={styles.date}>11 April 2023 At 12:89 PM</span>
            </div>
        </div>
        <p className={styles.commentText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eum perspiciatis at voluptates nihil suscipit, non </p>
    </div>
  )
}

export default SingleComment
