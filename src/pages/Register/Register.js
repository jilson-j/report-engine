import { useState } from 'react'
import React from 'react'
import './Register.css'
import { Button, TextField, Typography } from '@mui/material'
const Register = () => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[erroremail,setErrorEmail]=useState("")
  const[errorpassword,seterrorPassword]=useState("")
  return (
    <div className='container'>
      <div className='flex-container'>
        <div className='logo-section'>
          <h1 className='Typography'>Welcome to</h1>
          <h1 className='title'> L&T EduTech Analytics! </h1>
        </div>
        <div className='form-section'>
          <h3>LOGIN</h3>
          <TextField label="Email" placeholder='Please enter email' className="input-field" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <TextField label="Password" placeholder='Please enter password' className="input-field"  value={password} onChange={(e)=>setPassword(e.target.password)}/>
          <Button type="button" variant="contained">Login</Button>

        </div>

        </div>
    </div>
  )
}

export default Register