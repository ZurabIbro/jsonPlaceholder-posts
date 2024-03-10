import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Pages.module.css'

const ToPage = () => {
    const [post, setPost] = useState([])
    const {id} = useParams()

    useEffect(() => { 
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setPost(data))
        .catch((error) => {console.log(error)})
    },[id])

  return (
    <div className={styles.Page}>
        {post && (
            <>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </>
        )}
    </div>
  )
}

export default ToPage