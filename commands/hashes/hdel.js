var redis = require('redis');
var client = redis.createClient();

client.hset('myhash', 'field1', 'foo', function (err, res) {
  console.log(res); // 1
});

client.hdel('myhash', 'field1', function (err, res) {
  console.log(res); // 1
});

client.hdel('myhash', 'field1',function (err, res) {
  console.log(res); // 0
});
