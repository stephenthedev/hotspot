const app = require('../app.js');
const should = require('should');
const supertest = require('supertest');

describe('/alive', () => {
  it('should return an alive message', done => {
    supertest(app)
<<<<<<< HEAD
    .get('alive')
    .end((err, res) => {
      res.text.should.equal('Johnny Five is alive!');
      done();
    });
=======
      .get('/alive')
      .end((err, res) => {
        res.text.should.equal('Johnny Five is Alive!');
        done();
      });
>>>>>>> a5d4a148386296b93963dbe96a899075d7fef326
  });
});
