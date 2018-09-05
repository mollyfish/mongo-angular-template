module.exports = function(app) {
  app.controller('ThingsController', ['$scope', '$http', 'cfResource', function($scope, $http, cfResource) {
    $scope.things = [];
    $scope.errors = [];
    $scope.date = new Date();
    $scope.date.setSeconds(0,0);
    $scope.originalSport;
    $scope.defaults = {date: $scope.date};
    $scope.newThing = angular.copy($scope.defaults);

    var thingsResource = cfResource('things');

    $scope.getAll = function() {
      thingsResource.getAll(function(err,data) {
        if (err) return err;

        $scope.things = data;
      }); 
    };

    $scope.create = function(thing) {
      thingsResource.create(thing, function(err,data) {
        if (err) {
          return err 
        } else {

          // console.dir(data);
          $scope.things.push(data);
          $scope.newThing = angular.copy($scope.defaults);
        }
      });
    };

    $scope.update = function(thing) {
      thing.editing = false;
      $http.put('/api/things/' + thing._id, thing)
        .then(function(res) {
          console.log(thing.type + ' has been edited!');
          console.dir(thing);
        }, function(err) {
          $scope.errors.push('could not find ' + thing.type);
          console.log(err.data);
        });
    };

    $scope.rememberThing = function(thing) {
      console.dir(thing);
      thing.date = new Date(thing.date);
      console.dir(thing);
      $scope.date = thing.date;
      console.dir(thing);
      $scope.originalSport = thing.type;
      console.dir(thing);
    };
    
    $scope.resetThing = function(thing) {
      thing.type = $scope.originalSport;
    };

    $scope.remove = function(thing) {
      if (confirm('Are you sure you want to delete this thing?')) {
        $scope.things.splice($scope.things.indexOf(thing), 1);
          return $http.delete('/api/things/' + thing._id)
            .then(function(res) {
              console.log('sa-weet. thing murdered.')
            }, function(err) {
              console.log(err.data);
              $scope.errors.push('could not murder that ' + thing.type + ' thing');
              $scope.getAll();
            });
      } else {
        return;
      }     
    };
  }]);
};
