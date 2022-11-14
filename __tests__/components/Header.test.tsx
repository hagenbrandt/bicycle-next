import { render, screen, cleanup } from '@testing-library/react'
import Header, { Headline } from '../../components/header/Header'

describe('header', () => {
  const headlineTypes: Headline[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  const headlineText = 'This is a headline'

  it('renders given headline tag with given text', () => {
    headlineTypes.forEach((item) => {
      render(<Header headerText={headlineText} headerType={item} />)

      expect(screen.getByRole('heading').tagName).toBe(item.toUpperCase())
      expect(screen.getByRole('heading')).toHaveTextContent(headlineText)

      cleanup()
    })
  })

  it('returns empty DOM element when no text is given', () => {
    const { container } = render(<Header headerText="" headerType="h1" />)

    expect(container).toBeEmptyDOMElement()
  })

  it('returns empty DOM element when no headline type is given', () => {
    const { container } = render(
      <Header headerText="" headerType={'' as Headline} />
    )

    expect(container).toBeEmptyDOMElement()
  })

  it('makes snapshot test', () => {
    const { container } = render(
      <Header headerText={headlineText} headerType={'h1'} />
    )

    expect(container).toMatchSnapshot()
  })
})
