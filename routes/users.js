var express = require('express');
var router = express.Router();
var db=require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/user-list', function(req, res, next) {
    var sql='SELECT * FROM users';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('user-list', { title: 'Users', userData: data});
  });
});

router.get('/hello', function(req, res, next) {
  res.render('hello', { title: 'Hello', data: 'Oliver'});
});

router.get('/edit/:userId', function(req, res, next) {
  var user_id = req.params.userId;
  var sql='SELECT * FROM users WHERE id=?';
    db.query(sql, [user_id], function (err, data, fields) {
    if (err) throw err;
    res.render('edit', { title: 'Edit User', user: data});
  });
});

module.exports = router;