module.exports = function(app) {
  // this parameter 'app' gets passed in in entry.js
  require('./thing.directive')(app);
  require('./thing.form.directive')(app);
  require('./thing.transclude.directive')(app);
};