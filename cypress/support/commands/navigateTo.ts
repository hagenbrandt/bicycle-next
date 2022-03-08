export type NavigateProps = {
  entryPoint: string
  navElement: string
  expectedRoute: string
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      navigateTo(props: NavigateProps): typeof navigateTo
    }
  }
}

/**
 * This function navigates from one url to another by
 * clicking on a navigation element. After that it checks
 * new sites url.
 * @param props.entryPoint: The route where to start the test, e.g. '/home'
 * @param props.navElement: The nav element which should be used to click on it, e.g. '.nav-element'
 * @param props.expectedRoute: The part of the route which is expected to get directed, e.g. '/about'
 */
export const navigateTo = (props: NavigateProps) => {
  cy.visit(props.entryPoint)
  cy.get(props.navElement).click()
  cy.url().should('include', props.expectedRoute)
}
