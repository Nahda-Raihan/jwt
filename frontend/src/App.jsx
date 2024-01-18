import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Navigation from './Components/Navigation' 
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation/>}>
        <Route path='signup' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='home' element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App