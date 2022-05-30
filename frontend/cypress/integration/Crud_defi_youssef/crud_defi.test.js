Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})
describe('add defi works ', () => {
	it('add a defi ', () => {
		cy.visit('http://localhost:3000/addChallenge')
		cy.get('[data-testid="link"]').type('youtube.com')
		cy.get('[data-testid="goal"]').type('100Kg')
		cy.get('[data-testid="add-defi"]').click()
		cy.visit('http://localhost:3000/challenge')
	})
})
