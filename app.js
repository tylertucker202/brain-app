var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('config'); //database information stored here
<<<<<<< HEAD
//var pg = require('pg'); // use for pg only
=======
>>>>>>> 4636ad78345307b42eb7f737a54f6565020c6913

var index = require('./routes/index');
var users = require('./routes/users');
var brainSlicer = require('./routes/brainSlicer');

var app = express();

<<<<<<< HEAD
//detect what environmnet is used
const ENV = config.util.getEnv('NODE_ENV')

//get database connection information
//const connection = config.db[ENV];

/*
//connect to posgres database using pg
var client = new pg.Client(connection);
client.connect();
*/


=======
>>>>>>> 4636ad78345307b42eb7f737a54f6565020c6913
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/brainSlicer', brainSlicer);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
