var redis = require('redis');
var client = redis.createClient();

client.sadd('myset', 'one', 'two', 'three', function (err, res) {
  console.log(res); // 3
});

client.srandmember('myset', function (err, res) {
  console.log(res); // one
});

client.srandmember('myset', 2, function (err, res) {
  console.log(res); // [ 'one', 'two' ]
});

client.srandmember('myset', -5, function (err, res) {
  console.log(res); // [ 'three', 'one', 'three', 'one', 'one' ]
});
