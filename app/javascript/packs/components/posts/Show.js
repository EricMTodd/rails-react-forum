import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
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
  const navigate = useNavigate()


  useEffect(() => {
    axios.get(`https://railsreactforum.herokuapp.com/api/post/${params.id}`)
    .then(response => {
      setPost(response.data.post)
      setPostCreator(response.data.post_creator)
      setComments(response.data.comments)
    })
    .catch(error => console.log(error))
  }, [])

  const handleDestroy = () => {
    console.log('DESTROY')
    axios.delete(`https://railsreactforum.herokuapp.com/api/post/${params.id}/destroy`)
    .then(response => {
      navigate('/')
    })
    .catch(error => console.log(error))
  }

  if (loggedIn && user.id === post.user_id) {
    return(
      <div id='show-post'>
        <h1>{post.title}</h1>
        <small><Link to={`/user/${postCreator.id}`}>{postCreator.name}</Link></small>
        <p>{post.body}</p>
        <small><button type='button' onClick={() => handleDestroy() } className='delete-button'>Delete</button></small>
        <h2>Comment on this post</h2>
        <div id='top-level-comment-form'>
          <CommentForm  post={post} user={user} />
        </div>
        <h2>Comments</h2>
        <ul>
          {rootComments.map(comment => <ShowComment key={comment.id} comments={comments} comment={comment} loggedIn={loggedIn} post={post} user={user} />)}
        </ul>
      </div>
    )
  }

  if (loggedIn) {
    return(
      <div id='show-post'>
        <h1>{post.title}</h1>
        <small><Link to={`/user/${postCreator.id}`}>{postCreator.name}</Link></small>
        <p>{post.body}</p>
        <h2>Comment on this post</h2>
        <div id='top-level-comment-form'>
          <CommentForm  post={post} user={user} />
        </div>
        <h2>Comments</h2>
        <ul>
          {rootComments.map(comment => <ShowComment key={comment.id} comments={comments} comment={comment} loggedIn={loggedIn} post={post} user={user} />)}
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