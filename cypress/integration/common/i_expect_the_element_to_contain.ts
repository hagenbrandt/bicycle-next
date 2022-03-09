/// <reference types="cypress" />
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then(
  `I expect the {string} to contain {string}`,
  (element: string, content: string) => {
    cy.get(element).contains(content)
  }
)
