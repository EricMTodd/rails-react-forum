import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  const {
    loggedIn,
    user,
    handleLogout
  } = props

  if (loggedIn) {
    return(
      <nav>
        <div id='nav-links'>
          <Link to='/'>Home</Link>
        </div>
        <div id='session-links'>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
          <button type='button' onClick={() => handleLogout()} id='logout-button'>Log out</button>
        </div>
      </nav>
    )
  }

  return(
    <nav>
      <div id='nav-links'>
        <Link to='/'>Home</Link>
      </div>
      <div id='session-links'>
        <Link to='/login'>Log in</Link>
        <Link to='/signup'>Sign up</Link>
      </div>
    </nav>
  )
}

export default Nav