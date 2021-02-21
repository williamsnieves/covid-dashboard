describe('Dashboard suite test', () => {
it('Dashboard deaths block', () => {
    cy.visit('https://williamsnieves.github.io/covid-dashboard/')
    cy.findByText(/Total deaths/i).should('exist')
    cy.findByTestId('total-deaths').invoke('text').should('match', /\d+\W?/gm)
  })
  it('Dashboard people infected block', () => {
    cy.visit('https://williamsnieves.github.io/covid-dashboard/')
    cy.findByText(/People infected/i).should('exist')
    cy.findByTestId('people-infected').invoke('text').should('match', /\d+\W?/gm)
  })
})