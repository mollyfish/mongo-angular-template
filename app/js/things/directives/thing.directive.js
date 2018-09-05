module.exports = function(app) {
  app.directive('thingDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: './views/thing.directive.template.html',
      // replace: true,
      scope: {
        thing: '='
        // = means interpret as JavaScript
      }
    }
  });
};

// if the element that this directive lands in already has content, 
// that content will be replaced.  
// Transclusion will let us add content without replacing.