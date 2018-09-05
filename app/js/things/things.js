module.exports = function(app) {
  // this parameter 'app' gets passed in in entry.js
  require('./controllers/things.controller')(app);
  require('./directives/directives')(app);
};