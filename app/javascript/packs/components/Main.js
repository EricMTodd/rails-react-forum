import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Index as PostsIndex } from './posts/Index'
import SignUp from './registrations/SignUp'
import Login from './sessions/Login'

const Main = (props) => {
  const {
    handleLogin
  } = props

  return(
    <main>
      <Routes>
        <Route path='/' element={<PostsIndex />} />
        <Route path='/signup' element={<SignUp handleLogin={handleLogin} />} />
        <Route path='/login' element={<Login handleLogin={handleLogin} />} />
      </Routes>
    </main>
  )
}

export default Main