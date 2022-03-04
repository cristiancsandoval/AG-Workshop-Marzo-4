import React from 'react'
import { NavBar, NavBarUl, NavBarLi } from '../style/styles'
import { ImgLogo } from '../style/styles'

const Navbar = () => {
  return (
    <div>
      <NavBar>
      <ImgLogo src="https://i.ibb.co/YyMrv5z/plantilla-logotipo-bicicleta-simple-139869-81.webp" alt="" ></ImgLogo>
      <NavBarUl>
      <NavBarLi href="/src/components/Home.js">Home</NavBarLi>
      <NavBarLi href="#">Login</NavBarLi>
      <NavBarLi href="#">Registro</NavBarLi>
        
      </NavBarUl>
    </NavBar>


    </div>
  )
}

export default Navbar