import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Create = (props) => {
  const {
    handleLogin
  } = props
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit')
    axios.post('http://localhost:3000/api/signup', {
      user: {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      }
    })
    .then(response => {
      console.log(response)
      handleLogin(response.data)
      navigate('/')
    })
    .catch(error => console.log(error))
  }

  return(
    <div id='sign-up'>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
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
        <label htmlFor='password'>
          <strong>Password</strong>
          <br />
          <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <br />
        <label htmlFor='passwordConfirmation'>
          <strong>Password confirmation</strong>
          <br />
          <input type='password' name='passwordConfirmation' value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} />
        </label>
        <br />
        <br />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export { Create }