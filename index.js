require('babel/register');

var dotenv = require('dotenv');
dotenv.load();

var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());
var morgan = require('morgan');
app.use(morgan('short'));

require('./admin/search')(app);

var port = process.env.PORT || 8081;
var server = app.listen(port, function() {
  console.log('=== Songroom Daemon Listening on port ' + port);
});