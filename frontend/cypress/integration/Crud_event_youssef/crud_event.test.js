Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})
describe('add event works ', () => {
	it('add a event ', () => {
		cy.visit('http://localhost:3000/addEvent')
		cy.get('[data-testid="title"]').type('boxe')
		cy.get('[data-testid="description"]').type('round 1')
		cy.get('[data-testid="dateDebut"]').type('2022-05-19T00:05:43.000+00:00')
		cy.get('[data-testid="dateFin"]').type('2022-05-19T00:05:43.000+00:00')
		cy.get('[data-testid="hour"]').type('12:00pm')
		cy.get('[data-testid="place"]').type('salle le bardo')
		cy.get('[data-testid="visibility"]').type('true')
		cy.get('[data-testid="add-event"]').click()
		cy.visit('http://localhost:3000/event')
	})
})
