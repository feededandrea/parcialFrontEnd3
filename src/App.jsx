import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {

  const [name, setName] = useState('')
  const [genero, setGenero] = useState('')
  const [artista, setArtista] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSumbit = (e) => {
    e.preventDefault()
    const name2 = name.trim();
    const art2 = artista.trim();

    if((name2.length > 3)&&(art2.length > 6)){
      setShow(true)
      setError(false)
    }
    else {
      setError(true)
    }
  }

  const handleReset = (e) => {
    setName("")
    setArtista("")
    setGenero("")
    setShow(false)
  }

  return (
    <>
    <form className='form' onReset={handleReset} onSubmit={handleSumbit}>
      <label>Ingrese su nombre:</label>
      <input type='text' onChange={(e) => setName(e.target.value)}/>
      <label>Ingrese su genero de musica favorito:</label>
      <input type='text' onChange={(e) => setGenero(e.target.value)} />
      <label>Ingrese su artista favorito:</label>
      <input type='text' onChange={(e) => setArtista(e.target.value)} />
      <button type='sumbit'>Aceptar</button>
      {show && <button type="reset">Borrar</button>}
    </form>

      {show && <Card name ={name.trim()} genero={genero.trim()} artista={artista.trim()}/>}
      {error && <h2 className='error'>Por favor chequea que la información sea correcta.</h2>}

    </>
  )
}

export default App
