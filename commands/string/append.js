var redis = require('redis');
var client = redis.createClient();

client.exists('mykey', function (err, res) {
  console.log(res); // 0
});

client.append('mykey', 'Hello', function (err, res) {
  console.log(res); // 5
});

client.append('mykey', ' World', function (err, res) {
  console.log(res); // 11
});

client.get('mykey', function (err, res) {
  console.log(res); // 'Hello World'
});