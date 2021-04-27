var express = require('express');
var router = express.Router();
var db=require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/user-list', function(req, res, next) {
    var sql='SELECT * FROM users';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('user-list', { title: 'User List', userData: data});
  });
});

router.get('/hello', function(req, res, next) {
  res.render('hello', { title: 'Hello', data: 'Oliver'});
});
module.exports = router;