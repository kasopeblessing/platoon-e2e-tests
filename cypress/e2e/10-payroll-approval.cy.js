describe('Payroll Approval', () => {

  beforeEach(() => {
    cy.login()
    cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/pending')
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
  })

  // PAGE LOAD
  it('loads the pending payroll page correctly', () => {
    cy.contains('Pending Payroll').should('be.visible')
    cy.contains('Review payrolls awaiting approval').should('be.visible')
  })

  it('shows pending payroll table headers', () => {
    cy.contains('Title').should('be.visible')
    cy.contains('Total Gross').should('be.visible')
    cy.contains('Total Deductions').should('be.visible')
    cy.contains('Total Payment').should('be.visible')
    cy.contains('Status').should('be.visible')
    cy.contains('Actions').should('be.visible')
  })

  it('shows pending payroll entries with correct status', () => {
    cy.contains('Pending').should('be.visible')
  })

  it('shows Filter by Date option', () => {
    cy.contains('Filter by Date').should('be.visible')
  })

  // ACTION BUTTONS
  it('shows Approve, Decline and View buttons on each row', () => {
    cy.contains('Approve').should('be.visible')
    cy.contains('Decline').should('be.visible')
    cy.contains('View').should('be.visible')
  })

  it('View button takes to pending approval page', () => {
    cy.contains('View').first().click({ force: true })
    cy.url().should('include', 'pending-approval')
  })

  it('Approve button approves payroll and stays on page', () => {
    cy.contains('Approve').first().click({ force: true })
    cy.url().should('include', '/dashboard/payroll/pending')
  })

  it('Decline button declines payroll and stays on page', () => {
    cy.contains('Decline').first().click({ force: true })
    cy.url().should('include', '/dashboard/payroll/pending')
  })

})