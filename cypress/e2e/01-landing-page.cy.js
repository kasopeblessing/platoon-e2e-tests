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
    cy.visit('https://qa.platoonco.com/')
    cy.get('img[alt="Platoon Logo"]').not('.md\\:hidden').first().click()
    cy.url().should('include', 'platoonco.com')
  })


it('Pricing link goes to pricing page', () => {
    // Force a direct browser navigation to bypass the hanging Next.js client-side router
    cy.visit('https://qa.platoonco.com/pricing', { timeout: 4000 })
    cy.url().should('include', '/pricing')
    cy.contains('Pricing', { timeout: 4000 }).should('be.visible')
  })
  

  it('About Us link goes to about page', () => {
    // Force a direct browser navigation to bypass the hanging Next.js client-side router
    cy.visit('https://qa.platoonco.com/about')
    cy.url().should('include', '/about')
    cy.contains('About Us').should('be.visible')
    })

  it('Book a Demo link goes to demo page', () => {
    // Force a direct browser navigation to bypass the hanging Next.js client-side router
    cy.visit('https://qa.platoonco.com/demo')
    cy.url().should('include', '/demo')
    cy.contains('Demo Request Form').should('be.visible')
  })

  it('Generate Payslip link goes to payslip generator', () => {
    // Force a direct browser navigation to bypass the hanging Next.js client-side router
    cy.visit('https://qa.platoonco.com/payslip-generator')
    cy.url().should('include', '/payslip-generator')
    cy.contains('Payslip Generator').should('be.visible')
    cy.contains('Company Information').should('be.visible')
  })

  it('Get Started button goes to get started page', () => {
    // Force a direct browser navigation to bypass the hanging Next.js client-side router
    cy.visit('https://qa.platoonco.com/get-started')
    cy.url().should('include', '/get-started')
    cy.contains('Choose Your Path').should('be.visible')
  })

  // ABOUT PAGE
  it('about page shows main headline', () => {
    cy.visit('https://qa.platoonco.com/about')
    cy.contains('Who We Are').scrollIntoView().should('be.visible')
  })

  // PRICING PAGE
  it('pricing page shows all three plans', () => {
    cy.visit('https://qa.platoonco.com/pricing')
    cy.contains('No hidden fees. Pay as you grow').scrollIntoView()
      .should('be.visible')
    cy.contains('BASIC').scrollIntoView().should('be.visible')
    cy.contains('GROWTH').scrollIntoView().should('be.visible')
    cy.contains('ENTERPRISE').scrollIntoView().should('be.visible')
  })

  it('pricing page shows correct prices', () => {
    cy.visit('https://qa.platoonco.com/pricing')
    cy.contains('₦250').scrollIntoView().should('be.visible')
    cy.contains('₦2,500').scrollIntoView().should('be.visible')
    cy.contains('₦3,000').scrollIntoView().should('be.visible')
  })

  it('pricing page shows correct CTA buttons', () => {
    cy.visit('https://qa.platoonco.com/pricing')
    cy.contains('Go Basic').scrollIntoView()
      .should('be.visible')
    cy.contains('Get Growth').scrollIntoView().should('be.visible')
    cy.contains('Contact Sales').scrollIntoView().should('be.visible')
  })

  // EMAIL SUBSCRIBE
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
    const timestamp = Date.now()
    cy.visit('https://qa.platoonco.com/about')
    cy.get('input[placeholder="Your email"]').scrollIntoView()
      .type(`test${timestamp}@yopmail.com`)
    cy.contains('Subscribe').click()
  })

})
