import React from 'react'
import styles from './homepage.module.css'
import Featured from '@/components/Featured/Featured'
import CategoryList from '@/components/CategoryList/CategoryList'
import BlogList from '@/components/BlogList/BlogList'
import Menu from '@/components/Menu/Menu'

const Home = () => {
  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <BlogList/>
        <Menu/>
      </div>
    </div>
  )
}

export default Home
