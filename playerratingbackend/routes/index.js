var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let jwt = require('express-jwt');

let Player = mongoose.model('Player');
let Rating = mongoose.model('Rating');
let Team = mongoose.model('Team');

let auth = jwt({secret: process.env.BACKEND_SECRET, userProperty: 'payload'});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
