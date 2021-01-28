import React from 'react';
import Rating from '../rating/Rating';
import './card.css';

export default function Card(props) {
  const {produtos} = props;
  const {
    _id,
    nome,
    imagem,
    preco,
    rating,
    numRating,
  } = produtos;
  return (
    <div key={_id} className="card">
      <a href={`/produto/${_id}`}>
        <img className="imagem" src={imagem} alt={nome}/>
      </a>
      <div className="card-body">
        <a href={`/produto/${_id}`}>
          <h2>{nome}</h2>
        </a>
        <Rating rating={rating} numRating={numRating}/>
        <div className="preco">
          {`R$ ${preco.toFixed(2)}`}
        </div>
      </div>
    </div>
  )
}
