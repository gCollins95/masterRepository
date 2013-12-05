var express = require('express');
var app = express();
var Twit = require('twit');

var T = new Twit({
    consumer_key:         'eXv3EVWqJi7IH1942cJw',
    consumer_secret:      'QX33rqAHzzlQH07XecLPk0iextogXbuZRUsJT16U',
    access_token:         '2223734401-XWpRuEtNnEjOfdzafA9mZEYgMgEgh3Qov8s0746',
    access_token_secret:  'hMTTRs053GBv7CapaEQEuWdGn1wBFzIkaVR0FRMfkagQh'
});


T.get('search/tweets', { q: 'banana since:2011-11-11', count: 5 }, function(err, reply) {
  console.log(reply);
});



app.get('/', function(req, res) {
   res.sendfile('./Homepage.html');
});

var port = process.env.PORT || 5000;
app.listen(port);