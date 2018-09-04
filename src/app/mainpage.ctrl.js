require('../app');
var $ = require('jquery'); 
global.jQuery = $;

angular.module("molly-project-template").controller('MainPageController', ["$scope", "$location", "$timeout", function($scope, $location, $timeout) {
    
    $scope.currentPath = $location.path();

    // INCLUDES
    $scope.splashHeaderTemplate = {name: 'splashHeader.html', url: '/templates/splashHeader.html'};
    $scope.subheaderTemplate = {name: 'subheader.html', url: '/templates/subheader.html'};
    $scope.headerTemplate = {name: 'header.html', url: '/templates/header.html'};
    $scope.navTemplate = {name: 'nav.html', url: '/templates/nav.html'};
    $scope.mobileNavTemplate = {name: 'mobileNav.html', url: '/templates/mobileNav.html'};
    $scope.toTopTemplate = {name: 'toTop.html', url: '/templates/toTop.html'};


    var getDestination = function(str) {
      return str.split('#')[1];
    }    

    var highlightCurrentPage = function() {
      var link = $scope.currentPath.replace('/','#');
      $(link).addClass('current');
    }

    var jumpTo = function(location) {
      var anchor = $("#" + location + "");
      if (anchor){
          anchor[0].scrollIntoView();
      }
    }

    $scope.$on('$includeContentLoaded', function() {
      $timeout(function(){
        highlightCurrentPage();


        $('#to-top').on('click', function(e) {
          console.log('I heard that');
          jumpTo('sticky-wrap');
        });
      });
    });


    

  }]);
