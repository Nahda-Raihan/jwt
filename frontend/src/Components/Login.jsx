import axios from 'axios';
import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { Logcontext } from '../Context/LogContext';
// import { authActions } from '../Store';
// import { useDispatch } from 'react-redux';

const Login = () => {

  // const dispatch = useDispatch()
  const { login } = useContext(Logcontext)

    const navigate = useNavigate();
    const [formData , setFormData] = useState({
        email: "",
        password: ""
    })

    const handleData = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const senderFunction = async () => {
        const res = await axios.post("http://localhost:5000/login", {
            email: formData.email,
            password: formData.password
        })
        .catch((error) => {
            console.log(error)
        })
        console.log(res)
        const data = await res.data
        return data
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        senderFunction()
        .then(()=>login())
        // .then(() => dispatch(authActions.login()))
        .then(() => navigate("/home"))
    }

  return (
    <div style={{marginTop:"90px"}}>
        <form onSubmit={handleSubmit}>
        <Box 
        display="flex" 
        flexDirection="column" 
        marginLeft="auto" 
        width="300px" 
        marginRight="auto" 
        justifyContent="center" 
        alignItems="center">
          <Typography variant='h2'>Login</Typography>
          <TextField 
          name='email'
          type='email'
          variant='outlined'
          placeholder='Email'
          margin='normal'
          onChange={handleData}
          />
          <TextField 
          name='password'
          type='password'
          variant='outlined'
          placeholder='Password'
          margin='normal'
          onChange={handleData}/>
          <Button variant='contained' type='submit'>Login</Button>
        </Box>
      </form>
    </div>
  )
}

export default Login