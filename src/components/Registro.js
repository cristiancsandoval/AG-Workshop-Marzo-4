import React from 'react'
import { useForm } from '../hooks/useForm'
import { useDispatch } from 'react-redux';

const Registro = () => {
  const dispatch = (useDispatch)

  const [values, handleInputChange, reset] =useForm({
    nombre:'',
    correo:'',
    pass:''
  })

const {nombre, correo, pass} = values
const handleSubmitRegistro =(e) =>
e.prevenDefault();
dispatch((nombre,correo,pass))
reset ()


  return (
    <div>
       <form>
                <div className="mb-3" controlId="formBasicName">
                    <label> Nombre </label>
                    <imput
                        type="text"
                        placeholder="Enter name"
                        name="nombre"

                    />
                </div>
                <div className="mb-3" controlId="formBasicEmail">
                    <label> Correo </label>
                    <input
                        type="email"
                        placeholder="email"
                        name="email"
                        
                    />
                </div>
                <div className="mb-3" controlId="formBasicPassword">
                    <label> Contraseña </label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="pass1"
                        

                    />
                </div>
                <button
                    variant="primary" type="submit">
                    Registrarse
                </button>


                <link to="/login">Login</link>

            </form>

    </div>


  )
}

export default Registro