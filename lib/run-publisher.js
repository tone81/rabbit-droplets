var amqplib = require('amqplib');

function runPublisher(url, queueName, message) {
  // Publisher
  return amqplib.connect(url).then(function(conn) {
    var ok = conn.createChannel();
    ok = ok.then(function(ch) {
      ch.assertQueue(queueName);
      ch.sendToQueue(queueName, new Buffer(message));
      ch.sendToQueue(queueName, new Buffer(message));
    });
    return ok;
  }).
  then(null, console.warn).
  then(function() {
    return queueName;
  });
};

module.exports = runPublisher;