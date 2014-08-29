var runPublisher = require('./lib/run-publisher'),
    runConsumerOne = require('./lib/run-consumer-one'),
    config = require('./config');

var q = 'droplets',
    url = config.amqpUrl,
    message = JSON.stringify({ "poop": "yay" });

runPublisher(url, q, message).
then(function(queueName) {
  runConsumerOne(url, queueName);
});