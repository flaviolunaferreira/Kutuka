import React from 'react';
import { render } from '@testing-library/react';
import rendRotas from './renderizandoRotas';
import App from '../App';


describe('Verificando as rotas do aplicativo', () => {
  it('testando se a pagina Home renderiza para /', () => {
    const {history} = rendRotas(<App/>);
    const {location: {
        pathname
      }} = history;
    expect(pathname).toBe('/');
  });

  it('Verifica se o input esta vazio', () => {
    const { getByDisplayValue } = render(<App />);
    const inputBuscar = getByDisplayValue('')

    expect(inputBuscar).toBeInTheDocument();
    expect(inputBuscar.type).toBe('text');
  });
});


// acessar os elementos da tela
// fazer interação com ele se houver necessidade
// fazer p teste