describe('Fund Wallet', () => {

  beforeEach(() => {
    cy.login()
  })

  // ---- PAGE LOAD ----
  it('shows wallet section on dashboard', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/home')
    cy.contains('Wallet').should('be.visible')
    cy.contains('Total Balance').should('be.visible')
    cy.contains('Manage Wallet').should('be.visible')
  })

  it('Manage Wallet button goes to wallet page', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/home')
    cy.contains('Manage Wallet').click()
    cy.url().should('include', '/mywallet/accounts')
  })

  it('wallet page loads correctly', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/mywallet/accounts')
    cy.contains('Wallet Balance').should('be.visible')
  })

  it('shows account details to fund wallet', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/mywallet/accounts')
    cy.contains('Account number').should('be.visible')
    cy.contains('Accouunt Name').should('visible')
  })

})