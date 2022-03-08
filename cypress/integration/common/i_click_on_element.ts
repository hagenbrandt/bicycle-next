/// <reference types="cypress" />
import { And } from 'cypress-cucumber-preprocessor/steps'

And('click on {string}', (navElement) => {
  cy.get(navElement).click()
})
