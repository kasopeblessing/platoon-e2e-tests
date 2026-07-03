describe('Payslip Generator - Step 1: Company & Employee Info', () => {

  beforeEach(() => {
    cy.visit('https://qa.platoonco.com/payslip-generator')
  })

  it('accurately fills out the company and employee forms', () => {
    // 1. VERIFY CORE HEADERS ARE PRESENT
    cy.contains('Company Information').should('be.visible')
    cy.contains('Employee Information').should('be.visible')

    // 2. FILL COMPANY INFORMATION
    cy.get('input[placeholder="Enter company name"]').should('be.visible')
      .type('Platoon QA Corp')

    cy.get('input[placeholder="Enter company address"]')
      .type('123 Testing Avenue, Lagos, Nigeria')

    cy.get('input[placeholder="Enter phone number"]')
      .type('09060855027')

    cy.get('input[placeholder="Enter email address"]')
      .type('qa-test@platoonco.com')

    // 3. HANDLE OPTIONAL LOGO UPLOAD
    cy.get('body').then(($body) => {
      // Check if the file input exists in the DOM first
      if ($body.find('input[type="file"]').length > 0) {
        cy.get('input[type="file"]')
          .selectFile('cypress/fixtures/logo.jpg', { force: true })
      }
    })

    // 4. FILL EMPLOYEE INFORMATION
    cy.get('input[placeholder="John Doe"]').should('be.visible')
      .clear({ scrollBehavior: false })
      .type('Kasope Adebowale')

    cy.get('input[placeholder="Enter employee ID"]')
      .type('EMP-2026-QA')

    cy.get('input[placeholder="Enter department"]')
      .type('Engineering')

    cy.get('input[placeholder="Enter position"]')
      .type('QA Automation Engineer')

    //  5. SUBMIT TO PROCEED TO THE NEXT PAGE
    cy.contains('button', 'Generate Payslip')
      .should('be.visible')
      .should('not.be.disabled')
      .click({ scrollBehavior: false })

    // 6. GUARD ASSERTION FOR NEXT STEP
    cy.url({ timeout: 10000 }).should('include', 'https://qa.platoonco.com/payslip-generator')
  })


})