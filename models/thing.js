var mongoose = require('mongoose');

var thingSchema = new mongoose.Schema({
  // swim: {type: Boolean, default: false},
  // bike: {type: Boolean, default: false},
  // run: {type: Boolean, default: false},
  // xtrain: {type: Boolean, default: false},
  type: String,
  number: Number,
  color: String,
  date: Date,
  comments: String
});

module.exports = mongoose.model('Thing', thingSchema);
