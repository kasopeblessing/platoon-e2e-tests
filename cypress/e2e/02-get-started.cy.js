/* describe('Get Started Page', () => {

beforeEach(() => {
    // Force a standard desktop viewport size so elements don't get hidden in mobile menus
    cy.viewport(1280, 720)
    cy.visit('https://qa.platoonco.com/get-started', { timeout: 15000 })
  })

  // PAGE LOAD 
  it('loads the get started page correctly', () => {
    cy.contains('Choose Your Path').should('be.visible')
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
*/


describe('Get Started Page', () => {

  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.visit('https://qa.platoonco.com/get-started', { timeout: 15000 })
  })

  // PAGE LOAD 
  it('loads the get started page correctly', () => {
    // Adding matchCase: false makes text assertions immune to font-casing modifications
    cy.contains('Choose your path', { matchCase: false }).should('be.visible')
    cy.contains('How would you like to explore Platoon', { matchCase: false }).should('be.visible')
  })

  it('shows both product cards', () => {
    cy.contains('Bulk Payroll & Payslips').should('be.visible')
    cy.contains('Full HR Management').should('be.visible')
  })

  // BUTTONS & CROSS-SUBDOMAIN CROSSING
  it('Explore Bulk Payroll button goes to signup page', () => {
    cy.contains('Explore Bulk Payroll & Payslips').click()
    
    // Use cy.origin to safely assert across your 'biz' subdomain pipeline
    cy.origin('https://biz.qa.platoonco.com', () => {
      cy.url({ timeout: 10000 }).should('include', '/signup')
    })
  })

  it('Explore Full HR Management button goes to onboarding page', () => {
    cy.contains('Explore Full HR Management').click()
    
    // Use cy.origin to safely assert across your 'co' subdomain pipeline
    cy.origin('https://co.platoonco.com', () => {
      cy.url({ timeout: 10000 }).should('include', '/onboarding/business-registration')
    })
  })

})