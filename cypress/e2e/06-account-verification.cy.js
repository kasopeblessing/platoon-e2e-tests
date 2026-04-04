describe('KYC - Account Verification', () => {

beforeEach(() => {
  cy.visit('https://biz.qa.platoonco.com/login')
  cy.get('#Email').type('kycaccount@yopmail.com')
  cy.get('#password').type('Password@123')
  cy.get('button').contains('Login').click()
  cy.contains('CLOSE').click()
})

  // DASHBOARD VERIFICATION BANNER
  it('shows account verification banner on dashboard', () => {
    cy.contains('Account verification').should('be.visible')
    cy.contains('Take a few seconds to complete your account setup.')
      .should('be.visible')
  })

  /*
 it('verification banner arrow links to account verification page', () => {
  cy.contains('Account verification').parents('div').find('button').click()
  cy.url().should('include', '/dashboard/account-verification')
})
  */

  // PAGE LOAD
  it('loads the account verification page correctly', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/account-verification')
    cy.contains('Business owner information').should('be.visible')
    cy.contains('Business documents').should('be.visible')
  })

  // ---- BUSINESS OWNER FORM FIELDS ----
  it('shows all business owner form fields', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/account-verification')
    cy.get('input[placeholder="Johnston"]').should('be.visible')
    cy.get('input[placeholder="Gregory"]').should('be.visible')
    cy.get('input[placeholder="Damian"]').should('be.visible')
    cy.get('input[placeholder="johndamian@email.com"]').should('be.visible')
    cy.get('input[placeholder="08123456789"]').should('be.visible')
    cy.get('input[placeholder="22201234567"]').should('be.visible')
    cy.get('input[placeholder="Enter address"]').should('be.visible')
  })

  it('shows Clear All and Submit buttons', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/account-verification')
    cy.contains('Clear All').should('be.visible')
    cy.contains('Submit').should('be.visible')
  })

  // ---- BUSINESS DOCUMENTS ----
  it('shows business documents section', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/account-verification')
    cy.contains('Business documents').should('be.visible')
    cy.contains('Select company type').should('be.visible')
  })

  it('shows company type dropdown', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/account-verification')
    cy.contains('Select type').should('be.visible')
  })

  // ---- VALIDATION ----
  it('blocks submission with empty fields', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/account-verification')
    cy.contains('Submit').click()
    cy.url().should('include', '/account-verification')
  })

  /*
  it('Clear All button resets the form', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/account-verification')
    cy.get('input[placeholder="Johnston"]').type('John')
    cy.get('input[placeholder="Damian"]').type('Doe')
    cy.contains('Clear All').click()
    cy.get('input[placeholder="Johnston"]').should('not.have.value', '')
  })
*/

// ---- BUSINESS DOCUMENTS ----
it('shows business documents section', () => {
  cy.contains('Business documents').should('be.visible')
  cy.contains('Select company type').should('be.visible')
})

it('selecting company type shows required documents', () => {
  cy.contains('Business documents').scrollIntoView()
  cy.get('select').last().select('CAC')
  cy.contains('You are required to upload these documents').should('be.visible')
  cy.contains('CAC').should('be.visible')
  cy.contains('CAC BN1').should('be.visible')
  cy.contains('Proof of address').should('be.visible')
})

it('shows file upload areas with correct format info', () => {
  cy.get('select').last().select('CAC')
  cy.contains('JPEG, PNG and PDF formats only, of 5MB max').should('be.visible')
  cy.contains('Browse file').should('be.visible')
})

it('uploads a valid document for CAC', () => {
  cy.get('select').last().select('CAC')
  cy.get('input[type="file"]').first()
    .selectFile('cypress/fixtures/test-document.jpg', { force: true })
})

it('shows terms and privacy policy before submit', () => {
  cy.contains('By clicking submit, you agree to the').should('be.visible')
  cy.contains('Terms and condition').should('be.visible')
  cy.contains('Privacy Policy').should('be.visible')
})
})