describe('Payslip Generator', () => {

  beforeEach(() => {
    cy.visit('https://qa.platoonco.com/')
    cy.get('a[href="/payslip-generator"]')
      .should('be.visible')
      .last()
      .click()
  })

 it('Payslip Generator core works', () => {
    cy.url().should('include', '/payslip-generator')
    cy.get('#company-name')
      .clear()
      .type('QA Test')
    cy.get('#company-address')
      .type('123, QA Lane')
    cy.get('#employee-name')
      .clear()
      .type('Quality Assurance')
    cy.get('#job-title')
      .clear()
      .type('QA Engineer')
    cy.get('#employee-id')
      .type('emp-101')
    cy.get('#pay-period')
      .contains('Aug')
      .click()


 })


})