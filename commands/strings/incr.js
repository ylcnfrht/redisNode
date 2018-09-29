var redis = require('redis');
var client = redis.createClient();

client.set('mykey', 10, function (err, res) {
  console.log(res); // OK
});

client.incr('mykey', function (err, res) {
  console.log(res); // 11
});

client.get('mykey', function (err, res) {
  console.log(res); // '11'
});