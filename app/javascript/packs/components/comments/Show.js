import React from 'react'
import { Link } from 'react-router-dom'
import { Form as CommentForm } from './Form.js'

const Show = (props) => {
  const {
    comments,
    comment,
    post,
    user
  } = props
  const replies = comments.filter(reply => reply.parent_id === comment.id)

  return(
    <div className='show-comment'>
      {comment.body}
      <CommentForm comments={comments} comment={comment} post={post} user={user} />
      <br />
      <small><Link to={`/user/${comment.user_id}`}>{comment.username}</Link></small>
      {replies.map(reply => <Show key={reply.id} comments={comments} comment={reply} />)}
    </div>
  )
}

export { Show }