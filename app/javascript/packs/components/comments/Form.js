import React, { useState } from 'react'
import axios from 'axios'

const Form = (props) => {
  const {
    post,
    user
  } = props
  const [body, setBody] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit')
    axios.post('http://localhost:3000/api/create_comment', {
      comment: {
        body: body,
        post_id: post.id,
        user_id: user.id,
        username: user.name
      }
    })
    .then(response => {
      window.location.reload()
    })
    .catch(error => console.log(error))
  }

  return(
    <div className='comment-form'>
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

export { Form }