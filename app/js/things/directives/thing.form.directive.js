module.exports = function(app) {
  app.directive('thingFormDirective', function() {
    return {
      restrict: 'AC',
      replace: true,
      templateUrl: './views/thing.form.template.html',
      transclude: true,
      scope: {
        buttonText: '@',
        headingText: '@',
        formName: '@',
        thing: '=',
        save: '&',
        change: '&'
        // this '&'' is usually used to pass a function, with a function call context
      }
    }
  });
};