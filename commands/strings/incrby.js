var redis = require('redis');
var client = redis.createClient();

client.set('mykey', 10, function (err, res) {
  console.log(res); // OK
});

client.incrby('mykey', 5, function (err, res) {
  console.log(res); // 15
});
