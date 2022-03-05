import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Show as ShowComment } from '../comments/Show'
import { Form as CommentForm } from '../comments/Form'

const Show = (props) => {
  const {
    loggedIn,
    user
  } = props
  const [post, setPost] = useState({})
  const [postCreator, setPostCreator] = useState({})
  const [comments, setComments] = useState([])
  const rootComments = comments.filter(comment => comment.parent_id === null)
  const params = useParams()


  useEffect(() => {
    axios.get(`http://localhost:3000/api/post/${params.id}`)
    .then(response => {
      setPost(response.data.post)
      setPostCreator(response.data.post_creator)
      setComments(response.data.comments)
    })
    .catch(error => console.log(error))
  }, [])



  if (loggedIn) {
    return(
      <div id='show-post'>
        <h1>{post.title}</h1>
        <small><Link to={`/user/${postCreator.id}`}>{postCreator.name}</Link></small>
        <p>{post.body}</p>
        <h2>Comment on this post</h2>
        <CommentForm />
        <h2>Comments</h2>
        <ul>
          {rootComments.map(comment => <ShowComment key={comment.id} comments={comments} comment={comment} />)}
        </ul>
      </div>
    )
  }

  return(
    <div id='show-post'>
      <h1>{post.title}</h1>
      <small><Link to={`/user/${postCreator.id}`}>{postCreator.name}</Link></small>
      <p>{post.body}</p>
      <h2>Comments</h2>
      <ul>
        {rootComments.map(comment => <ShowComment key={comment.id} comments={comments} comment={comment} />)}
      </ul>
    </div>
  )
}

export { Show }