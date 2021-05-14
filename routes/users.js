var express = require('express');
var router = express.Router();
var db=require('../database');

const { check, validationResult } = require('express-validator');

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

router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Add User', data: ''});
});

router.post('/add', function(req, res, next) {
  
  // store all the user input data
  
 console.log("Inserting user: "+req.body.inputEmail);
  // insert user data into users table
  var sql = "INSERT INTO users (name, address, email, password) VALUES (?, ?, ?, ?)";
 
db.query(sql, [req.body.inputName, req.body.inputAddress, req.body.inputEmail, req.body.inputPassword], function(err, result) {
  if (err) throw err;
    console.log("User data is updated successfully "); 
    console.log(result);
});
 res.redirect('user-list');  // redirect to user form page after inserting the data
}); 

router.get('/edit/:userId', function(req, res, next) {
  var user_id = req.params.userId;
  var sql='SELECT * FROM users WHERE id=?';
    db.query(sql, [user_id], function (err, data, fields) {
    if (err) throw err;
    res.render('edit', { title: 'Edit User', user: data});
  });
});


router.post('/edit', function(req, res, next) {
  
  // store all the user input data
  const userDetails=req.body;
 console.log("Updating user: "+userDetails);
 console.log("Updating user email: "+req.body.inputEmail);
  // insert user data into users table
  var sql = "UPDATE users set name =?, address =?, email=?, password=?  WHERE id = ?";
 
db.query(sql, [req.body.inputName, req.body.inputAddress, req.body.inputEmail, req.body.inputPassword, req.body.id], function(err, result) {
  if (err) throw err;
    console.log("User data is updated successfully "); 
    console.log(result);
});
 res.redirect('user-list');  // redirect to user form page after inserting the data
}); 

module.exports = router;