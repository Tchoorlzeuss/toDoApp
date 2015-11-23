angular.module('toDoAppApp')
  .controller('indexCtrl', function ($scope, $mdSidenav) {
    $scope.toggleSideMenu = function(){
      $mdSidenav('left').toggle();
    }
  });