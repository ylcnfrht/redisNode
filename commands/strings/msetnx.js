var redis = require('redis');
var client = redis.createClient();

client.msetnx('key1', 'Hello', 'key2', 'there', function (err, res) {
  console.log(res); // 1
});

client.msetnx('key2', 'there', 'key3', 'world', function (err, res) {
  console.log(res); // 0
});

client.mget('key1', 'key2', 'key3', function (err, res) {
  console.log(res); // [ 'Hello', 'there', null ]
});
