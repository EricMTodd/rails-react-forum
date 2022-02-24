import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Index as PostsIndex } from './posts/Index'
import { Create as SignUp } from './registrations/Create'

const Main = () => {
  return(
    <main>
      <Routes>
        <Route path='/' element={<PostsIndex />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </main>
  )
}

export default Main