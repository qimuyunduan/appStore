var express = require('express'),
     path = require('path'),//This module contains utilities for handling and transforming file paths.
    favicon = require('serve-favicon'),
    logger = require('morgan'),//HTTP request logger middleware
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    ejs = require('ejs'),
    debug = require('debug')('http'),//tiny node.js debugging utility
    redis= require('redis'),
    mongoose = require('mongoose'),
    mailer = require('nodemailer'),//TODO
    helmet = require('helmet'),
    limiter = require('express-limiter'),//TODO
    session = require('express-session'),//TODO
    csurf = require('csurf'),//TODO
    connect_redis = require('connect-redis')(session),
    connect_mongo = require('connect-mongo'),//TODO
    async = require('async'),//TODO: a set of useful function .  async.functionName
    bluebird = require('bluebird');//TODO
var index = require('./routes/index');
var users = require('./routes/users');
var app = express();
//var csrfProtection = csrf({ cookie: true });


//view directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
//use some middleware
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// set app session data
/*app.use(session({
    userID: '',
    store: new connect_redis(options),
    secret: 'keyboard cat'
}));*/

//set routes for app
app.use('/', index);
app.use('/users', users);


//connect redis server
redisClient = redis.createClient();
redisClient.on("error",function(error)
{
  console.log("Redis Error :"+error);
});
redisClient.on("connect",function()
{
  console.log("Redis server has connected...");
});

// connect mongodb server
var db  = mongoose.createConnection('mongodb://127.0.0.1:27017/test');

db.on('error', function(error) {
    console.log(error);
});
db.on('connected',function(){
    console.log("MongoDB Server has connected....")
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


if (app.get('env') === 'development') {
  console.log("environment is dev..");
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}


app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
