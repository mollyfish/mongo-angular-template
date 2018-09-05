var express = require('express');
var bodyParser = require('body-parser');
var Thing = require(__dirname + '/../models/thing');
var handleError = require(__dirname + '/../lib/handleServerError');

var thingsRouter = module.exports = exports = express.Router();

thingsRouter.get('/things', function(req, res) {
  Thing.find({}, function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  });
});

thingsRouter.post('/things', bodyParser.json(), function(req, res) {
  var newThing = new Thing(req.body);
  newThing.save(function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  });
});

thingsRouter.put('/things/:id', bodyParser.json(), function(req, res) {
  var thingData = req.body;
  delete thingData._id;
  Thing.update({_id: req.params.id}, thingData, function(err) {
    if (err) return handleError(err, res);

    res.json({msg: 'success!'});
  });
});

thingsRouter.delete('/things/:id', function(req, res) {
  Thing.remove({_id: req.params.id}, function(err) {
    if (err) return handleError(err, res);

    res.json({msg: 'success!'});
  });
});
