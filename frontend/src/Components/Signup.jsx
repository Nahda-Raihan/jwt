import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios"

const Signup = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleData=(e)=>{
    setFormData((prev)=>({
    ...prev,
    [e.target.name]: e.target.value,
 }))
   }

   const senderFunction = async () => {
    const res = await axios
    .post("http://localhost:5000/signup",{
      name: formData.name,
      email: formData.email,
      password: formData.password
    })
    .catch((error) => {
      console.log(error)
    })
    console.log(res)
    const data = await res.data
    console.log(data)
   }

   const handleSubmit = (e) => {
    e.preventDefault()
    senderFunction().then(() => navigate("/login"))
   }

  return (
    <div style={{marginTop:"100px"}}>
      <form onSubmit={handleSubmit}>
        <Box 
        display="flex" 
        flexDirection="column" 
        marginLeft="auto" 
        width="300px" 
        marginRight="auto" 
        justifyContent="center" 
        alignItems="center">
          <Typography variant='h2'>Signup</Typography>
          <TextField 
          name='name'
          type='text'
          variant='outlined'
          placeholder='Name'
          margin='normal'
          onChange={handleData}/>
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
          <Button variant='contained' type='submit'>Signup</Button>
        </Box>
      </form>
    </div>
  )
}

export default Signup