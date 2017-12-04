var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let jwt = require('express-jwt');

let Player = mongoose.model('Player');
let Rating = mongoose.model('Rating');
let Team = mongoose.model('Team');

let auth = jwt({secret: process.env.BACKEND_SECRET, userProperty: 'payload'});

/* GET home page. */
router.get('/API/teams', auth, function(req, res, next) {
  let query = Team.find().populate('players');
  query.exec(function(err, teams) {
    if (err) return next(err);
    res.json(teams);
  })
});

router.get('/API/team/:team', auth, function(req, res){
  req.team.populate('players', function(err, player){
    if(err) return next(err);
    res.json(player);
  })
});

router.get('/API/players', auth, function(req, res, next){
  let query = Player.find().populate('ratings');
  query.exec(function(err, player) {
    if (err) return next(err);
    res.json(player);
  })
});

router.get('/API/player/:player', auth, function(req, res){
  req.player.populate('ratings', function(err, rating){
    if(err) return next(err);
    res.json(rating);
  })
})

router.get('/API/ratings', auth, function(req, res, next){
  let query = Rating.find().populate();
  query.exec(function(err, rating){
    if(err) return next(err);
    res.json(rating);
  })
});

router.param('team', function (req, res, next, id) {
  let query = Team.findById(id);
  query.exec(function (err, team) {
      if (err) return next(err);
      if (!team) return next(new Error("Team not found: " + id))
      req.team = team;
      return next();
  });
});

router.param('player', function (req, res, next, id) {
  let query = Player.findById(id);
  query.exec(function (err, player) {
      if (err) return next(err);
      if (!player) return next(new Error("Player not found: " + id))
      req.player = player;
      return next();
  });
});

router.param('rating', function (req, res, next, id) {
  let query = Rating.findById(id);
  query.exec(function (err, rating) {
      if (err) return next(err);
      if (!rating) return next(new Error("Rating not found: " + id))
      req.rating = rating;
      return next();
  });
});

module.exports = router;
