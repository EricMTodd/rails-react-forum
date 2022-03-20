import React, { useState } from 'react'
import axios from 'axios'

const Edit = (props) => {
  const {
    post
  } = props
  const [title, setTitle] = useState(post.title)
  const [body, setBody] = useState(post.body)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.patch(`http://localhost:3000/api/post/${post.id}/update`, {
      post: {
        title: title,
        body: body
      }
    })
    .then(response => {
      window.location.reload()
    })
    .catch(error => console.log(error))
  }

  return(
    <div className='edit-post-form'>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>
          <strong>Title</strong>
          <br />
          <input type='text' name='title' value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <br />
        <br />
        <label htmlFor='body'>
          <strong>Body</strong>
          <br />
          <textarea name='body' value={body} onChange={e => setBody(e.target.value)} />
        </label>
        <br />
        <br />
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export { Edit }