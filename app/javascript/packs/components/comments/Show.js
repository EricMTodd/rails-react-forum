import React from 'react'
import { Link } from 'react-router-dom'
import { Form as CommentForm } from './Form.js'
import axios from 'axios'

const Show = (props) => {
  const {
    comments,
    comment,
    loggedIn,
    post,
    user
  } = props
  const replies = comments.filter(reply => reply.parent_id === comment.id)

  const toggleCommentForm = (e) => {
    let commentForm = e.target.nextSibling
    if (commentForm.style.display === "") {
      commentForm.style.display = "block"
    } else {
      commentForm.style.display = ""
    }
  }

  const handleDestroy = () => {
    axios.delete(`http://localhost:3000/api/comment/${comment.id}/destroy`)
    .then(response => {
      window.location.reload()
    })
    .catch(error => console.log(error))
  }

  if (loggedIn && comment.user_id === user.id) {
    return(
      <div className='show-comment'>
        {comment.body}
        <br />
        <small><Link to={`/user/${comment.user_id}`}>{comment.username}</Link></small>
        <br />
        <button type='button' onClick={() => handleDestroy()} className='delete-button'>Delete</button>|
        <button type='button' onClick={e => toggleCommentForm(e)} className='reply-button' >reply</button>
        <CommentForm comments={comments} comment={comment} loggedIn={loggedIn} post={post} user={user} />
        {replies.map(reply => <Show key={reply.id} comments={comments} comment={reply} loggedIn={loggedIn} post={post} user={user} />)}
      </div>
    )
  }

  if (loggedIn) {
    return(
      <div className='show-comment'>
        {comment.body}
        <br />
        <small><Link to={`/user/${comment.user_id}`}>{comment.username}</Link></small>
        <br />
        <button type='button' onClick={e => toggleCommentForm(e)} className='reply-button' >reply</button>
        <CommentForm comments={comments} comment={comment} loggedIn={loggedIn} post={post} user={user} />
        {replies.map(reply => <Show key={reply.id} comments={comments} comment={reply} loggedIn={loggedIn} post={post} user={user} />)}
      </div>
    )
  }

  return(
    <div className='show-comment'>
      {comment.body}
      <br />
      <small><Link to={`/user/${comment.user_id}`}>{comment.username}</Link></small>
      {replies.map(reply => <Show key={reply.id} comments={comments} comment={reply} loggedIn={loggedIn} post={post} user={user} />)}
    </div>
  )
}

export { Show }