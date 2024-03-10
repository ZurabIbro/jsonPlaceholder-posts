import React from 'react'
import styles from './Pagination.module.css'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pagePosts = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pagePosts.push(i)
    }

  return (
    <div className={styles.Pagination}>
        <ul className={styles.ul}>
            {
                pagePosts.map(i => (
                    <li>
                        <a onClick={() => paginate(i)}>{i}</a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Pagination