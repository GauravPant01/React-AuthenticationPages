import React, { Profiler } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingScreen from './pages/LandingScreen'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

