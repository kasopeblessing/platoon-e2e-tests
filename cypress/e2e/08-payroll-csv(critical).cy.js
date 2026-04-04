describe('Payroll', () => {

  beforeEach(() => {
    cy.login()
    cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/history')
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
  })

  // PAGE LOAD 
  it('loads the payroll page correctly', () => {
    cy.contains('Payroll').should('be.visible')
    cy.contains('Recurring Payroll').should('be.visible')
    cy.contains('Bulk Payment').should('be.visible')
    cy.contains('Sort Code').should('be.visible')
  })

  it('shows all payroll cards', () => {
    cy.contains('Pending Payroll').should('be.visible')
    cy.contains('Approve and decline a payroll').should('be.visible')
    cy.contains('Drafts').should('be.visible')
    cy.contains('Continue saved payroll').should('be.visible')
    cy.contains('Payroll History').should('be.visible')
    cy.contains('Total payroll ever had').should('be.visible')
  })

  it('shows payroll history section', () => {
    cy.contains('Payroll History').should('be.visible')
    cy.contains('View past payroll records').should('be.visible')
    cy.contains('Filter by Date').should('be.visible')
  })


  // CARD NAVIGATION
  it('Pending Payroll card links to pending page', () => {
    cy.contains('Pending Payroll').click({ force: true})
    cy.url().should('include', '/dashboard/payroll/pending')
  })

  it('Drafts card links to drafts page', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/history')
    cy.contains('Drafts').click()
    cy.url().should('include', '/dashboard/payroll/drafts')
  })

  it('Payroll History card links to history page', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/history')
    cy.contains('Payroll History').click()
    cy.url().should('include', '/dashboard/payroll/history')
  })

  it('Recurring Payroll button links to recurring page', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/history')
    cy.contains('Recurring Payroll').click()
    cy.url().should('include', '/dashboard/payroll/recurring')
  })

  // BULK PAYMENT MODAL
  it('Bulk Payment button opens modal', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/history')
    cy.contains('Bulk Payment').click()
    cy.contains('Make payment in bulk').should('be.visible')
    cy.contains('Please upload your file to initiate a bulk payment')
      .should('be.visible')
  })

  it('bulk payment modal shows Download CSV Template button', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/history')
    cy.contains('Bulk Payment').click()
    cy.contains('Download CSV Template').should('be.visible')
  })

  it('bulk payment modal shows Import New CSV button', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/history')
    cy.contains('Bulk Payment').click()
    cy.contains('Import New CSV').should('be.visible')
  })

it('Download CSV Template button works', () => {
  cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/history')
  cy.get('body').should('not.have.css', 'pointer-events', 'none')
  cy.contains('Bulk Payment').click({ force: true })
  cy.contains('Download CSV Template').should('be.visible').click({force: true})
})

  it('Import New CSV uploads file successfully', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/history')
    cy.contains('Bulk Payment').click()
    cy.contains('Import New CSV').click()
    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/sample-payroll.csv', { force: true })
  })

  /*
  it('modal closes when X is clicked', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/history')
    cy.contains('Bulk Payment').click()
    cy.contains('Make payment in bulk').should('be.visible')
    cy.get('button').contains('x').click({force: true})
    cy.contains('Make payment in bulk').should('not.exist')
  })
    */
})