import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Index = (props) => {
  const {
    loggedIn
  } = props
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://railsreactforum.herokuapp.com/api/posts')
    .then(response => {
      setPosts(response.data.posts)
    })
    .catch(error => console.log(error))
  }, [])

  if (loggedIn) {
    return(
      <div id='posts-index'>
        <h1>Posts</h1>
        <Link to='/posts/new'>New post</Link>
        <ul>
          {posts.map(post => <li key={post.id}><Link to={`post/${post.id}`}>{post.title}</Link></li>)}
        </ul>
      </div>
    )
  }

  return(
    <div id='posts-index'>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => <li key={post.id}><Link to={`post/${post.id}`}>{post.title}</Link></li>)}
      </ul>
    </div>
  )
}

export { Index }