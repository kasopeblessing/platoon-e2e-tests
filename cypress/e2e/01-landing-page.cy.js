describe('Landing Page', () => {

  beforeEach(() => {
    cy.visit('https://qa.platoonco.com/welcome')
  })

  // ---- PAGE CONTENT ----
  it('shows the welcome page correctly', () => {
    cy.contains('Welcome').should('be.visible')
    cy.contains('Select the service you want to access').should('be.visible')
  })

  it('shows both product cards', () => {
    cy.contains('Bulk Payroll & Payslips').should('be.visible')
    cy.contains('Full HR Management').should('be.visible')
  })

  it('shows all Bulk Payroll features', () => {
    cy.contains('Bulk salary processing').should('be.visible')
    cy.contains('Automated payslip generation').should('be.visible')
    cy.contains('Real-time payment tracking').should('be.visible')
    cy.contains('Secure access to payroll history').should('be.visible')
  })

  it('shows all HR Management features', () => {
    cy.contains('Human Resource').should('be.visible')
    cy.contains('Tax filing & reporting').should('be.visible')
    cy.contains('Pension management').should('be.visible')
    cy.contains('Regulatory compliance').should('be.visible')
  })

  // ---- NAVIGATION ----
  it('logo routes back to landing page', () => {
    cy.visit('https://qa.platoonco.com/welcome')
    cy.get('a').find('img').first().click()
    cy.url().should('include', '/welcome')
  })


  it('Pricing link goes to pricing page', () => {
    cy.contains('Pricing').click()
    cy.url().should('include', '/pricing')
    cy.contains('Pricing Plans').should('be.visible')
  })

  it('About Us link goes to about page', () => {
    cy.contains('About Us').click()
    cy.url().should('include', '/about')
  })

  it('Book a Demo link goes to demo page', () => {
    cy.contains('Book a Demo').click()
    cy.url().should('include', '/demo')
  })

  it('Generate Payslip link goes to payslip generator', () => {
    cy.contains('Generate Payslip').click()
    cy.url().should('include', '/payslip-generator')
  })

  it('Get Started button goes to get started page', () => {
    cy.contains('Get Started').click()
    cy.url().should('include', '/get-started')
  })

  // ---- PRICING PAGE CONTENT ----
  it('pricing page shows all three plans', () => {
    cy.visit('https://qa.platoonco.com/pricing')
    cy.contains('No hidden fees. Pay as you grow.').should('be.visible')
    cy.contains('Free').should('be.visible')
    cy.contains('Standard').should('be.visible')
    cy.contains('Enterprise').should('be.visible')
  })

  it('pricing page shows correct prices', () => {
    cy.visit('https://qa.platoonco.com/pricing')
    cy.contains('₦0').should('be.visible')
    cy.contains('₦150').should('be.visible')
    cy.contains('Custom Pricing').should('be.visible')
  })

  it('pricing page shows correct CTA buttons', () => {
    cy.visit('https://qa.platoonco.com/pricing')
    cy.contains('Generate Free Custom Payslips').should('be.visible')
    cy.contains('Get Standard').should('be.visible')
    cy.contains('Contact Sales').should('be.visible')
  })

})