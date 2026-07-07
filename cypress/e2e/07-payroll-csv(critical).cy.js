describe('Bulk Payroll Flow', () => {

  beforeEach(() => {
    cy.login()
  })

  // PAGE LOAD 
  it('loads the payroll page correctly', () => {
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.get('a[href="/dashboard/payroll"]', {timeout: 10000})
      .should('be.visible')
      .click({force: true})  
    cy.url().should('include', '/dashboard/payroll/history')
    cy.contains('Pending Payroll').should('be.visible')
    cy.contains('Drafts').should('be.visible')
    cy.contains('Payroll History').should('be.visible')
  })

  it('Bulk Payment load the right pages', () => {
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.get('a[href="/dashboard/payroll"]', {timeout: 10000})
      .should('be.visible')
      .click({force: true})  
    cy.url().should('include', '/dashboard/payroll/history')
    
    cy.get('button').contains('Bulk Payment').click({force:true})
    cy.contains('Make payment in bulk').should('be.visible')
    cy.contains('Import New CSV')
    .click({force:true})
    cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/sample-payroll.csv', { force: true })
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

  it('Import New CSV uploads file successfully and proceeds', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/history')
    cy.contains('Bulk Payment').click()
    cy.contains('Import New CSV').click()
    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/sample-payroll.csv', { force: true })
    cy.contains('salary payment', { matchCase: false, timeout: 10000 }).should('be.visible')
    cy.contains('button', 'Proceed').click()
  })
 
 
})