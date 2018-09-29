var redis = require('redis');
var client = redis.createClient();

client.get('nonexisting', function(err, res) {
  console.log(res); // null
});

client.set('mykey', 'Hello', function(err, res) {
  console.log(res); // OK
});

client.get('mykey', function(err, res) {
  console.log(res); // Hello
});
