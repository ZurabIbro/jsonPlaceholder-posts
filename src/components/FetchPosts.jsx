import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './FetchPosts.module.css'
import Posts from './Posts'
import Pagination from './Pagination'

function FetchPosts() {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => setPosts(data))
    .catch((error) => {console.log(error)})
  }



  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = posts.slice(firstPostIndex, lastPostIndex)
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className={styles.page}>
      <h2>Posts</h2>
      <div className={styles.pageData}>
        {currentPost.map((post) => (
            <Link key={post.id} to={`/posts/${post.id}`}>
                <Posts id={post.id} userId={post.userId} title={post.title} body={post.body} />
            </Link>
        ))}
        <Pagination 
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        />
      </div>
    </div>
  )
}

export default FetchPosts
