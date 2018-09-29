var redis = require('redis');
var client = redis.createClient();

client.hset('myhash', 'field1', 'foo', function (err, res) {
  console.log(res); // 1
});

client.hexists('myhash', 'field1', function (err, res) {
  console.log(res); // 1
});

client.hexists('myhash', 'field2', function (err, res) {
  console.log(res); // 0
});
