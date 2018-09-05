var mongoose = require('mongoose');
var express = require('express');
var app = express();
var thingsRouter = require(__dirname + '/routes/things_routes');
var port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/things_dev');

app.use(express.static(__dirname + '/build'));

app.use('/api', thingsRouter);

app.listen(port, function() {
  console.log('server up on port ' + port);
});


// MONGO DB NOTES

// IN THE TERMINAL, at the root of your project, make a directory called db
// this creates a fresh database for each app

// THEN run
// mongod --dbpath=./db --smallfiles

// IN MONGO
// > show dbs
// > use database_name
// switched to db database_name
// > db.workouts.find().pretty()
// returns all workout objects from the database