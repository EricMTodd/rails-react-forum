import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])
  const params = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3000/api/user/${params.id}`)
    .then(response => {
      setUser(response.data.user)
      setPosts(response.data.posts)
    })
    .catch(error => console.log(error))
  }, [])

  return(
    <div id='profile'>
      <h1>{user.name}</h1>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => <li key={post.id}><Link to={`/post/${post.id}`}>{post.title}</Link></li>)}
      </ul>
    </div>
  )
}

export default Profile