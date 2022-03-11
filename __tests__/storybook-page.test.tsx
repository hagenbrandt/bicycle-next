import { render, screen } from '@testing-library/react'
import { Page } from '../stories/Page'

describe('Storybook Page', () => {
  it('renders headline', () => {
    render(<Page />)

    const heading = screen.getByRole('heading', {
      name: /Pages in Storybook/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
