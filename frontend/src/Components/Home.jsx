import React, { useEffect, useState } from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true
let flag = true

const Home = () => {

  const [user, setUser] = useState()

  const refreshToken = async() => {
    const res = await axios.get("http://localhost:5000/refreshtoken", {
      withCredentials:true
    })
    .catch((error) => {
      console.log(error)
    })
    console.log(res)
    const data = await res.data
    return data
  }

  const passRequest = async() => {
    const res = await axios.get("http://localhost:5000/verify", {
      withCredentials:true
    })
    .catch((error) => {
      console.log(error)
    })
    console.log(res)
    const data = await res.data
    return data
  }

  useEffect(() => {
    if(flag){
      flag = false
      passRequest().then((data) => {setUser(data.user)})
    }
    let interval = setInterval(() => {
      refreshToken().then((data) => {setUser(data.user)})
    }, 1000*29)
    return () => clearInterval(interval)
  },[])

  return (
    <div style={{marginTop:"100px"}}>{user && <h1>welcome {user.name}</h1>}</div>
  )
}

export default Home