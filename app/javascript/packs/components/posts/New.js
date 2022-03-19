import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const New = (props) => {
  const {
    user
  } = props
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://railsreactforum.herokuapp.com/api/create_post', {
      post: {
        title: title,
        body: body,
        user_id: user.id
      }
    })
    .then(response => {
      console.log(response)
      navigate('/')
    })
    .catch(error => console.log(error))
  }

  return(
    <div id='new-post'>
      <h1>Create a post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>
          <strong>Title</strong>
          <br />
          <input type='text' name='title' value={title} autoComplete='off' onChange={e => setTitle(e.target.value)} />
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
        <button type='submit'>Create post</button>
      </form>
    </div>
  )
}

export { New }