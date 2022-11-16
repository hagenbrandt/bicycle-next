import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import Navigation, { LinkParams } from '../../components/navigation/Navigation'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { createMockRouter } from '../testUtilities'

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
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Navigation links={links} />
      </RouterContext.Provider>
    )
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

  // eslint-disable-next-line jest/expect-expect
  it('navigates to passed href url', () => {
    cleanup()
    const router = createMockRouter({})
    render(
      <RouterContext.Provider value={router}>
        <Navigation links={links} />
      </RouterContext.Provider>
    )
    const button = screen.getAllByRole('link')[0]

    fireEvent.click(button)
    const redirect = router.push

    expect(redirect).toHaveBeenCalledWith('/about', '/about', {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    })
  })
})
