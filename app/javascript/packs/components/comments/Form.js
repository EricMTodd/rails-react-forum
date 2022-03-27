import React, { useState } from 'react'
import axios from 'axios'

const NewCommentForm = (props) => {
  const {
    post,
    user,
    comment
  } = props
  const [body, setBody] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (comment === undefined){
      axios.post('http://localhost:3000/api/create_comment', {
        comment: {
          body: body,
          post_id: post.id,
          user_id: user.id,
          username: user.name,
        }
      })
      .then(response => {
        window.location.reload()
      })
      .catch(error => console.log(error))
    } else {
      axios.post('http://localhost:3000/api/create_comment', {
        comment: {
          body: body,
          parent_id: comment.id,
          post_id: post.id,
          user_id: user.id,
          username: user.name,
        }
      })
      .then(response => {
        window.location.reload()
      })
      .catch(error => console.log(error))
    }
  }

  return(
    <div className='comment-form'>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor='body'>
          <textarea name='body' value={body} onChange={e => setBody(e.target.value)} />
        </label>
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

const EditCommentForm = (props) => {
  const {
    post,
    user,
    comment
  } = props
  const [body, setBody] = useState(comment.body)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.patch(`http://localhost:3000/api/comment/${comment.id}/update`, {
      comment: {
        body: body,
      }
    })
    .then(response => {
      window.location.reload()
    })
    .catch(error => console.log(error))
  }

  return(
    <div className='comment-form'>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor='body'>
          <textarea name='body' value={body} onChange={e => setBody(e.target.value)} />
        </label>
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export { NewCommentForm, EditCommentForm }