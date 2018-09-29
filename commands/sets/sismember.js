var redis = require('redis');
var client = redis.createClient();

client.sadd('myset', 'one', function (err, res) {
  console.log(res); // 1
});

client.sismember('myset', 'one', function (err, res) {
  console.log(res); // 1
});

client.sismember('myset', 'two', function (err, res) {
  console.log(res); // 0
});
