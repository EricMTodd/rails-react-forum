import React from 'react'
import { Link } from 'react-router-dom'

const Show = (props) => {
  const {
    comments,
    comment
  } = props
  const replies = comments.filter(reply => reply.parent_id === comment.id)

  return(
    <div className='show-comment'>
      {comment.body}
      <br />
      <small><Link to={`/user/${comment.user_id}`}>{comment.username}</Link></small>
      {replies.map(reply => <Show key={reply.id} comments={comments} comment={reply} />)}
    </div>
  )
}

export { Show }