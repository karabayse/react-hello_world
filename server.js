// requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// listen
app.listen(4003, function (){
  console.log('server up on 4003');
});

// base url --> when we go to slash, run this code
// get route --> mailbox: address is written in browser
app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve("public/views/index.html"));
}); // end get route
