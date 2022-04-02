import React, { useState } from 'react'
import axios from 'axios'

const EditUserForm = (props) => {
  const {
    user
  } = props
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === '') {
      axios.patch(`http://localhost:3000/api/user/${user.id}/update`, {
        user: {
          name: name,
          email: email
        }
      })
      .then(response => {
        window.location.reload()
      })
      .catch(error => console.log(error))
    } else {
      axios.patch(`http://localhost:3000/api/user/${user.id}/update`, {
        user: {
          name: name,
          email: email,
          password: password
        }
      })
      .then(response => {
        window.location.reload()
      })
      .catch(error => console.log(error))
    }
  }

  return(
    <div id='edit-user-form'>
      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor='name'>
          <strong>Name</strong>
          <br />
          <input type='text' name='name' value={name} autoComplete='off' onChange={e => setName(e.target.value)} />
        </label>
        <br />
        <br />
        <label htmlFor='email'>
          <strong>Email</strong>
          <br />
          <input type='email' name='email' value={email} autoComplete='off' onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <br />
        <label htmlFor='email'>
          <strong>Password</strong>
          <br />
          <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <br />
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default EditUserForm