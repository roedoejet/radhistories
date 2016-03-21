// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'leaflet-directive', 'ngCordova', 'igTruncate'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        window.cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    
    // Abstract State for Tabs
    
      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
      })

    // Individual Tabs
    
      .state('tab.home', {
        url: "/home",
        views: {
          'tab-home' :{
            templateUrl: "templates/home.html",
            controller: "MapCtrl"
          }
        }
      })
    
    .state('tab.tours', {
        url: "/tours",
        views: {
          'tab-tours' :{
            templateUrl: "templates/tours.html",
            controller: "MapCtrl"
          }
        }
      })
    
    .state('tab.map', {
        url: "/map",
        views: {
          'tab-map' :{
            templateUrl: "templates/map.html",
            controller: "MapCtrl"
          }
        }
      })
    
    .state('tab.settings', {
        url: "/settings",
        views: {
          'tab-settings' :{
            templateUrl: "templates/settings.html",
            controller: "MapCtrl"
          }
        }
      })

    $urlRouterProvider.otherwise('/tab/home');

  });