import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'

const RouterBici = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='*' element={<Login/>} />
            <Route path='/home' element={<Home/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouterBici