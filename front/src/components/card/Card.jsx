import React from 'react';
import './card.css';

export default function Card(props) {
  const { produtos } = props;
  const { _id, nome, imagem, preco } = produtos;
  return (
    <div key={_id} className="card">
      <a href={`/product/${_id}`}>
        <img className="imagem" src={imagem} alt={nome} />
      </a>
      <div className="card-body">
        <a href={`/product/${_id}`}>
          <h2>{nome}</h2>
        </a>
        <div className="price">
          {`R$ ${preco.toFixed(2)}`}
        </div>
      </div>
    </div>
  )
}
