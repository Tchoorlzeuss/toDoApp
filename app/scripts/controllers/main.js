'use strict';

/**
 * @ngdoc function
 * @name toDoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the toDoAppApp
 */
angular.module('toDoAppApp')
  .controller('MainCtrl', function ($scope, $location, $state) {
    $scope.addToDo = function(){
      if($scope.toDoTitle !== '')
      {
        var existingTask = false;
        for(var i = 0; i < localStorage.length; i++)
        {
          if(localStorage.key(i).toUpperCase() === $scope.toDoTitle.toUpperCase())
            existingTask = true;
        }

        if(existingTask)
        {
          if(confirm("A task already have the same title. Do you want to erase it ?"))
          {
            localStorage[$scope.toDoTitle.toUpperCase()] = [];
            $scope.toDoTitle = '';
          }
        }
        else
        {
          localStorage[$scope.toDoTitle.toUpperCase()] = [];
          $scope.toDoNav.push($scope.toDoTitle.toUpperCase());
          $scope.toDoTitle = '';
        }
      }
    };
  });
