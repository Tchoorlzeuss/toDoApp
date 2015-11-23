'use strict';

/**
 * @ngdoc function
 * @name toDoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the toDoAppApp
 */

angular.module('toDoAppApp')
  .controller('displayToDoListCtrl', function ($scope, filterFilter, $rootScope, $stateParams, $location) {
    if(localStorage[$stateParams.listId])
    	$scope.toDos = JSON.parse(localStorage[$stateParams.listId]);
  	else
    	$scope.toDos = [];

    $scope.addToDo = function(){
    	if($scope.taskToAdd)
	    	$scope.toDos.push({
	    		task: $scope.taskToAdd,
	    		isEdited: false,
	    		completed: false
	    	});
    	$scope.taskToAdd = "";
    };

<<<<<<< HEAD
    $scope.removeToDo = function(toDo){
    	$scope.toDos.splice($scope.toDos.indexOf(toDo), 1);
=======
    $scope.removeToDo = function(index){
    	$scope.toDos.splice(index, 1);
>>>>>>> 687d51ff183ddb16bfa400e0097e14a149438edf
    };

    $scope.editToDo = function(toDo){
    	toDo.isEdited = false;
    };

    $scope.$watch('allCompleted', function(){
    	$scope.toDos.forEach(function(toDo){
      		toDo.completed = $scope.allCompleted;
  		});
    }, true);

    $scope.$watch('toDos', function(){
<<<<<<< HEAD
	    $scope.remainingTasks = filterFilter($scope.toDos, {completed: false}).length;
	    $scope.isPlurial = $rootScope.remainingTasks > 1 ? 's' : '';
=======
	    $rootScope.remainingTasks = filterFilter($scope.toDos, {completed: false}).length;
	    $rootScope.isPlurial = $rootScope.remainingTasks > 1 ? 's' : '';
>>>>>>> 687d51ff183ddb16bfa400e0097e14a149438edf
	    if($rootScope.remainingTasks === 0)
	    	$rootScope.remainingTasks = 'Aucune';
	    $scope.allCompleted = filterFilter($scope.toDos, {completed: true}).length === $scope.toDos.length;
	    localStorage[$stateParams.listId] = JSON.stringify($scope.toDos);
	}, true);
  });

  angular.module('toDoAppApp').directive('ngBlur', function(){
  	return function(scope, elem, attrs){
  		elem.bind('blur', function(){
  			scope.$apply("attrs.ngBlur");
  		});
  	};
  });
