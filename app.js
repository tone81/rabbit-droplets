var url = require('./config').amqpUrl,
    publish = require('./lib/run-publisher').bind(null, url),
    consume = require('./lib/run-consumer-one').bind(null, url);

publish('droplets', { "poop": "yay" }).then(consume);
