var amqplib = require('amqplib');

function runConsumerOne(url, queueName) {
  var open = amqplib.connect(url);

  // Consumer
  return open.then(function(conn) {
    var ok = conn.createChannel();
    ok = ok.then(function(ch) {
      ch.assertQueue(queueName);
      ch.consume(queueName, function(msg) {
        if (msg !== null) {
          console.log(msg.content.toString());
          ch.ack(msg);
        }
      });
    });
    return ok;
  }).then(null, console.warn);
};

module.exports = runConsumerOne;