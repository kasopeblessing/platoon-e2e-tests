describe('Create Account Page', () => {

  beforeEach(() => {
    cy.visit('https://biz.qa.platoonco.com/signup')
  })

  // PAGE LOAD
  it('loads the signup page correctly', () => {
    cy.contains('Get started with Platoon').should('be.visible')
    cy.contains('Fill in your details below to create an account').should('be.visible')
  })

  it('shows all form fields', () => {
    cy.get('#Email').should('be.visible')
    cy.get('#company_name').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.contains('Create Account').should('be.visible')
  })

  it('shows terms and privacy policy links', () => {
    cy.contains('Terms').should('be.visible')
    cy.contains('Privacy Policy').should('be.visible')
  })

  it('shows already have an account login link', () => {
    cy.contains('Already have an account?').should('be.visible')
    cy.contains('Login').should('be.visible')
  })

  // VALIDATION
  it('blocks signup with empty fields', () => {
    cy.contains('Create Account').click()
    cy.url().should('include', '/signup')
  })

  it('blocks signup with invalid email format', () => {
    cy.get('#Email').type('notanemail')
    cy.get('#company_name').type('Test Company')
    cy.get('#password').type('Password123!')
    cy.contains('Create Account').click()
    cy.url().should('include', '/signup')
  })

  it('shows strong password strength with valid password', () => {
    cy.get('#password').type('Password123!')
    cy.contains('Strong').should('be.visible')
  })

  it('password meets all requirements', () => {
    cy.get('#password').type('Password123!')
    cy.contains('8+ Characters').should('be.visible')
    cy.contains('Uppercase Letter').should('be.visible')
    cy.contains('Lowercase Letter').should('be.visible')
    cy.contains('Number').should('be.visible')
  })

  // LOGIN LINK
  it('login link goes to login page', () => {
    cy.contains('Login').click()
    cy.url().should('include', '/login')
  })

  // SUCCESSFUL SIGNUP
it('creates account with valid details', () => {
    const timestamp = Date.now()

    cy.get('input[id="email"], input[id="Email"]').should('be.visible')
      .type(`testuser${timestamp}@yopmail.com`)
      
    cy.get('input[id="company_name"]').should('be.visible')
      .type(`Test Company ${timestamp}`)
      
    cy.get('input[id="password"]').should('be.visible')
      .type('Password123!')
      
    cy.get('input[id="confirmPassword"]').should('be.visible')
      .type('Password123!')

    cy.contains('button, input[type="submit"]', 'Create Account')
      .should('be.visible')
      .should('not.be.disabled')
      .click()

    cy.url({ timeout: 12000 }).should('not.include', '/signup')
  })

})