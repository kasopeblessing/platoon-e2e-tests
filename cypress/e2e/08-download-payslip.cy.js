describe('Payroll History & Payslip Download', () => {

  beforeEach(() => {
    cy.login()
    cy.get('body')
    cy.get('a[href="/dashboard/payroll"]', {timeout: 10000})
      .should('be.visible')
      .click({force: true})  
    cy.url()
      .should('include', '/dashboard/payroll/history')    
  })

  // PAYROLL HISTORY PAGE
  it('Loads Payroll History', () => {
    cy.contains('tr', 'Disbursed')
      .contains('button, a, div', 'View') 
      .should('be.visible')
      .click({force:true})
    cy.url().should('include', '/approved')
    cy.contains('button', 'Generate Payslip')
      .click({force:true})
    cy.url()
      .should('include', '/payslips')
    cy.contains('button', 'Download PDF')
      .click({force:true})
  })

})