 describe('Payroll', () => {

  beforeEach(() => {
    cy.login()
    cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/history')
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
  })

  /*
 
 // PAYROLL SETTINGS MODAL
it('Payroll Settings button opens settings modal', () => {
  cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/history')
  cy.get('body').should('not.have.css', 'pointer-events', 'none')
  cy.contains('Bulk Payment').click({ force: true })
  cy.contains('Import New CSV').click()
  cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/sample-payroll.csv', { force: true })
  cy.get('body').should('not.have.css', 'pointer-events', 'none')
  cy.contains('Payroll Settings').click({ force: true })
  cy.contains('Make changes and manage payroll').should('be.visible')
})

it('shows all payroll settings fields', () => {
  cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/history')
  cy.get('body').should('not.have.css', 'pointer-events', 'none')
  cy.contains('Bulk Payment').click({ force: true })
  cy.contains('Import New CSV').click()
  cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/sample-payroll.csv', { force: true })
  cy.get('body').should('not.have.css', 'pointer-events', 'none')
  cy.contains('Payroll Settings').click({ force: true })
  cy.contains('Payroll Frequency').should('be.visible')
  cy.contains('Weekly').should('be.visible')
  cy.contains('Bi-Weekly').should('be.visible')
  cy.contains('Monthly').should('be.visible')
  cy.contains('Generate Payslips').should('be.visible')
  cy.contains('Payroll Bonus (13th Month)').should('be.visible')
})

it('blocks save with invalid time format', () => {
  cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/history')
  cy.get('body').should('not.have.css', 'pointer-events', 'none')
  cy.contains('Bulk Payment').click({ force: true })
  cy.contains('Import New CSV').click()
  cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/sample-payroll.csv', { force: true })
  cy.get('body').should('not.have.css', 'pointer-events', 'none')
  cy.contains('Payroll Settings').click({ force: true })
  cy.get('input[placeholder="Input payroll send time"]').type('25:00')
  cy.contains('Save').click()
  cy.contains('Make changes and manage payroll').should('be.visible')
})

it('saves payroll settings with valid inputs', () => {
  cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/history')
  cy.get('body').should('not.have.css', 'pointer-events', 'none')
  cy.contains('Bulk Payment').click({ force: true })
  cy.contains('Import New CSV').click()
  cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/sample-payroll.csv', { force: true })
  cy.get('body').should('not.have.css', 'pointer-events', 'none')
  cy.contains('Payroll Settings').click({ force: true })
  cy.get('input[placeholder="Input payroll send date"]')
    .type('04/30/2026')
  cy.get('input[placeholder="Input payroll send time"]')
    .type('04:00PM')
  cy.contains('Monthly').click()
  cy.contains('Save').click()
  cy.contains('CLOSE').click()
})

it('proceed button is visible after settings saved', () => {
  cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/history')
  cy.get('body').should('not.have.css', 'pointer-events', 'none')
  cy.contains('Bulk Payment').click({ force: true })
  cy.contains('Import New CSV').click()
  cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/sample-payroll.csv', { force: true })
  cy.get('body').should('not.have.css', 'pointer-events', 'none')
  cy.contains('Proceed').should('be.visible')
})

 }) 

 */

    // Step 1: Open the Drafts view and select the first available draft to resume
    cy.contains('Drafts').click()
    cy.contains('button', 'Continue Edit').first().click()

    // Step 2: On the specific breakdown page, assert the title and hit Proceed
    cy.contains('Salary Payment', { matchCase: false }).should('be.visible')
    cy.contains('button', 'Proceed').click()

    // Step 3: On the final macro Summary screen, verify totals and submit transaction
    cy.url().should('include', '/summary')
    cy.contains('Summary').should('be.visible')
    
    // Validate that critical calculation figures are loaded and visible
    cy.contains('Total Gross Pay').should('be.visible')
    cy.contains('Total Net Pay').should('be.visible')

    // Click final submission action
    cy.contains('button', 'Submit Payroll').click()
  })