import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Index as PostsIndex } from './posts/Index'

const Main = () => {
  return(
    <main>
      <Routes>
        <Route path='/' element={<PostsIndex />} />
      </Routes>
    </main>
  )
}

export default Main