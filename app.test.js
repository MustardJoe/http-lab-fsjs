const request = require('supertest');
const app = require('./lib/app');

describe('application routes', () => {
  it('requires a list of dogs', () => {
    return request(app)
      .get('/')
      .then(res => {
        //res.status & res.status
        expect(res.text).toEqual(expect.stringContaining('spot'));
      });
  });
});
