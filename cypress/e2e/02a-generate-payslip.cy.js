describe('Singular Payslip Flow', () => {

  beforeEach(() => {
    cy.visit('https://qa.platoonco.com')
  })

  // PAGE LOAD
  it('navigates from homepage to payslip generator correctly', () => {
    cy.contains('Generate Payslip').click()
    cy.url().should('include', '/payslip-generator')
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