import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Show as ShowComment } from '../comments/Show'

const Show = (props) => {
  const {
    loggedIn,
    user
  } = props
  const [post, setPost] = useState({})
  const [postCreator, setPostCreator] = useState({})
  const [body, setBody] = useState('')
  const [comments, setComments] = useState([])
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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit')
    axios.post('http://localhost:3000/api/create_comment', {
      comment: {
        body: body,
        post_id: post.id,
        user_id: user.id
      }
    })
    .then(response => {
      window.location.reload()
    })
    .catch(error => console.log(error))
  }

  if (loggedIn) {
    return(
      <div id='show-post'>
        <h1>{post.title}</h1>
        <small><Link to={`/user/${postCreator.id}`}>{postCreator.name}</Link></small>
        <p>{post.body}</p>
        <h2>Comment on this post</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='body'>
            <textarea name='body' value={body} onChange={e => setBody(e.target.value)} />
          </label>
          <br />
          <br />
          <button type='submit'>Submit</button>
        </form>
        <ul>
          {comments.map(comment => <li key={comment.id}>{comment.body}</li>)}
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
        {comments.map(comment => <li key={comment.id}><ShowComment comment={comment} /></li>)}
      </ul>
    </div>
  )
}

export { Show }