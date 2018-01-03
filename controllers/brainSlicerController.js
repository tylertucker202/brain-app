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
