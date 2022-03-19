import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Profile = (props) => {
  const {
    user,
    loggedIn,
    handleLogout
  } = props
  const [profile, setProfile] = useState({})
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    axios.get(`https://railsreactforum.herokuapp.com/api/user/${params.id}`)
    .then(response => {
      setProfile(response.data.user)
      setPosts(response.data.posts)
    })
    .catch(error => console.log(error))
  }, [])

  const handleDestroy = () => {
    axios.delete(`https://railsreactforum.herokuapp.com/api/user/${params.id}/destroy`)
    .then(response => {
      handleLogout()
      navigate('/')
    })
    .catch(error => console.log(error))
  }

  if (loggedIn && user.id === profile.id) {
    return(
      <div id='profile'>
        <h1>{profile.name}</h1>
        <small><button type='button' onClick={() => handleDestroy()} className='delete-button'>Delete</button></small>
        <h2>Posts</h2>
        <ul>
          {posts.map(post => <li key={post.id}><Link to={`/post/${post.id}`}>{post.title}</Link></li>)}
        </ul>
      </div>
    )
  }

  return(
    <div id='profile'>
      <h1>{profile.name}</h1>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => <li key={post.id}><Link to={`/post/${post.id}`}>{post.title}</Link></li>)}
      </ul>
    </div>
  )
}

export default Profile