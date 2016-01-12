var express = require('express'),
     path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    ejs = require('ejs'),
    debug = require('debug')('http'),
    redis= require('redis'),
    mongoose = require('mongoose');
var index = require('./routes/index');
var users = require('./routes/users');
var app = express();

//static files directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
redisClient = redis.createClient();
redisClient.on("error",function(error)
{
  console.log("Redis Error :"+error);
});
redisClient.on("connect",function()
{
  console.log("Redis server has connected");
});
var db  = mongoose.createConnection('mongodb://127.0.0.1:27017/test');
db.on('error', function(error) {
    console.log(error);
});






app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


if (app.get('env') === 'development') {
  console.log("environment is dev..");
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}


app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
