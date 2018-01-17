<<<<<<< HEAD
var Brain = require('../models').Brain;
//var async = require('async');

exports.slicer = function(req, res, next) {
    res.send('brain slicer!');
  }

exports.get_ten_points = function(req, res, next) {
  Brain.findAll({ limit: 10,
    //include: {
    //  model: Brain}
    }).then(function(results) {
    res.json(results);
  });

  
  //res.send('get_ten_points!');
};
=======
var path      = require("path");
var pg = require('pg'); // use for pg only
var config = require('config'); //database information stored here
//detect what environmnet is used
const ENV = config.util.getEnv('NODE_ENV')
//get database connection information
const connection = config.db[ENV];
//connect to posgres database using pg
var client = new pg.Client(connection);
client.connect();

exports.slicer = function(req, res, next) {
    res.send('brain slicer!');
}

exports.get_ten_points = function(req, res, next) {
  results = []
  const query = client.query("SELECT * FROM braintbl LIMIT 10;", function(err, results) {
    if (err) {
      return console.error('error happened during query', err)
    }
    res.json(results.rows);
  });
}
>>>>>>> 4636ad78345307b42eb7f737a54f6565020c6913
