import React from 'react'

const Home = () => {

  return (
    <div className='cntr-home'>
        <form>
            <div>
                <label>Marca</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Color</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Ruta foto</label>
                <input type="text"></input>
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