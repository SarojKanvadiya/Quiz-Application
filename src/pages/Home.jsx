import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const Home = () => {
  return (
    <div className='container'>
      <h1>Welcome to the Quiz App!</h1>
      <p>Test your knowledge and challenge yourself with our quiz. Please <Link to='/login' className='login-link'>Login</Link> to get started.</p>
    </div>
  )
}

export default Home
