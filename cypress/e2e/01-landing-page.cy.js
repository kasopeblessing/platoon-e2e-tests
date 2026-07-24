describe('Landing Page', () => {

  beforeEach(() => {
    cy.visit('https://qa.platoonco.com')
  })

  it('shows the welcome page correctly', () => {
    cy.contains(`Payroll for Middle-Market Businesses`)
      .should('be.visible')
  })

  it('logo routes back to landing page', () => {
    cy.visit('https://qa.platoonco.com/payroll')
    cy.get('img[alt="Platoon logo dark"]')
      .not('.md\\:hidden')
      .first()
      .click()
    cy.contains('Payroll for Middle-Market Businesses')
      .should('be.visible')
  })

it('Product button goes to the product page', () => {
    cy.contains('Product')
      .click()
    cy.url()
      .should('include', '/payroll')
    cy.contains('THE PRODUCT', { timeout: 4000 })
      .should('be.visible')
  })
  
it('Pricing button goes to the pricing page', () => {
    cy.contains('Pricing')
      .click()
    cy.url()
      .should('include', '/pricing')
    cy.contains('No hidden fees.')
      .should('be.visible')
  })
  
 it('About button goes to the about page', () => {
    cy.contains('About')
      .click()
    cy.url()
      .should('include', '/about')
    cy.contains('We built Platoon because payday matters.')
      .should('be.visible')
  })

  it('Contact button goes to the contact page', () => {
    cy.contains('Contact')
      .click()
    cy.url()
      .should('include', '/contact')
    cy.contains('Talk to us about your payroll')
      .should('be.visible')
  })

 it('Login button goes to the login page', () => {
    cy.get('button')
      .contains('Login')
      .click({force:true})
    cy.url()
      .should('include', '/login')
    cy.contains('Welcome')
      .should('be.visible')
  })

 it('Get Started button goes to the signup page', () => {
    cy.contains('Get Started')
      .click()
    cy.url()
      .should('include', '/signup')
    cy.contains('Get started with Platoon')
      .should('be.visible')
  })
  // PRICING PAGE
  it('pricing page shows all three plans', () => {
    cy.visit('https://qa.platoonco.com/pricing')
    cy.contains('No hidden fees. Pay as you grow')
      .scrollIntoView()
      .should('be.visible')
    cy.contains('BASIC')
      .scrollIntoView()
      .should('be.visible')
    cy.contains('GROWTH')
      .scrollIntoView()
      .should('be.visible')
    cy.contains('ENTERPRISE')
      .scrollIntoView()
      .should('be.visible')
  })

  it('pricing page shows correct prices', () => {
    cy.visit('https://qa.platoonco.com/pricing')
    cy.contains('₦250')
      .scrollIntoView()
      .should('be.visible')
    cy.contains('₦2,500')
      .scrollIntoView()
      .should('be.visible')
    cy.contains('₦3,000')
      .scrollIntoView()
      .should('be.visible')
  })

  it('pricing page shows correct CTA buttons', () => {
    cy.visit('https://qa.platoonco.com/pricing')
    cy.contains('Go Basic')
      .scrollIntoView()
      .should('be.visible')
    cy.contains('Get Growth')
      .scrollIntoView()
      .should('be.visible')
    cy.contains('Contact Sales')
      .scrollIntoView()
      .should('be.visible')
  })

  // EMAIL SUBSCRIBE
  it('subscribe rejects empty email', () => {
    cy.visit('https://qa.platoonco.com/about')
    cy.get('input[placeholder="Your email"]')
      .scrollIntoView()
    cy.contains('Subscribe').click()
    cy.get('input[placeholder="Your email"]')
      .then($input => {
        expect($input[0].validationMessage).to.not.be.empty
      })
  })

  it('subscribe accepts valid email', () => {
    const timestamp = Date.now()
    cy.visit('https://qa.platoonco.com/about')
    cy.get('input[placeholder="Your email"]')
      .scrollIntoView()
      .type(`test${timestamp}@yopmail.com`)
    cy.contains('Subscribe').click()
  })

})
