import React from 'react'

 

const Card = (props) => {
  return (
    <div className='card'>
        <h1>¡Hola {props.name}!</h1>
        <h3>Sabemos que tu genero de música favorito es {props.genero}.</h3>
        <h3>Además, tu artista favorito es {props.artista}.</h3>
    </div>
  )
}

export default Card