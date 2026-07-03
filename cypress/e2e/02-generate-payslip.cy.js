/* describe('Singular Payslip Flow', () => {

  beforeEach(() => {
    cy.visit('https://qa.platoonco.com')
  })

  // PAGE LOAD
  it('Payslip Generator Loads correctly', () => {
    cy.visit('https://qa.platoonco.com/payslip-generator')
    cy.url().should('include', '/payslip-generator')
    cy.contains('Generate Payslip')
  })

  // COMPANY INFORMATION SCREEN
  it('submits company details successfully to move to employee screen', () => {
    cy.contains('Generate Payslip').click()
    
    cy.get('input[placeholder*="company name"]').type('Platoon QA Labs')
    cy.get('input[placeholder*="company address"]').type('123 Tech Runway, Lagos')
    cy.get('input[placeholder*="phone number"]').type('+2348000000000')
    cy.get('input[placeholder*="email address"]').type('qa@platoonco.com')
    
    cy.contains('button', 'Generate Payslip').click()
    cy.contains('Employee Information').should('be.visible')
  })

  // EMPLOYEE INFORMATION SCREEN
  it('calculates gross pay and deductions dynamically to complete form', () => {
    cy.visit('https://qa.platoonco.com/payslip-generator')
    
    // Bypass first step
    cy.get('input[placeholder*="company name"]').type('Platoon QA Labs')
    cy.contains('button', 'Generate Payslip').click()

    // Fill Employee Info
    cy.get('input[placeholder*="fullname"]').type('John Doe')
    cy.get('input[placeholder*="employee ID"]').type('PLN-042')
    
    // Select Month and Date
    cy.get('select').first().select('May')
    cy.get('input[type="date"]').type('2026-05-31')

    // Input Earnings & Deductions
    cy.contains('label', 'Basic salary').parent().find('input').type('500000')
    cy.contains('label', 'Bonus').parent().find('input').type('50000')
    
    // Assert dynamic calculations aren't zero
    cy.contains('Gross Pay').parent().should('not.contain', 'NO')

    cy.contains('label', 'PAYE Tax').parent().find('input').type('10')
    cy.contains('label', 'Pension').parent().find('input').type('8')

    // Accept Terms & Submit
    cy.get('input[type="checkbox"]').check({ force: true })
    cy.contains('button', 'Generate Payslip').click()
  })

})

*/

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

    // --- 6. GUARD ASSERTION FOR NEXT STEP ---
    // (We will expand this assertion once you share the next screen, e.g., checking for salary/earnings input fields)
    cy.url({ timeout: 10000 }).should('include', 'https://qa.platoonco.com/payslip-generator')
  })

})