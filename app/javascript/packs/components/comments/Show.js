import React from 'react'

const Show = (props) => {
  const {
    comments,
    comment
  } = props
  const replies = comments.filter(reply => reply.parent_id === comment.id)

  return(
    <div className='show-comment'>
      {comment.body}
      {replies.map(reply => <Show key={reply.id} comments={comments} comment={reply} />)}
    </div>
  )
}

export { Show }