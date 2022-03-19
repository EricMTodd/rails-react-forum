import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  const handleLogin = (data) => {
    setLoggedIn(data.loggedIn)
    setUser(data.user)
  }

  const handleLogout = () => {
    axios.delete('https://railsreactforum.herokuapp.com/api/logout')
    .then(response => {
      setLoggedIn(response.data.loggedIn)
      setUser(response.data.user)
      navigate('/')
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    axios.get('https://railsreactforum.herokuapp.com/api/logged_in')
    .then(response => {
      handleLogin(response.data)
    })
    .catch(error => console.log(error))
  }, [])

  return(
    <div id='app'>
      <Nav loggedIn={loggedIn} user={user} handleLogout={handleLogout} />
      <Main handleLogin={handleLogin} user={user} loggedIn={loggedIn} handleLogout={handleLogout} />
      <Footer />
    </div>
  )
}

export default App