var redis = require('redis');
var client = redis.createClient();

client.rpush('mylist', 'World', function (err, res) {
  console.log(res); // 1
});

client.rpush('mylist', 'Hello', function (err, res) {
  console.log(res); // 2
});

client.linsert('mylist', 'before', 'World', 'There', function (err, res) {
  console.log(res); // 3
});

client.lrange('mylist', 0, -1, function (err, res) {
  console.log(res); // [ 'There', 'World', 'Hello' ]
});
