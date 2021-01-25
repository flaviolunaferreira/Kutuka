import React from 'react';
import BtnOpcoes from '../components/btns/BtnOpcoes';
import './paginas.css';

export default function Principal() {
  return (
    <div className="principal">
      <div className="opcoes">
        <BtnOpcoes nome="Vendas" />
        <BtnOpcoes nome="Compras" />
        <BtnOpcoes nome="Metas" />
        <BtnOpcoes nome="Caixa" />
        <BtnOpcoes nome="Estoque" />
        <BtnOpcoes nome="Web" />
        <BtnOpcoes nome="Cadastros" />
        <BtnOpcoes nome="Patrimônios" />
        <BtnOpcoes nome="Amortização" />
        <BtnOpcoes nome="Consultas" />
        <BtnOpcoes nome="Sair" />
      </div>
      <div className="corpo"></div>
    </div>
  )
}
