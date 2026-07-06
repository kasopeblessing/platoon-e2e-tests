// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import './commands'
/*
it('creates account with valid details', () => {
  const timestamp = Date.now()
  cy.get('#Email').type(`testuser${timestamp}@yopmail.com`)
  cy.get('#company_name').type(`Test Company ${timestamp}`)
  cy.get('#password').type('Password123!')
  cy.contains('Create Account').click()
  cy.contains('verify your email', { matchCase: false }).should('be.visible')
})
  */

Cypress.Commands.add('login', () => {
  cy.visit('https://biz.qa.platoonco.com/login')
  cy.get('#Email').type('kashim@yopmail.com')
  cy.get('#password').type('Password@123')
  cy.get('button').contains('Login').click()
})

Cypress.Commands.add('loginKYC', () => {
  cy.visit('https://biz.qa.platoonco.com/login')
  cy.get('#Email').type('kycaccount@yopmail.com')
  cy.get('#password').type('Password@123')
  cy.get('button').contains('Login').click()
  cy.contains('CLOSE').click()
})