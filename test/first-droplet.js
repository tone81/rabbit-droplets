var chai = require("chai"),
    chaiAsPromised = require("chai-as-promised"),
    proxyquire = require('proxyquire'),
    when = require('when');

chai.use(chaiAsPromised);

var stub = {},
    sut = proxyquire('../lib/run-publisher', { 'amqplib': stub });

var runPublisher = require('../lib/run-publisher'),
    config = require('../config');

describe("First set of unit tests", function() {
  describe('when running the publisher', function() {
    it('then it will return the queueName passed in', function() {
      // arrange
      var queueName = 'pellets';
      
      // act & assert
      return sut(config.amqpUrl, queueName, 'doh').
        should.eventually.equal(queueName);
    });

    xit('then it will return the queueName and message passed in');
  });
});