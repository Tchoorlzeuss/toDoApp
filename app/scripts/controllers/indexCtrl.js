angular.module('toDoAppApp')
  .controller('indexCtrl', function ($scope, $mdSidenav, $state, $location) {
    $scope.toDoNav = [];
    for(var i = 0; i < localStorage.length; i++)
    {
      $scope.toDoNav.push(localStorage.key(i));
    }

    $scope.goToToDo = function(toDoId){
      $mdSidenav('left').toggle();
      $location.path('/toDo/' + toDoId);
      $location.replace();
    };

    $scope.toggleSideMenu = function(){
      $mdSidenav('left').toggle();
    };

    $scope.goToNewToDo = function(){
      $mdSidenav('left').toggle();
      $location.path('/');
      $location.replace();
      $state.go('/new');
    };
  });