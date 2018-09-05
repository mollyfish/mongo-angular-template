module.exports = function(app) {
  app.directive('thingTranscludeDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: './views/thing.transclude.template.html',
      transclude: true,
      scope: {
        messageOne: '@'
      }
    }
  });
};