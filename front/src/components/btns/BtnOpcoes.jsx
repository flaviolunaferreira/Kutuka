import React from 'react'
import './btnOpcoes.css'

export default function btnOpcoes(props) {
  const {nome} = props;
  return (
    <div>
      <button >{nome}</button>
    </div>
  )
}
