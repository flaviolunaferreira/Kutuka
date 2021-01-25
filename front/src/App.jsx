import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Rodape from "./components/rodape/Rodape";
import Title from "./components/title/Title";
import Principal from './paginas/Principal';
import './app.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="title">
          <Title />
        </div>
        <div className="area-de-trabalho">
          <Route exact path="/" component={Principal}/>
        </div>
        <div className="rodape">
          <Rodape/>
        </div>
      </div>
    </Router>
  );
}

export default App;
