import React from 'react';
import Loading from '../components/loading/loading'
import BtnOpcoes from '../components/btns/BtnOpcoes.jsx';
import Card from '../components/card/Card.jsx';
import data from  '../data.js';
import './paginas.css';

export default function Home() {
  const loading = <Loading />
  return (
    <div className="home">
      <div className="opcoes">
        <BtnOpcoes nome="spinner" onclick={loading} />
      </div>
      <div className="corpo">
        {data.produtos.map((produto) => (
          <Card key={produto._id} produtos={produto} />
        ))}
      </div>
    </div>  )
}
