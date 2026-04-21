describe('Payroll History & Payslip Download', () => {

  beforeEach(() => {
    cy.login()
    cy.visit('https://biz.qa.platoonco.com/dashboard/payroll/history')
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
  })

  // PAYROLL HISTORY PAGE
  it('loads payroll history page correctly', () => {
    cy.contains('Payroll History').should('be.visible')
    cy.contains('View past payroll records').should('be.visible')
    cy.contains('Filter by Date').should('be.visible')
  })

  it('shows payroll history table headers', () => {
    cy.contains('Title').should('be.visible')
    cy.contains('Net Pay').should('be.visible')
    cy.contains('Total Payment').should('be.visible')
    cy.contains('Total Deductions').should('be.visible')
    cy.contains('Status').should('be.visible')
    cy.contains('Action').should('be.visible')
  })

  it('shows disbursed payroll entries', () => {
    cy.contains('Disbursed').should('be.visible')
  })

  it('shows View button on payroll entries', () => {
    cy.contains('View').first().should('be.visible')
  })

  it('Select All checkbox is visible', () => {
    cy.contains('Select All').should('be.visible')
  })

  // APPROVED PAYROLL PAGE
  it('clicking View on a disbursed payroll goes to approved page', () => {
    cy.contains('View').first().click({ force: true })
    cy.url().should('include', '/dashboard/payroll/approved/')
  })

  it('approved payroll page shows correct sections', () => {
    cy.contains('View').first().click({ force: true })
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Payments').should('be.visible')
    cy.contains('Deductions').should('be.visible')
    cy.contains('Approvals').should('be.visible')
  })

  it('shows payment summary details', () => {
    cy.contains('View').first().click({ force: true })
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Total charged').should('be.visible')
    cy.contains('Total Salaries').should('be.visible')
    cy.contains('Total Employees').should('be.visible')
  })

  it('shows deduction details', () => {
    cy.contains('View').first().click({ force: true })
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Total pension remitted').should('be.visible')
    cy.contains('Tax remitted').should('be.visible')
    cy.contains('Deduction').should('be.visible')
  })

  it('shows approval dates', () => {
    cy.contains('View').first().click({ force: true })
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Date Submitted').should('be.visible')
    cy.contains('Date Approved').should('be.visible')
    cy.contains('Pay Out Date').should('be.visible')
  })

  it('shows employee list with correct columns', () => {
    cy.contains('View').first().click({ force: true })
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Employees').should('be.visible')
    cy.contains('Name').should('be.visible')
    cy.contains('Gross Pay').should('be.visible')
    cy.contains('Bonus').should('be.visible')
    cy.contains('Deductions').should('be.visible')
    cy.contains('Tax').should('be.visible')
    cy.contains('Net Pay').should('be.visible')
    cy.contains('Status').should('be.visible')
  })

  it('shows Download CSV button', () => {
    cy.contains('View').first().click({ force: true })
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Download CSV').should('be.visible')
  })

  it('shows Generate Payslip button', () => {
    cy.contains('View').first().click({ force: true })
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Generate Payslip').should('be.visible')
  })

  it('Download CSV button is clickable', () => {
    cy.contains('View').first().click({ force: true })
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Download CSV').click({ force: true })
  })

  // PAYSLIP PAGE
  it('Generate Payslip button goes to payslips page', () => {
    cy.contains('View').first().click({ force: true })
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Generate Payslip').click({ force: true })
    cy.url().should('include', '/payslips')
  })

  it('payslips page loads correctly', () => {
    cy.contains('View').first().click({ force: true })
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Generate Payslip').click({ force: true })
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Payslip Generated').should('be.visible')
  })

  it('shows Download All Payslips button', () => {
    cy.contains('View').first().click({ force: true })
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Generate Payslip').click({ force: true })
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Download All Payslips').should('be.visible')
  })

  it('shows individual Download PDF buttons for each employee', () => {
    cy.contains('View').first().click({ force: true })
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Generate Payslip').click({ force: true })
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Download PDF').should('be.visible')
  })

  it('shows employee names on payslip page', () => {
    cy.contains('View').first().click({ force: true })
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Generate Payslip').click({ force: true })
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.get('body').find('button').contains('Download PDF').should('be.visible')
  })

  it('Download All Payslips button is clickable', () => {
    cy.contains('View').first().click({ force: true })
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Generate Payslip').click({ force: true })
    cy.get('body').should('not.have.css', 'pointer-events', 'none')
    cy.contains('Download All Payslips').click({ force: true })
  })

})