import React from 'react'

const Show = (props) => {
  const {
    comment
  } = props

  return(
    <div id='show-comment'>
      {comment.body}
    </div>
  )
}

export { Show }