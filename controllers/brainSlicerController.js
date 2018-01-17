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
