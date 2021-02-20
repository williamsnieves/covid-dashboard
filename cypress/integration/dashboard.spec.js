describe('Dashboard suite test', () => {
it('Dashboard deaths block', () => {
    cy.visit('https://williamsnieves.github.io/covid-dashboard/')
    cy.findByText(/Total deaths/i).should('exist')
    cy.get(el).should('match.text', /\d+\W?/g);
  })
  it('Dashboard people infected block', () => {
    cy.visit('https://williamsnieves.github.io/covid-dashboard/')
    cy.findByText(/People infected/i).should('exist')
  })
})