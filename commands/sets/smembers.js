var redis = require('redis');
var client = redis.createClient();

client.sadd('myset', 'Hello', function (err, res) {
  console.log(res); // 1
});

client.sadd('myset', 'World', function (err, res) {
  console.log(res); // 1
});

client.smembers('myset', function (err, res) {
  console.log(res); // [ 'Hello', 'World' ]
});
