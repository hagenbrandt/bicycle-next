import { render, screen } from '@testing-library/react'
import Navigation from '../../components/navigation/Navigation'

describe('Navigation', () => {
  it('renders a navigation element', () => {
    render(<Navigation />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it.todo('renders given links with strings and hrefs')
  it.todo('navigates to passed href url')
})
