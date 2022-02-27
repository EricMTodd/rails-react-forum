import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const Show = () => {
  const [post, setPost] = useState({})
  const [postCreator, setPostCreator] = useState({})
  const params = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3000/api/post/${params.id}`)
    .then(response => {
      setPost(response.data.post)
      setPostCreator(response.data.post_creator)
    })
    .catch(error => console.log(error))
  }, [])

  return(
    <div id='show-post'>
      <h1>{post.title}</h1>
      <small><Link to={`/user/${postCreator.id}`}>{postCreator.name}</Link></small>
      <p>{post.body}</p>
    </div>
  )
}

export { Show }