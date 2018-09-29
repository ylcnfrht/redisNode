var redis = require('redis');
var client = redis.createClient();

client.setnx('mykey', 'Hello', function (err, res) {
  console.log(res); // 0
});

client.setnx('mykey', 'World', function (err, res) {
  console.log(res); // 1
});

client.get('mykey', function (err, res) {
  console.log(res); // Hello
});
