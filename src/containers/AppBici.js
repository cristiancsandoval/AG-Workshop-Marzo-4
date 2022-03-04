import React from 'react'
import Navbar from '../components/Navbar'
import Registro from '../components/Registro'
import RouterBici from '../Router/RouterBici'

const AppBici = () => {
  return (
    <div>
      <Navbar/>
      <RouterBici/>
      <Registro/>
    </div>
  )
}

export default AppBici