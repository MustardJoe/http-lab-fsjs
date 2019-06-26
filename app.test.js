const request = require('supertest');
const app = require('./lib/app');

describe('routing http paths with our server', () => {

  it('shows the welcome page', done => {
    request(app)
      .get('/')
      .then(res => {
        //res.status & res.status
        expect(res.text).toEqual(expect.stringContaining('raptors'));
        done();
      });
  });

  it('has the red route', done => {
    request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toContain('red');
        done();
      });
  });
});
