import React from 'react';
import Card from '../components/card/Card.jsx';
import data from  '../data.js';
import './paginas.css';

export default function Home() {
  return (
    <div className="home">
      <div className="opcoes">

      </div>
      <div className="corpo">
        {data.produtos.map((produto) => (
          <Card key={produto._id} produtos={produto} />
        ))}
      </div>
    </div>  )
}
