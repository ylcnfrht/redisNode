var redis = require('redis');
var client = redis.createClient();

client.hsetnx('myhash', 'field', 'Hello', function (err, res) {
  console.log(res); // 1
});

client.hsetnx('myhash', 'field', 'Hello', function (err, res) {
  console.log(res); // 0
});

client.hget('myhash', 'field', function (err, res) {
  console.log(res); // Hello
});
