import React from 'react'
import { useForm } from '../hooks/useForm'

const Login = () => {

  const [values, handleInputChange ] = useForm({
    email: '',
    password: ''
  })

  const { email, password }  = values


  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form  onSubmit={handleSubmit} >
        <label>Correo</label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={handleInputChange}

        />

        <label>Contraseña</label>
        <label
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}

        />

        <button type="submit" >
          Enviar
        </button>

        <div className="auth__social-networks">
          <div className="google-btn"   >
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />

            </div>
          </div>
        </div>

        <a href='/src/components/Registro.js' >Registrarse</a>
      </form>

    </div>
  )
}

export default Login