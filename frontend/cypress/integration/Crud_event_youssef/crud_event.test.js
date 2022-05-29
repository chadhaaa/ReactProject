describe('add event works ', () => {
	it('add a event ', () => {
		const title = 'ranning event'
		const messageFinale = `New program "${title}" is created `
		cy.visit('http://localhost:3001/program')
		cy.get('[data-testid="add-program"]').click()
		cy.get('[data-testid="title"]').type(title)
		cy.get('[data-testid="link"]').type('http://localhost:3000/programs/progamTennis.pdf')
		cy
			.get('[data-testid="description"]')
			.type('ce programme est dediée pour les personnes avancée dans le tennis')
		cy
			.get('[data-testid="picture"]')
			.type('http://localhost:3000/images/programTennis.jpg')
		cy.get('[data-testid="add-program"]').click()
		cy.contains(messageFinale)
	})
})
