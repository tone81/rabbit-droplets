module.exports = function runConsumerOne(url, queueName) {
  function returnQueueName(){ return queueName }
  function consumeMessage(ch, msg) {
    if (msg === null) return;
    console.log(msg.content.toString());
    ch.ack(msg);
  }

  // Consumer
  return require('amqplib').connect(url).then(function createChannel(conn) {
    return conn.createChannel().then(function subscribeChannel(ch) {
      var consumer = consumeMessage.bind(null, ch);
      ch.assertQueue(queueName);
      ch.consume(queueName, consumer);
    });
  }).then(returnQueueName, console.warn);
};
