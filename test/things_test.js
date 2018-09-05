var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;

process.env.MONGOLAB_URI = 'mongodb://localhost/things_test';
require(__dirname + '/../server');
var mongoose = require('mongoose');
var Thing = require(__dirname + '/../models/thing');

describe('thing routes', function() {
  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      done();
    });
  });

  it('should be able to create a thing', function(done) {
    var thingData = {name: 'test thing'};
    chai.request('localhost:3000')
      .post('/api/things')
      .send(thingData)
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.name).to.eql('test thing');
        expect(res.body).to.have.property('_id');
        done();
      });
  });

  it('should be able to get all da things', function(done) {
    chai.request('localhost:3000')
      .get('/api/things')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(Array.isArray(res.body)).to.eql(true);
        done();
      });
  });

  describe('needs a thing', function() {
    beforeEach(function(done) {
      (new Thing({name: 'test thing'})).save(function(err, data) {
        expect(err).to.eql(null);
        this.thing = data;
        done();
      }.bind(this));
    });

    it('should be able to modify a thing', function(done) {
      chai.request('localhost:3000')
        .put('/api/things/' + this.thing._id)
        .send({name: 'a different thing name'})
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res.body.msg).to.eql('success!');
          done();
        });
    });

    it('should be able to murder a thing', function(done) {
      chai.request('localhost:3000')
        .delete('/api/things/' + this.thing._id)
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res.body.msg).to.eql('success!');
          done();
        });
    });
  });
});
