import React from 'react'

export default function Card({imagem, texto})  {

return (
    <div>
        <img src={imagem} alt="" />
        <p>{texto}</p>
        <button>Clique aqui</button>
  </div>
  )
}
