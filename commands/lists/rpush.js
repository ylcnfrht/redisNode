var redis = require('redis');
var client = redis.createClient();

client.rpush('mylist', 'hello', function (err, res) {
  console.log(res); // 1
});

client.rpush('mylist', 'world', function (err, res) {
  console.log(res); // 2
});

client.lrange('mylist', 0, -1, function (err, res) {
  console.log(res); // [ 'hello', 'world' ]
});
