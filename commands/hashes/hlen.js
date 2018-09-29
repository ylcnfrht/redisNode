var redis = require('redis');
var client = redis.createClient();

client.hset('myhash', 'field1', 'Hello', function (err, res) {
  console.log(res); // 1
});

client.hset('myhash', 'field2', 'World', function (err, res) {
  console.log(res); // 1
});

client.hlen('myhash', function (err, res) {
  console.log(res); // 2
});
