import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Index as PostsIndex } from './posts/Index'
import { Create as SignUp } from './registrations/Create'

const Main = (props) => {
  const {
    handleLogin
  } = props

  return(
    <main>
      <Routes>
        <Route path='/' element={<PostsIndex />} />
        <Route path='/signup' element={<SignUp handleLogin={handleLogin} />} />
      </Routes>
    </main>
  )
}

export default Main