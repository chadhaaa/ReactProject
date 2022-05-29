Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})

describe('Add a Statistic ', () => {
	it('should add ', () => {
		cy.visit('http://localhost:3000/addStat')
		cy.get('[data-testid="title"]').type('Running').should('exist')
		cy.get('[data-testid="link"]').type('www.google.com')
		cy.get('[data-testid="description"]').type('Run 20km')
		cy.get('[data-testid="currentState"]').type('4')

		cy.get('[data-testid="addStat"]').click()
		cy.url().should('include', '/getStat')
		cy.visit('http://localhost:3000/getStat')
	})
})
