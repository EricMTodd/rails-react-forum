import React from 'react'

const Show = (props) => {
  const {
    comment,
    replies
  } = props

  return(
    <div id='show-comment'>
      {comment.body}
      {replies.length > 0 && (
        <div className='replies'>
          {replies.map(reply => <Show comment={reply} replies={[]} />)}
        </div>
      )}
    </div>
  )
}

export { Show }