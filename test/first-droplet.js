var should = require('should');
var runPublisher = require('../lib/run-publisher.js');
var config = require('../config');

describe("First set of unit tests", () => {
  describe('when running the publisher', () => {
    it('then it will return the queueName passed in', () => {
      // arrange
      var queueName = 'pellets';

      // act
      runPublisher(config.amqpUrl, queueName, 'doh').
      then(actualQueueName => // assert
      actualQueueName.should.eventually.eql(queueName));
    });

    xit('then it will return the queueName and message passed in');
  });
});