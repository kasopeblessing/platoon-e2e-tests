describe('Login Page', () => {

  beforeEach(() => {
    cy.visit('https://biz.qa.platoonco.com/login')
  })

  // PAGE LOAD
  it('loads the login page correctly', () => {
    cy.contains('Forgot password?').should('be.visible')
    cy.contains('Create account').should('be.visible')
  })

  it('shows email and password fields', () => {
    cy.get('#Email').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.contains('Login').should('be.visible')
  })

  // VALIDATION
  it('blocks login with empty fields', () => {
    cy.get('button').contains('Login').click()
    cy.url().should('include', '/login')
  })

  it('blocks login with wrong password', () => {
    cy.get('#Email').type('demo1@yopmail.com')
    cy.get('#password').type('wrongpassword123')
    cy.get('button').contains('Login').click()
    cy.url().should('include', '/login')
  })

  it('blocks login with invalid email format', () => {
    cy.get('#Email').type('notanemail')
    cy.get('#password').type('Password123')
    cy.get('button').contains('Login').click()
    cy.url().should('include', '/login')
  })

  // LINKS
  it('forgot password link goes to correct page', () => {
    cy.contains('Forgot password?').click()
    cy.url().should('include', '/forgotten')
  })

  it('create account link goes to signup page', () => {
    cy.contains('Create account').click()
    cy.url().should('include', '/signup')
  })

  // SUCCESSFUL LOGIN
  it('logs in with valid credentials', () => {
    cy.get('#Email').type('demo1@yopmail.com')
    cy.get('#password').type('Password@123')
    cy.get('button').contains('Login').click()
    cy.url({ timeout: 10000 }).should('include', '/dashboard')
  })

})