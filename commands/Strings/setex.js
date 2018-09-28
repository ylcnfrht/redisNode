var redis = require('redis');
var client = redis.createClient();

client.setex('mykey', 10, 'Hello', function (err, res) {
  console.log(res); // OK
});

client.ttl('mykey', function (err, res) {
  console.log(res); // 10
});

client.get('mykey', function (err, res) {
  console.log(res); // Hello
});