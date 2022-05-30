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
	  
  	//test get all challenges youssef_CrudChallenge.test.js
	  it('GET api/challenges should show all challenges', async () => {
		const res = await requestWithSupertest.get('/api/challenges')
		expect(res.status).toEqual(200)
		console.log(res.body.length)
	})
	//test get one challenge youssef_CrudChallenge.test.js
	it('GET api/challenge/:id should return challenge by ID', async () => {
		const chllgId = '6292ac340749749d7633a7f0'
		const res = await requestWithSupertest.get(`/api/challenge/${chllgId}`)
		expect(res.status).toEqual(200)
		console.log(res.body.length)
	})
	//test update one challenge youssef_CrudChallenge.test.js
	it('PUT api/challenge/:id should update challenge by ID', async () => {
		const challenge = {
			link: 'www.challenge.com',
			goal: 'Run 12kmm',
			done: 'false',
		}
		const chllgId = '6292b192b5d605e58da8e16c'
		const challengeRes = await requestWithSupertest
			.put(`/api/challenge/${chllgId}`)
			.send(challenge)
		console.log()
		expect(challengeRes.status).toEqual(200)
		
	})
	//test delete one challenge youssef_CrudChallenge.test.js
	it('DELETE api/challenge/:id should delete challenge by ID', async () => {
		const chllgId = '6292b9a026612f3c32b403e5'
		const res = await requestWithSupertest.delete(`/api/challenge/${chllgId}`)
		expect(res.status).toEqual(200)
		console.log(res.body.length)
	})
	//test post challenges youssef_CrudChallenge.test.js
	it('POST /api/challenge should add a challenge', async () => {
		const challenge = {
			link: 'www.challenge.com',
			goal: 'Run 12km',
			done: 'true',
		}
		const challengeRes = await requestWithSupertest.post('/api/challenge').send(challenge)
		console.log()
		expect(challengeRes.statusCode).toEqual(200)
		const res = await requestWithSupertest.get(`/api/challenge/${challengeRes.body._id}`)
		expect(challengeRes.body.goal).toEqual('Run 12km')
	})
		//test get events youssef_CrudEvent.test.js
		it('GET api/events should show all Eventes', async () => {
			const res = await requestWithSupertest.get('/api/events')
			expect(res.status).toEqual(200)
			console.log(res.body.length)
		})
		//test get one event youssef_CrudEvent.test.js
		it('GET api/event/:id should return event by ID', async () => {
			const eventId = '6286cbfb39a9dedb0376607a'
			const res = await requestWithSupertest.get(`/api/event/${eventId}`)
			expect(res.status).toEqual(200)
			console.log(res.body.length)
		})
		//test Post event youssef_CrudEvent.test.js
		it('POST /api/event should add  all events', async () => {
			const event = {
				title: 'boxe',
				description: 'round 1',
				dateDebut: '2022-05-19T00:05:43.000+00:00',
				dateFin: '2022-05-19T00:05:43.000+00:00',
				hour: '12:00pm',
				place: 'salle le bardo',
				visibility: 'true',
			}
			const eventRes = await requestWithSupertest.post('/api/event').send(event)
			console.log()
			expect(eventRes.statusCode).toEqual(200)
			const res = await requestWithSupertest.get(`/api/event/${eventRes.body._id}`)
			expect(eventRes.body.title).toEqual('boxe')
		})
		//test delete one Event youssef_CrudEvent.test.js
		it('DELETE api/event/:id should delete event by ID', async () => {
			const eventId = '6292b7cb803f404791fa3d3d'
			const res = await requestWithSupertest.delete(`/api/event/${eventId}`)
			expect(res.status).toEqual(200)
			console.log(res.body.length)
		})
			//test get listeSession youssef_ListSession.test.js
		it('GET api/listSession should show all session', async () => {
		const res = await requestWithSupertest.get('/api/listSession')
		expect(res.status).toEqual(200)
		console.log(res.body.length)
	})
		//test Post session youssef_session.test.js
		it('POST /api/session should add a session', async () => {
			const session = {
				day: '2022-05-19T00:05:43.000+00:00',
				hour: '12:00pm',
				cancellation: 'annulation de la séance',
				reason: 'maladie',
				feedback: 'very good session',
			}
			const sessRes = await requestWithSupertest.post('/api/newSession').send(session)
			console.log()
			expect(sessRes.statusCode).toEqual(404)
			const res = await requestWithSupertest.get(`/api/newSession/${sessRes.body._id}`)
			expect(sessRes.body.day).toEqual('2022-05-19T00:05:43.000+00:00')
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
		const statisticId = '62727aa238785c8b4cd4890f'
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
		const viewProfileId = '5e9f9b9f9b9f9b9f9b9f9e21'
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
	/*it('PUT /api/statistic/:id should update a statistic', async () => {
		const statisticUpdate = '62727aa238785c8b4cd4890f'
		const statisticRes = await requestWithSupertest.put(
			`/api/statistic/${statisticUpdate}`
		).send({})
		console.log()
		expect(statisticRes.statusCode).toEqual(200)
	})*/
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

/* 
      -------------------------------------------------------------------------------
                            IHEB SLIMEN TESTS
      ------------------------------------------------------------------------------------ */

      

  ///// signup tests
 
  it('POST /api/signup should add a coach', async () => {
	const coach = {
	  firstname: 'test1',
	  lastname:'test1',
	  birthDate: '04/08/1998'
	}
	const signupRes = await requestWithSupertest.post('/api/signup').send(coach);
	console.log()
	expect(signupRes.statusCode).toEqual(200);
  });
  it('POST /api/signup should not add a coach with empty properties', async () => {
	const coach = {
	  firstname: '',
	  lastname:'',
	  birthDate: ''
	}
	const signupRes = await requestWithSupertest.post('/api/signup').send(coach);
	console.log()
	expect(signupRes.statusCode).toEqual(404);
  });
  it('POST /api/signup should  not add a coach with missing property', async () => {
	const coach ={}
	const signupRes = await requestWithSupertest.post('/api/signup').send(coach);
	console.log()
	expect(signupRes.statusCode).toEqual(404);
  });
  it('POST /api/signup should set new property to true', async () => {
	const coach = {
	  firstname: 'test1',
	  lastname:'test1',
	  birthDate: '04/08/1998',
	  new : 'false'
	}
	const signupRes = await requestWithSupertest.post('/api/signup').send(coach);
	console.log(signupRes)
	expect(signupRes.statusCode).toEqual(200);
  }); 


  ///// update coach tests
   it('PUT /coachUpdate/:id should update all this coach properties', async () => {
	const coachToUpdate = {
	  firstname: 'iheb',
	  lastname:'slimen',
	  birthDate: '04/08/98',
	  new : false,
	  password: '0000000',
	  email: 'ihebplt1@gmail.com',
	  photo: 'ihebface',
	  sex: 'bitbi3a male',
	  alerts: ['type1','type2'],
	  discipline : 'judo'
	}
	const res = await requestWithSupertest.put('/api/coachUpdate/6292f08e2e1fc0f5225f4856').send(coachToUpdate);
	console.log()
	expect(res.statusCode).toEqual(200);
  });
  it('PUT /coachUpdate/:id should update subset of this coach', async () => {
	const coachToUpdate = {
	  firstname: 'iheb',
	  lastname:'slimen',
	  birthDate: '04/08/98',
	  new : 'false',
	}
	const res = await requestWithSupertest.put('/api/coachUpdate/6292f08e2e1fc0f5225f4856').send(coachToUpdate);
	console.log()
	expect(res.statusCode).toEqual(200);
  });

  it('PUT /coachUpdate/:id should update all this coach properties', async () => {
	const coachToUpdate = {
	  firstname: 'iheb',
	  lastname:'',
	  birthDate: '04/08/98',
	  new : 'false',
	  password: '',
	  email: 'ihebplt1@gmail.com',
	 
	}
	const res = await requestWithSupertest.put('/api/coachUpdate/6292f08e2e1fc0f5225f4856').send(coachToUpdate);
	console.log()
	expect(res.statusCode).toEqual(404);
  }); 

  // login test1


  it('POST /login should login this user', async () => {
	const userToLogin = {
	  password: '12345678',
	  email: 'gammoudi@player.com',
	 
	}
	const res = await requestWithSupertest.post('/api/login').send(userToLogin);
	console.log()
	expect(res.statusCode).toEqual(200);
  });
  it('POST /login should not login with wrong email and password', async () => {
	const userToLogin = {
	  password: '1234567',
	  email: 'gammoudi@player.co',
	 
	}
	const res = await requestWithSupertest.post('/api/login').send(userToLogin);
	console.log()
	expect(res.statusCode).toEqual(404);
  });
  it('POST /login should not pass empty fields', async () => {
	const userToLogin = {
	  password: '',
	  email: '',
	 
	}
	const res = await requestWithSupertest.post('/api/login').send(userToLogin);
	console.log()
	expect(res.statusCode).toEqual(404);
  }); 

  /// alerts test
   it('GET api/alerts should show all alerts', async () => {
	const res = await requestWithSupertest.get('/api/alerts');
	  expect(res.status).toEqual(200);
	  console.log(res.body.length)
  }); 

  // session cancel test 
   it('PUT /sessionCancel/:id should cancel this session', async () => {
	const session = {
	  cancellation: true,
	  reason:  'bledet test',
	}
	const res = await requestWithSupertest.put('/api/sessionCancel/6282bc1aa7beeceeb106a67d').send(session);
	console.log()
	expect(res.statusCode).toEqual(200);
  }); 
   it('PUT /sessionCancel/:id should not cancel this session with no reason', async () => {
	const session = {
	  cancellation: true,
	  reason:  '',
	}
	const res = await requestWithSupertest.put('/api/sessionCancel/62859b3ec23b70bd20795d17').send(session);
	console.log()
	expect(res.statusCode).toEqual(404);
  });
  it('PUT /sessionCancel/:id should not reactivate a cancel session ', async () => {
	const session = {
	  cancellation: true,
	  reason:  'lkdnf',
	}
	const res = await requestWithSupertest.put('/api/sessionCancel/6282bc1aa7beeceeb106a67d').send(session);
	console.log()
	expect(res.statusCode).toEqual(404);
  });
  it('PUT /sessionCancel/:id should not cancel this session', async () => {
	const session = {
	  
	}
	const res = await requestWithSupertest.put('/api/sessionCancel/62859b3ec23b70bd20795d17').send(session);
	console.log()
	expect(res.statusCode).toEqual(404);
  }); 

  /// feedback tests
   it('PUT /sessionFeedback/:id should give feedback to this session', async () => {
	const session = {
	  feedback : 'great session'
	  
	}
	const res = await requestWithSupertest.put('/api/sessionFeedback/62859b3ec23b70bd20795d17').send(session);
	console.log()
	expect(res.statusCode).toEqual(200);
  });
  it('PUT /sessionFeedback/:id should not give empty feedback to session', async () => {
	const session = {
	  feedback : ''
	  
	}
	const res = await requestWithSupertest.put('/api/sessionFeedback/62859b3ec23b70bd20795d17').send(session);
	console.log()
	expect(res.statusCode).toEqual(404);
  });
  it('PUT /sessionFeedback/:id should not accept undefined feedback', async () => {
	const session = {
	  
	}
	const res = await requestWithSupertest.put('/api/sessionFeedback/62859b3ec23b70bd20795d17').send(session);
	console.log()
	expect(res.statusCode).toEqual(404);
  }); 

  //// assign challenge to players

   it('PUT /assignChallengePlayer/:id should assigne challange to players', async () => {
	const challenge = {
	  idPlayers: ['5e9f9b9f9b9f9b9f9b9f9e11',"62487882a4ef81986e1a8ad0"]
	  
	}
	const res = await requestWithSupertest.put('/api/assignChallengePlayer/6252d30f1b3e5d84beafd947').send(challenge);
	console.log()
	expect(res.statusCode).toEqual(200);
  });



  ///// crud place test

  it('GET api/place/:id should show this existed place', async () => {
	const res = await requestWithSupertest.get('/api/place/5e9f9b9f9b9f9b9f9b9f9ba1');
	  expect(res.status).toEqual(200);
	  console.log(res.body.length)
  });
  it('GET /getProfileByCoach/:id should not return anything if place id does not exist', async () => {
	const res = await requestWithSupertest.get('/api/place/badRequest');
	  expect(res.status).toEqual(400);
	  console.log(res.body.length)
  }); 

  /////
  /// view player test 


   it('GET /viewProfile/:id should show all player information', async () => {
	const res = await requestWithSupertest.get('/api/getProfileByCoach/5e9f9b9f9b9f9b9f9b9f9e11');
	  expect(res.status).toEqual(200);
  });
  it('GET /viewProfile/:id should not return anything if place id does not exist', async () => {
	const res = await requestWithSupertest.get('/api/getProfileByCoach/badID');
	console.log(res.body)
	  expect(res.status).toEqual(404);
  }); 



  //// challenge list & done test
  
   it('PUT api/challenge/:id should set done to true', async () => {
	const challenge = {
	  done: true
	}
	const res = await requestWithSupertest.put('/api/challenge/6252d30f1b3e5d84beafd947').send(challenge);
	console.log()
	expect(res.statusCode).toEqual(200);
  });
  it('PUT api/challenge/:id should not set done to false', async () => {
	const challenge = {
	  done: false
	}
	const res = await requestWithSupertest.put('/api/challenge/6252d30f1b3e5d84beafd947').send(challenge);
	console.log()
	expect(res.statusCode).toEqual(404);
  });
  it('PUT api/challenge/:id should not set done to empty ', async () => {
	const challenge = {
	  done: undefined
	}
	const res = await requestWithSupertest.put('/api/challenge/6252d30f1b3e5d84beafd947').send(challenge);
	console.log()
	expect(res.statusCode).toEqual(404);
  });

  it('GET /challenges should show all challenges', async () => {
	const res = await requestWithSupertest.get('/api/challenges');
	console.log(res.body)
	  expect(res.status).toEqual(200);
  });

})


