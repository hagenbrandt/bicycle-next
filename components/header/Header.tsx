export type Headline = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HeaderProps = {
  headerText: string
  headerType: Headline
}

const Header = ({ headerText, headerType }: HeaderProps) => {
  if (!headerText || !headerType) {
    return <></>
  }

  const headlineWithText = {
    h1: <h1>{headerText}</h1>,
    h2: <h2>{headerText}</h2>,
    h3: <h3>{headerText}</h3>,
    h4: <h4>{headerText}</h4>,
    h5: <h5>{headerText}</h5>,
    h6: <h6>{headerText}</h6>,
  }

  return headlineWithText[headerType] || headlineWithText['h1']
}

export default Header
