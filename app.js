var url = require('./config').amqpUrl;
var publish = require('./lib/run-publisher').bind(null, url);
var consume = require('./lib/run-consumer-one').bind(null, url);

publish('droplets', { "poop": "yay" }).then(consume);
