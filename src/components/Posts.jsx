import React from 'react'
import styles from './Posts.module.css'

const Posts = ({id, title, body}) => {
    
  return (
    <div className={styles.Posts}>
        <span className={styles.title}>{title}</span>
        <span>{body}</span>
        <span className={styles.button}>
        </span>
    </div>
  )
}

export default Posts