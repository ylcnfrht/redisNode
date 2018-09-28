var redis = require('redis');
var client = redis.createClient();

client.mset('key1', 'Hello', 'key2', 'World', function (err, res) {
  console.log(res); // OK
});

client.get('key1', function (err, res) {
  console.log(res); // Hello
});

client.get('key2', function (err, res) {
  console.log(res); // 'World'
});