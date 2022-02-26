import React from 'react'

const Profile = (props) => {
  const {
    user
  } = props
  return(
    <div id='profile'>
      <h1>{user.name}</h1>
    </div>
  )
}

export default Profile