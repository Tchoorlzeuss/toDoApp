'use strict';

/**
 * @ngdoc overview
 * @name toDoAppApp
 * @description
 * # toDoAppApp
 *
 * Main module of the application.
 */
angular
  .module('toDoAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ui.router',
    'ngMdIcons'
  ])
  .config(function ($routeProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('/toDo', {
        templateUrl: 'views/displayToDoList.html',
        controller: 'displayToDoListCtrl',
        controllerAs: 'displayToDoList',
        url: "/toDo/:listId"
      })
      .state('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });
      
    $urlRouterProvider.otherwise("/");
  });