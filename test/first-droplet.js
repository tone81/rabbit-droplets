var should = require('should'),
    runPublisher = require('../lib/run-publisher.js'),
    config = require('../config');

describe("First set of unit tests", function() {
  describe('when running the publisher', function() {
    it('then it will return the queueName passed in', function() {
      // arrange
      var queueName = 'pellets';

      // act
      runPublisher(config.amqpUrl, queueName, 'doh').
      then(function(actualQueueName) {
        // assert
        return actualQueueName.should.eventually.eql(queueName);
      });
    });

    xit('then it will return the queueName and message passed in');
  });
});