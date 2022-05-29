Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})

describe('Add a Competence ', () => {
	it('should add ', () => {
		cy.visit('http://localhost:3000/addCompetence')
		cy.get('[data-test-id="name"]').type('Running').should('exist')
		cy.get('[data-testid="link"]').type('www.youtube.com')
		cy.get('[data-testid="description"]').type('Run 20km')

		cy.get('[data-testid="addCompetence"]').click()
		cy.url().should('include', '/competence')
	})
})
