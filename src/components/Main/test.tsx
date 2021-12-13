import { render, screen} from '@testing-library/react'

import Main from '.'

// describe é usado para descrever o que será testado
describe('<Main />', () => {
  // it serve descrever  o que defato se espera do teste
  it('should render the heading', () => {

    // Descreve o que queremos renderizar
    const { container } =  render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
