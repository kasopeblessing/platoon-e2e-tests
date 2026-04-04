describe('Get Started Page', () => {

  beforeEach(() => {
    cy.visit('https://qa.platoonco.com/get-started')
  })

  // PAGE LOAD 
  it('loads the get started page correctly', () => {
    cy.contains('Choose your path').should('be.visible')
    cy.contains('How would you like to explore Platoon').should('be.visible')
  })

  it('shows both product cards', () => {
    cy.contains('Bulk Payroll & Payslips').should('be.visible')
    cy.contains('Full HR Management').should('be.visible')
  })

  // BUTTONS
  it('Explore Bulk Payroll button goes to signup page', () => {
    cy.contains('Explore Bulk Payroll & Payslips').click()
    cy.url().should('include', 'biz.qa.platoonco.com/signup')
  })

  it('Explore Full HR Management button goes to onboarding page', () => {
    cy.contains('Explore Full HR Management').click()
    cy.url().should('include', 'co.platoonco.com/onboarding/business-registration')
  })

})