describe('Navigation', () => {
  it('should navigate to the about page', () => {
    cy.navigateTo({
      entryPoint: '/',
      navElement: 'a[href*="about',
      expectedRoute: '/about',
    })
    cy.get('h1').contains('About Page')
  })
})
