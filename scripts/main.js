var app = angular.module('toDoApp', []);

app.directive('ngBlur', function(){
  return function(scope, elem, attrs){
      elem.bind('blur', function(){
        scope.$apply("doEditing($index)")
      })
    };
});

app.controller('mainCtrl', function($scope, filterFilter){
  if(localStorage.data)
    $scope.tasks = JSON.parse(localStorage.data);
  else
    $scope.tasks = [];

  $scope.finished = false;

  $scope.addTask = function(){
    $scope.tasks.push({
                        task: $scope.newTask,
                        completed: false,
                        isEdited: false
                      });

    $scope.newTask = "";
  };

  $scope.deleteTask = function(task){
    $scope.tasks.splice($scope.tasks.indexOf(task), 1);
  };

  $scope.doEditing = function(index){
    $scope.tasks[index].isEdited = false;
  }

  $scope.toogleAll = function(finished){
    $scope.tasks.forEach(function(task){
      task.completed = finished;
    })
  };

  $scope.saveCompleted = function(){
    localStorage.data = JSON.stringify($scope.tasks);
  }

  $scope.$watch('tasks', function(){
    $scope.remaining = filterFilter($scope.tasks, {completed:false}).length;
    $scope.displayPlurial = ($scope.remaining > 1) ? 's' : '';
    $scope.finished = filterFilter($scope.tasks, {completed:true}).length == $scope.tasks.length;
    localStorage.data = JSON.stringify($scope.tasks);
  }, true);
});