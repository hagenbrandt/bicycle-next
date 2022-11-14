import Link from 'next/link'

export type LinkParams = {
  linkText: string
  linkHref: string
}

type NavigationProps = {
  links: LinkParams[]
}

const Navigation = ({ links }: NavigationProps) => {
  return (
    <nav>
      {links.map((item, index) => {
        return (
          <Link href={item.linkHref} key={item.linkText + index}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>{item.linkText}</a>
          </Link>
        )
      })}
    </nav>
  )
}

export default Navigation
