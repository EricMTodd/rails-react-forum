import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFound from './NotFound'
import SignUp from './registrations/SignUp'
import Login from './sessions/Login'
import Profile from './users/Profile'
import { Index as PostsIndex } from './posts/Index'
import { New as NewPost } from './posts/New'
import { Show as ShowPost } from './posts/Show'


const Main = (props) => {
  const {
    handleLogin,
    user,
    loggedIn,
    handleLogout
  } = props

  if (loggedIn) {
    return(
      <main>
      <Routes>
        <Route path='/' element={<PostsIndex loggedIn={loggedIn} />} />
        <Route path='/signup' element={<SignUp handleLogin={handleLogin} />} />
        <Route path='/login' element={<Login handleLogin={handleLogin} />} />
        <Route path='/user/:id' element={<Profile user={user} loggedIn={loggedIn} handleLogout={handleLogout} />} />
        <Route path='/posts/new' element={<NewPost user={user} />} />
        <Route path='/post/:id' element={<ShowPost loggedIn={loggedIn} user={user} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
    )
  }

  return(
    <main>
      <Routes>
        <Route path='/' element={<PostsIndex loggedIn={loggedIn} />} />
        <Route path='/signup' element={<SignUp handleLogin={handleLogin} />} />
        <Route path='/login' element={<Login handleLogin={handleLogin} />} />
        <Route path='/user/:id' element={<Profile user={user} />} />
        <Route path='/post/:id' element={<ShowPost />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default Main