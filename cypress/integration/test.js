const server = require('../../backend/server');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);


describe('User Endpoints', () => {

    it('GET api/sessions should show all sessions', async () => {
      const res = await requestWithSupertest.get('/api/sessions');
        expect(res.status).toEqual(200);
        console.log(res.body.length)
    });
    it('GET /api/programs should show all programs', async () => {
        const res = await requestWithSupertest.get('/api/programs');
          expect(res.status).toEqual(200);
          console.log(res.body.length)
      });
      it('POST /api/place should add a place  all places', async () => {
        const place = {
            Name: 'Tunis',
            countryState:'Tunisia',
            country: 'tunisia',
            address:'1, Rue med 5 , Tunis'
        }
        const placeRes = await requestWithSupertest.post('/api/place').send(place);
        console.log()
        expect(placeRes.statusCode).toEqual(201);
        const res = await requestWithSupertest.get(`/api/place/${placeRes.body._id}`);
        expect(placeRes.body.Name).toEqual("Tunis");
      });
      it('POST /api/signup should add a coach', async () => {
        const coach = {
          firstname: 'tes1',
          lastname:'test1',
          birthDate: '04/08/1998'
        }
        const signupRes = await requestWithSupertest.post('/api/signup').send(coach);
        console.log()
        expect(signupRes.statusCode).toEqual(201);
        const res = await requestWithSupertest.get(`/api/signup/${signupRes.body._id}`);
        expect(signupRes.body.firstname).toEqual("test1");
      });
  
});