import React from 'react'
import styles from './blogList.module.css'
import Pagination from '../Pagination/Pagination'
import Image from 'next/image'
import Commonbtn from '../Commonbtn/Commonbtn'
import BlogCard from '../BlogCard/BlogCard'

const BlogList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
      <Pagination/>
    </div>
  )
}

export default BlogList
