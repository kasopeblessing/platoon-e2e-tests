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

  it('Book a Demo works', () => {
    cy.contains('Book a Demo')
      .click()
    cy.url()
      .should('include', '/contact')
    cy.contains('Talk to us about your payroll')
      .should('be.visible')
  })

})
