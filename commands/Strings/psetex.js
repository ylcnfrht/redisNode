var redis = require('redis');
var client = redis.createClient();

client.psetex('mykey', 1000, 'Hello', function (err, res) {
  console.log(res); // OK
});

client.pttl('mykey', function (err, res) {
  console.log(res); // 999
});

client.get('mykey', function (err, res) {
  console.log(res); // Hello
});