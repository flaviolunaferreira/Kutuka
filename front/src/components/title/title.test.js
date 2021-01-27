import React from 'react';
import { render } from '@testing-library/react';
import Title from './Title';

describe('Testando componente Title', () => {
  it('verificando a existencia dos campos', () => {
    const TITLE = 'Estudando com o coyote';
    const { getByText } =  render(<Title />);
    expect(getByText(TITLE)).toBeInTheDocument();
  });
  it('Verificando se tem o input de pesquisa no title', () => {
    const { getByTestId } =  render(<Title />);
    const inputDePesquisa = getByTestId('inputDePesquisa');
    expect(inputDePesquisa).toBeInTheDocument();
  })
});
