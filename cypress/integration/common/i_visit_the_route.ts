/// <reference types="cypress" />
import { When } from 'cypress-cucumber-preprocessor/steps'

When('I visit the route {string}', (url) => {
  cy.visit(url)
})
