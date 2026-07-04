describe('KYC - Account Verification', () => {

beforeEach(() => {
  cy.visit('https://biz.qa.platoonco.com/login')
  cy.get('#Email').type('kycaccount@yopmail.com')
  cy.get('#password').type('Password@123')
  cy.get('button').contains('Login').click({timeout: 4000})
})

  // VERIFICATION
  it('Shows Verification Required or Approval Pending', () => {
    cy.contains(/Approval Pending|Verification Required/i).should('be.visible')
    })

 it('Check Status Or Verify Account buttons work', () => {
  cy.contains(/Approval Pending|Verification Required/i).should('be.visible')
  cy.get('button').contains(/Verify Account|Check Status/i).click({force: true})
  cy.url().should('include', '/dashboard/account-verification')
})

  // PAGE LOAD
  it('Check Status Or Verify Account buttons work', () => {
  cy.contains(/Approval Pending|Verification Required/i).should('be.visible')
  cy.get('button').contains(/Verify Account|Check Status/i).click({force: true})
  cy.url().should('include', '/dashboard/account-verification')
  cy.contains('Account Verification').should('be.visible')
  cy.get('#Name').type('Jane', {force: true})
  cy.get('#middleName').type('Doe', {force: true})
  cy.get('#lastName').type('QA', {force: true})
  cy.get('#Email').type('kycaccount@yopmail.com', {force: true})
  cy.get('#Telephone').type('09012344567', {force: true})
  cy.get('input[placeholder="Select Gender"]')
    .should('be.visible')
    .click({ force: true })
  cy.contains('Male')
    .should('be.visible')
    .click({ force: true, scrollBehavior: false })
   cy.get('input[placeholder="Select Country"]').should('be.visible').click({force:true})
   cy.contains('Nigeria').should('be.visible').click({force: true})
  cy.get('#bvn').type('00000000000', {force: true})
  cy.get('#Telephone').type('09012344567', {force: true})
  cy.get('#address').type('123, QA Testing lane', {force: true})


  
   })

  it('shows Clear All and Submit buttons', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/account-verification')
    cy.contains('Clear All').should('be.visible')
    cy.contains('Submit').should('be.visible')
  })

  // BUSINESS DOCUMENTS
  it('shows business documents section', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/account-verification')
    cy.contains('Business documents').should('be.visible')
    cy.contains('Select company type').should('be.visible')
  })

  it('shows company type dropdown', () => {
    cy.visit('https://biz.qa.platoonco.com/dashboard/account-verification')
    cy.contains('Select type').should('be.visible')
  })

  // VALIDATION
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

// BUSINESS DOCUMENTS
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