
import './commands'

Cypress.Commands.add('login', () => {
  cy.visit('https://biz.qa.platoonco.com/login')
  cy.get('#Email').type('kashim@yopmail.com')
  cy.get('#password').type('Password@123')
  cy.get('button').contains('Login').click()
})

