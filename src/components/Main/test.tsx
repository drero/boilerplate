import {getAllByRole, render, screen} from '@testing-library/react'

import Main from '.'

// describe é usado para descrever o que será testado
describe('<Main />', () => {
  // it serve descrever  o que defato se espera do teste
  it('should render the heading', () => {

    // Descreve o que queremos renderizar
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

  })
})
