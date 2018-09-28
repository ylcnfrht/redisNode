var redis = require('redis');
var client = redis.createClient();

client.set('mykey', 'This is a string', function (err, res) {
  console.log(res); // OK
});

client.getrange('mykey', 0, 3, function (err, res) {
  console.log(res); // This
});