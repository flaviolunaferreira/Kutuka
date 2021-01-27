import React from 'react';
import './title.css';

export default function Title() {
  return (
    <div className='header'>
      <div className="empresa">
        <h1>Estudando com o coyote</h1>
      </div>
      <div className="opcaoBuscar">
        <label htmlFor="pesquisar">
          <input
            data-testid="inputDePesquisa"
            id="pesquisar"
            className="input-procurar"
            type="text" name="perquisar"
            placeholder="Oque você esta procurando?"
          />
        </label>
      </div>
      <div className="carrinho">
        <p className="carrinho-text">Carrinho</p>
        <p className="selecionados">Selecionados:</p>
      </div>
    </div>
  )
}
