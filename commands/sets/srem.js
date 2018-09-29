var redis = require('redis');
var client = redis.createClient();

client.sadd('myset', 'one', function (err, res) {
  console.log(res); // 1
});

client.sadd('myset', 'two', function (err, res) {
  console.log(res); // 1
});

client.sadd('myset', 'three', function (err, res) {
  console.log(res); // 1
});

client.srem('myset', 'one', function (err, res) {
  console.log(res); // 1
});

client.srem('myset', 'four', function (err, res) {
  console.log(res); // 0
});

client.smembers('myset', function (err, res) {
  console.log(res); // [ 'three', 'two' ]
});
