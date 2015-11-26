'use strict';

/**
 * @ngdoc function
 * @name toDoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the toDoAppApp
 */

angular.module('toDoAppApp')
  .controller('displayToDoListCtrl', function ($scope, filterFilter, $rootScope, $stateParams, $location, $state) {
    $scope.title = $stateParams.listId;
    if(localStorage[$scope.title])
    	$scope.toDos = JSON.parse(localStorage[$scope.title]);
    else if(localStorage[$scope.title] === '')
      $scope.toDos = [];
  	else
    	$state.go('/new');

    $scope.titleIsEdited = false;

    $scope.addToDo = function(){
    	if($scope.taskToAdd)
	    	$scope.toDos.push({
	    		task: $scope.taskToAdd,
	    		isEdited: false,
	    		completed: false
	    	});
    	$scope.taskToAdd = "";
      localStorage[$scope.title] = JSON.stringify($scope.toDos);
    };

    $scope.saveChange = function(){
      localStorage[$scope.title] = JSON.stringify($scope.toDos);
    };

    $scope.deleteList = function(){
      if(confirm('You are about to delete the "' + $scope.title + '" list. Are you sure ?'))
      {
        $scope.toDoNav.splice($scope.toDoNav.indexOf($scope.title), 1);
        localStorage.removeItem($scope.title);
        $state.go('/new');
        $location.path('/');
      }
    }

    $scope.removeToDo = function(toDo){
    	$scope.toDos.splice($scope.toDos.indexOf(toDo), 1);
      localStorage[$scope.title] = JSON.stringify($scope.toDos);
    };

    $scope.editToDo = function(toDo){
    	toDo.isEdited = false;
      localStorage[$scope.title] = JSON.stringify($scope.toDos);
    };

    $scope.toggleAllCompleted = function(){
      $scope.toDos.forEach(function(toDo){
          toDo.completed = $scope.allCompleted;
      });
      localStorage[$scope.title] = JSON.stringify($scope.toDos);
    };

    $scope.$watch('toDos', function(){
	    $scope.remainingTasks = filterFilter($scope.toDos, {completed: false}).length;
	    $scope.isPlurial = $rootScope.remainingTasks > 1 ? 's' : '';
	    if($rootScope.remainingTasks === 0)
	    	$rootScope.remainingTasks = 'Aucune';
	    $scope.allCompleted = filterFilter($scope.toDos, {completed: true}).length === $scope.toDos.length;
	}, true);
  });

  angular.module('toDoAppApp').directive('ngBlur', function(){
  	return function(scope, elem, attrs){
  		elem.bind('blur', function(){
  			scope.$apply("attrs.ngBlur");
  		});
  	};
  });
