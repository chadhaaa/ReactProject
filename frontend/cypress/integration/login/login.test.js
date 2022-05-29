// <reference types='cypress' />
Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})

const email = 'tennis@coach.com'
const mdp = '12345678'
<<<<<<< HEAD
describe('Login to account test ', () => {
	it('should login ', () => {
		cy.visit('http://localhost:3000/login')
		cy.get('[data-testid="email"]').type(email)
		cy.get('[data-testid="password"]').type(mdp)
=======
describe("Login to account test ",()=>{

    it('should login ',()=>{
        cy.visit("http://localhost:3001/login")
        cy.get('[data-testid="email"]').type(email)
        cy.get('[data-testid="password"]').type(mdp)
>>>>>>> 810a1cd51398e1ebf5f6286013520b87d95213e4

		cy.get('[data-testid="login"]').click()
		cy.url().should('include', '/program')
	})
})
describe('add program works ', () => {
	it('add a program ', () => {
		const title = 'program tennis'
		const messageFinale = `New program "${title}" is created `
		cy.visit('http://localhost:3000/program')
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
<<<<<<< HEAD
=======
describe("add program works ",()=>{
    it('add a program ',()=>{
        const title = 'program tennis koura';
        const messageFinale = `New program "${title}" is created `;
        cy.visit("http://localhost:3001/program");
        cy.get('[data-testid="add-program"]').click()
        cy.get('[data-testid="title"]').type(title)
        cy.get('[data-testid="link"]').type('http://localhost:3000/programs/progamTennis.pdf')
        cy.get('[data-testid="description"]').type('ce programme est dediée pour les personnes avancée dans le tennis')
        cy.get('[data-testid="picture"]').type("http://localhost:3000/images/programTennis.jpg")
        cy.get('[data-testid="add-program"]').click()
        cy.contains(messageFinale)
    })
    it('delete program',()=>{
        const title = 'program tennis koura';

        cy.visit("http://localhost:3001/program");
        cy.get('[data-testid="lastAddedelement"]').click()
        cy.contains(title).should('not.exist')

    })
})
>>>>>>> 810a1cd51398e1ebf5f6286013520b87d95213e4
