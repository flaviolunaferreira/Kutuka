import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Rodape from "./components/rodape/Rodape";
import Title from "./components/title/Title";
import Home from './paginas/Home';
import Principal from './paginas/Principal';
import './app.css';
import Loading from './components/loading/loading';
import TelaDeProduto from './paginas/TelaDeProduto';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="title">
          <Title/>
        </div>
        <div className="area-de-trabalho">
          <Route path="/produto/:id" component={TelaDeProduto}/>
          <Route path="/principal" component={Principal}/>
          <Route exact path="/" component={Home}/>
        </div>
        <div className="rodape">
          <Rodape/>
        </div>
      </div>
    </Router>
  );
}

export default App;
