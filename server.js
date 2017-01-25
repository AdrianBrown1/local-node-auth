var express  = require('express');
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

var config = require('./config');

var app = express();

mongoose.connect(config.database.url); // connect to our database

app.use(morgan('dev')); 
app.use(cookieParser()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs'); 

require('./app/routes.js')(app);

app.listen(port);
console.log('The magic happens on port ' + port);