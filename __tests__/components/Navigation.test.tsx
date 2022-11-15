import { cleanup, render, screen } from '@testing-library/react'
import Navigation, { LinkParams } from '../../components/navigation/Navigation'

describe('Navigation', () => {
  const links: LinkParams[] = [
    {
      linkText: 'About',
      linkHref: '/about',
    },
    {
      linkText: 'Page 1',
      linkHref: '/page-one',
    },
    {
      linkText: 'Page 2',
      linkHref: '/page-two',
    },
  ]

  beforeEach(() => {
    render(<Navigation links={links} />)
  })

  it('renders a navigation element', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders given links with strings and hrefs', () => {
    links.forEach((item) => {
      expect(
        screen.getByRole('link', { name: item.linkText })
      ).toHaveTextContent(item.linkText)
      expect(screen.getByRole('link', { name: item.linkText })).toHaveAttribute(
        'href',
        item.linkHref
      )
    })
  })
  it('returns empty DOM element when no links are given', () => {
    cleanup()
    const { container } = render(<Navigation links={[]} />)

    expect(container).toBeEmptyDOMElement()
  })

  it.todo('navigates to passed href url')
})
