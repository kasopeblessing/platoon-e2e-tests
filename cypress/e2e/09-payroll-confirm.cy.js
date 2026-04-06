describe('Submit Payroll', () => {

  beforeEach(() => {
    cy.login()
    cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/history')
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
  })

  // SUMMARY PAGE LOAD
  it('loads the payroll summary page correctly', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/summary?payrollId=217')
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Summary').should('be.visible')
    cy.contains('Select Submit to proceed with Payroll transaction')
      .should('be.visible')
  })

  it('shows payment information section', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/summary?payrollId=217')
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Payment information').should('be.visible')
    cy.contains('Debit Bank Account').should('be.visible')
    cy.contains('Available Total Amount').should('be.visible')
    cy.contains('Execution Date').should('be.visible')
  })

  it('shows payroll information section', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/summary?payrollId=217')
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Payroll information').should('be.visible')
    cy.contains('Number of Staff').should('be.visible')
    cy.contains('Gross Pay').should('be.visible')
    cy.contains('Bonus').should('be.visible')
    cy.contains('Deductions').should('be.visible')
    cy.contains('Tax').should('be.visible')
    cy.contains('Net Pay').should('be.visible')
    cy.contains('Total Payroll Amount').should('be.visible')
    cy.contains('Processing fee').should('be.visible')
    cy.contains('Total charged Amount').should('be.visible')
  })

  it('shows Submit Payroll button', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/summary?payrollId=217')
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Submit Payroll').should('be.visible')
  })

  // ---- INSUFFICIENT BALANCE ----
  it('blocks payroll submission with insufficient wallet balance', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/summary?payrollId=217')
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('₦0').should('be.visible')
    cy.contains('Submit Payroll').click({ force: true })
    cy.contains('insufficient', { matchCase: false }).should('be.visible')
  })

  // ---- BACK NAVIGATION ----
  it('back arrow navigates away from summary page', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/summary?payrollId=217')
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.get('a').find('svg').first().click({ force: true })
    cy.url().should('not.include', '/summary')
  })

})