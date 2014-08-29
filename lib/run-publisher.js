module.exports = function runPublisher(url, queueName, message) {
  message = new Buffer(JSON.stringify(message));
  function returnQueueName(){ return queueName }
  
  // Publisher
  return require('amqplib').connect(url).then(function createChannel(conn) {
    return conn.createChannel().then(function publishMessage(ch) {
      ch.assertQueue(queueName);
      ch.sendToQueue(queueName, message);
      ch.sendToQueue(queueName, message);
    });
  }).then(returnQueueName, console.warn);
};
