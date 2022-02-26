import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = (props) => {
  const {
    handleLogin
  } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit')
    axios.post('http://localhost:3000/api/login', {
      email: email,
      password: password
    })
    .then(response => {
      console.log(response)
      handleLogin(response.data)
      navigate('/')
    })
    .catch(error => console.log(error))
  }

  return(
    <div id='login'>
      <h1>Login</h1>
      <br />
      <form onSubmit={handleSubmit}>
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
        <button type='submit'>Log in</button>
      </form>
    </div>
  )
}

export default Login