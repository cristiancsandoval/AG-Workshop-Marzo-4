import React from 'react'
import { useForm } from '../hooks/useForm'

const Home = () => {

    const [ values, handleInputChange, reset ] = useForm({

        marca:'',
        color: '',
        foto: '',
    })

    const { marca, color, foto } = values

    const handleSubmit = (e) => {
        e.preventDeFault() 
        reset()
    }

  return (
    <div className='cntr-home'>
        <form onSubmit={handleSubmit} >
            <div>
                <label>Marca</label>
                <input type="text" name={marca}  onChange={handleInputChange}  ></input>
            </div>
            <div>
                <label>Color</label>
                <input type="text" name={color} onChange={handleInputChange}   ></input>
            </div>
            <div>
                <label>Ruta foto</label>
                <input type="text" name={foto}  onChange={handleInputChange}   ></input>
            </div>
            <button>Enviar</button>
        </form>
        <div>
            <h2>Bicis</h2>
            <div>
                {}
            </div>
        </div>
    </div>
  )
}

export default Home