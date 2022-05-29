const server = require('../server.js')
const supertest = require('supertest')
const { response } = require('../server.js')
const requestWithSupertest = supertest(server)

describe('Coach and Player Endpoints', () => {
	it('GET api/sessions should show all sessions', async () => {
		const res = await requestWithSupertest.get('/api/sessions')
		expect(res.status).toEqual(200)
		console.log(res.body.length)
	})
	it('GET /api/programs should show all programs', async () => {
		const res = await requestWithSupertest.get('/api/programs')
		expect(res.status).toEqual(200)
		console.log(res.body.length)
	})
	it('POST /api/place should add a place  all places', async () => {
		const place = {
			Name: 'Tunis',
			countryState: 'Tunisia',
			country: 'tunisia',
			address: '1, Rue med 5 , Tunis',
		}
		const placeRes = await requestWithSupertest.post('/api/place').send(place)
		console.log()
		expect(placeRes.statusCode).toEqual(201)
		const res = await requestWithSupertest.get(`/api/place/${placeRes.body._id}`)
		expect(placeRes.body.Name).toEqual('Tunis')
	})
	// test GET ALL COMPETENCES chadha_hajji_crudComp.js
	it('GET api/competences should show all competences', async () => {
		const res = await requestWithSupertest.get('/api/competences')
		expect(res.status).toEqual(200)
		console.log(res.body.length)
	})
	// test GET ALL STATISTICS chadha_hajji_crudStat.js
	it('GET api/statistics should show all statistics', async () => {
		const res = await requestWithSupertest.get('/api/statistics')
		expect(res.status).toEqual(200)
		console.log(res.body.length)
	})
	// test ADD COMPETENCE chadha_hajji_crudComp.js
	it('POST /api/competence should add a competence', async () => {
		const competence = {
			name: 'Running',
			description: 'Run 12km',
			link: 'www.youtube.com',
			visibility: 'true',
			stars: 3,
		}
		const competenceRes = await requestWithSupertest
			.post('/api/competence')
			.send(competence)
		console.log()
		expect(competenceRes.statusCode).toEqual(200)
		const res = await requestWithSupertest.get(`/api/competence/${competenceRes.body._id}`)
		expect(competenceRes.body.name).toEqual('Running')
	})
	// test ADD STATISTIC chadha_hajji_crudStat.js
	it('POST /api/statistic should add a statistic', async () => {
		const statistic = {
			type: 'Timer',
			unit: 'km',
			title: 'Squats',
			description: 'Do 100 squats',
			link: 'www.fitnessApp.com',
			visibility: 'true',
			currentState: '56',
			minMax: 'Minimiser',
			statAlert: 'false',
		}
		const statisticRes = await requestWithSupertest.post('/api/statistic').send(statistic)
		console.log()
		expect(statisticRes.statusCode).toEqual(200)
		const res = await requestWithSupertest.get(`/api/statistic/${statisticRes.body._id}`)
		expect(statisticRes.body.title).toEqual('Squats')
	})
	// test Invite Player chadha_hajji_invitePlayer.js
	it('POST /api/players should invite a player', async () => {
		const invitePlayer = {
			firstname: 'chadha',
			lastname: 'hajji',
			email: 'chadha.hadji@gmail.com',
			sessionPrice: '10',
			sessionNumbers: '3',
			password: '12345678',
		}
		const invitePlayerRes = await requestWithSupertest
			.post('/api/players')
			.send(invitePlayer)
		console.log()
		expect(invitePlayerRes.statusCode).toEqual(200)
		const res = await requestWithSupertest.get(`/api/players/${invitePlayerRes.body._id}`)
		expect(invitePlayerRes.body.email).toEqual('chadha.hadji@gmail.com')
	})
	// test GET ONE STATISTIC chadha_hajji_crudStat.js
	it('GET api/statistic/:id should return statistic by its ID', async () => {
		const statisticId = '6292c99a81f5fcce948275f1'
		const res = await requestWithSupertest.get(`/api/statistic/${statisticId}`)
		expect(res.status).toEqual(200)
		console.log(res.body.length)
	})
	// test GET ONE COMPETENCE chadha_hajji_crudComp.js
	it('GET api/competence/:id should return competence by its ID', async () => {
		const compId = '6271335ebb2a72a1f95166bf'
		const res = await requestWithSupertest.get(`/api/competence/${compId}`)
		expect(res.status).toEqual(200)
		console.log(res.body.length)
	})
	// test ONE SESSION chadha_hajji_sessionDetails.js
	it('GET api/sessionDetails/:id should return a session by its ID', async () => {
		const sessionId = '6282bc1aa7beeceeb106a67b'
		const res = await requestWithSupertest.get(`/api/sessionDetails/${sessionId}`)
		expect(res.status).toEqual(200)
		console.log(res.body.length)
	})
	// test GET PROFILE PLAYER BY ID chadha_hajji_viewProfile.js
	it('GET api/viewProfile/:id should return player s profile by its ID', async () => {
		const viewProfileId = '5e9f9b9f9b9f9b9f9b9f9e11'
		const res = await requestWithSupertest.get(`/api/viewProfile/${viewProfileId}`)
		expect(res.status).toEqual(200)
		console.log(res.body.length)
	})
	// test UPDATE COMPETENCE chadha_hajji_crudComp.js
	it('PUT /api/competence/:id should update a competence', async () => {
		const compUpdate = '6271335ebb2a72a1f95166bf'
		const compUpdateRes = await requestWithSupertest.put(`/api/competence/${compUpdate}`)
		console.log()
		expect(compUpdateRes.statusCode).toEqual(200)
		// const res = await requestWithSupertest.get(`/api/statistic/${compUpdateRes.body._id}`)
		// expect(compUpdateRes.body.title).toEqual('Squats')
	})
	// test UPDATE STATISTIC chadha_hajji_crudStat.js
	it('PUT /api/statistic/:id should update a statistic', async () => {
		const statisticUpdate = '6292c99a81f5fcce948275f1'
		const statisticRes = await requestWithSupertest.put(
			`/api/statistic/${statisticUpdate}`
		)
		console.log()
		expect(statisticRes.statusCode).toEqual(200)
	})
	// test DELETE STATISTIC chadha_hajji_crudStat.js
	// it('DELETE /api/statistic/:id should delete a statistic', async () => {
	// 	const statisticDelete = '6292c9794de8f1f6d76060b0'
	// 	const statisticDeleteRes = await requestWithSupertest.delete(
	// 		`/api/statistic/${statisticDelete}`
	// 	)
	// 	console.log()
	// 	expect(statisticDeleteRes.statusCode).toEqual(200)
	// })
	// test DELETE COMPETENCE chadha_hajji_crudComp.js
	// it('DELETE /api/competence/:id should delete a competence', async () => {
	// 	const competenceDelete = '623c88f9e5cec2f3a2a45d90'
	// 	const competenceDeleteRes = await requestWithSupertest.delete(
	// 		`/api/competence/${competenceDelete}`
	// 	)
	// 	console.log()
	// 	expect(competenceDeleteRes.statusCode).toEqual(200)
	// })
})
