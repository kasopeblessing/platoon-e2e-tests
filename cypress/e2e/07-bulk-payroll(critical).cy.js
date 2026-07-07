describe('Bulk Payroll Flow', () => {

  beforeEach(() => {
    cy.login()
    cy.get('body')
    cy.get('a[href="/dashboard/payroll"]', {timeout: 10000})
      .should('be.visible')
      .click({force: true})  
    cy.url()
      .should('include', '/dashboard/payroll/history')
  })

  it('loads the payroll page correctly', () => {
    cy.contains('Pending Payroll')
      .should('be.visible')
    cy.contains('Drafts')
      .should('be.visible')
    cy.contains('Payroll History')
      .should('be.visible')
  })

  it('Bulk Payment Upload works', () => {
     cy.get('button')
      .contains('Bulk Payment')
      .click({force:true})
    cy.contains('Make payment in bulk')
      .should('be.visible')
    cy.contains('Import New CSV')
      .click({force:true})
    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/sample-payroll.csv', { force: true })
    cy.url()
      .should('include', '/confirm?payrollId')
    cy.contains('Salary Payment').should('be.visible')
  })

it('Drafts Page Works', () => {
  cy.contains('Drafts')
    .should('be.visible')
    .click({force:true})
  cy.url()
    .should('include', '/payroll/drafts')
  cy.contains('button', 'Continue Edit')
    .first()
    .should('be.visible')
    .click({force:true})
})

it('Payroll Approval or Decline', () => {
  cy.contains('Pending Payroll')
    .should('be.visible')
    .click({force:true})
  cy.url()
    .should('incude', '/payroll/pending')


})

})