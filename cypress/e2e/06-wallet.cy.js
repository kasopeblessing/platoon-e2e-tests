describe('Wallet', () => {

beforeEach(() => {
  cy.login()
})

  // PAGE LOAD
  it('shows wallet section on dashboard', () => {
    cy.contains('Wallet', {timeout: 10000}).should('be.visible')
    cy.contains('Total Balance').should('be.visible')
    cy.contains('Manage Wallet').should('be.visible')
  })

  it('Manage Wallet button goes to wallet page', () => {
    cy.contains('Manage Wallet').click({force: true})
    cy.url().should('include', '/mywallet/accounts')
    cy.contains('Wallet Balance').should('be.visible')
    cy.contains('Available balance').should('be.visible')
  })

  it('Transaction History loads properly', () => {
    cy.contains('Manage Wallet').click({force: true})
    cy.url().should('include', '/mywallet/accounts')
    cy.contains('Transaction History').click({force: true})
    cy.url().should('include', '/mywallet/transactions')
  })
    
})