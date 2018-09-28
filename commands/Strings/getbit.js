var redis = require('redis');
var client = redis.createClient();

client.setbit('mykey', 7, 1, function (err, res) {
  console.log(res); // 0
});

client.getbit('mykey', 0, function (err, res) {
  console.log(res); // 0
});