require('angular');
require('angular-route');
require('angular-animate');


(function () {
"use strict";
console.log('hello there from app.js!')


var app = angular.module('molly-project-template', ['ngRoute', 'ngAnimate']);

  app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix("");
  }]);

  app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/index", {
      templateUrl: "pages/home.html",
      controller: "MainPageController",
    })
    
    .otherwise({
      redirectTo: "/index",
    });
  }]);


}());


require('./index.js');
