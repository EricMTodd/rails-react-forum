import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return(
    <nav>
      <div id='nav-links'>
        <Link to='/'>Home</Link>
      </div>
    </nav>
  )
}

export default Nav