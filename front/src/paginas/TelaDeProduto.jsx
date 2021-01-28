import React from 'react'
// import axios from 'axios';
// import { Link } from 'react-router-dom';
import data from '../data.js';
import './telaDeProduto.css';
import Rating from '../components/rating/Rating';
import { Link } from 'react-router-dom';

export default function TelaDeProduto(props) {
  // const [produtos, setProdutos] = useState([]);
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await axios.get('/api');
  //     setProdutos(data);
  //   };
  //   fetchData();
  // }, [])

  const produto = data.produtos.find( x => x._id === props.match.params.id)
  if (!produto) return <div>Produto não existe!</div>;
  return (
    <div>
      <Link to='/'>Retorna ao início</Link>
      <div className="row">
        <div className="col-2">
          <img className="large" src={produto.imagem} alt={ produto.name } />
        </div>
        <div className="col-1">
          <ul>
            <li><h1>{produto.nome}</h1></li>
            <li>{<Rating rating={produto.rating} numRating={produto.numRating} /> }</li>
            <li>Price : R${produto.preco}</li>
            <li><p>{produto.descricao}</p></li>
          </ul>
        </div>
        <div className="col-1">
          <div className="cart card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Preço</div>  
                  <div className="preço">${produto.preco}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {produto.estoque > 0 ? (
                      <span className="success">Em Estoque</span>
                    ) : (
                      <span className="danger">Indesponível</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
