describe('Landing Page', () => {

  beforeEach(() => {
    cy.visit('https://qa.platoonco.com')
  })

  // FIRST SCREEN
  it('shows the welcome page correctly', () => {
    cy.contains(`Businesses shouldn't have to be their own payroll manager`).should('be.visible')
  })


  // NAVIGATION
  it('logo routes back to landing page', () => {
    cy.visit('https://qa.platoonco.com/pricing')
    cy.get('img[alt="Platoon Logo"]').not('.md\\:hidden').first().click()
    cy.url().should('include', 'platoonco.com')
  })

  it('Pricing link goes to pricing page', () => {
    cy.contains('Pricing').click()
    cy.url().should('include', '/pricing')
    cy.contains('Pricing Plans').scrollIntoView().should('be.visible')
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

  // ABOUT PAGE
  it('about page shows main headline', () => {
    cy.visit('https://qa.platoonco.com/about')
    cy.contains('Who We Are').scrollIntoView().should('be.visible')
  })

  // PRICING PAGE
  it('pricing page shows all three plans', () => {
    cy.visit('https://qa.platoonco.com/pricing')
    cy.contains('No hidden fees. Pay as you grow.').scrollIntoView()
      .should('be.visible')
    cy.contains('Free').scrollIntoView().should('be.visible')
    cy.contains('Standard').scrollIntoView().should('be.visible')
    cy.contains('Enterprise').scrollIntoView().should('be.visible')
  })

  it('pricing page shows correct prices', () => {
    cy.visit('https://qa.platoonco.com/pricing')
    cy.contains('₦0').scrollIntoView().should('be.visible')
    cy.contains('₦150').scrollIntoView().should('be.visible')
    cy.contains('Custom Pricing').scrollIntoView().should('be.visible')
  })

  it('pricing page shows correct CTA buttons', () => {
    cy.visit('https://qa.platoonco.com/pricing')
    cy.contains('Generate Free Custom Payslips').scrollIntoView()
      .should('be.visible')
    cy.contains('Get Standard').scrollIntoView().should('be.visible')
    cy.contains('Contact Sales').scrollIntoView().should('be.visible')
  })

  // EMAIL SUBSCRIBE
  it('email subscribe input is visible', () => {
    cy.visit('https://qa.platoonco.com/about')
    cy.get('input[placeholder="Your email"]').scrollIntoView()
      .should('be.visible')
    cy.contains('Subscribe').should('be.visible')
  })

  it('subscribe rejects empty email', () => {
    cy.visit('https://qa.platoonco.com/about')
    cy.get('input[placeholder="Your email"]').scrollIntoView()
    cy.contains('Subscribe').click()
    cy.get('input[placeholder="Your email"]')
      .then($input => {
        expect($input[0].validationMessage).to.not.be.empty
      })
  })

  it('subscribe accepts valid email', () => {
    cy.visit('https://qa.platoonco.com/about')
    cy.get('input[placeholder="Your email"]').scrollIntoView()
      .type('test@yopmail.com')
    cy.contains('Subscribe').click()
  })

})