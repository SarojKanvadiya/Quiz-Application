import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [username, setUsername]= useState();
    const [password, setPassword]= useState();
    const [token,setToken] = useState();
    const [error, setError] = useState(null)

     const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
      try {
       const response= await axios.post(`https://working-kaput-macadamia.glitch.me/login`,{username,password})
       console.log(response)
       if(response.data.success){
        setToken(response.data.token)
        navigate("/quiz")
       }
      } catch (error) {
        setError(error.response.data.message)
        console.log(error)
      }
    }
  return (
    <div className='form-container container'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Username' onChange={(e)=>setUsername(e.target.value)} />
            <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            <input type="submit" value="Login"/>
        </form>
      <p style={{color:"red"}}>{error}</p>
    </div>
  )
}

export default Login
