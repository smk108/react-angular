import angular from 'angular';
let appComponent = {
  restrict: 'E',
  template: require('./test.html'),
};

angular.module('app', [])
  .directive('angularDiv',function(){
    return appComponent
  })
  .controller('myCtrl',['$scope',function($scope){
    $scope.firstName= "John";
    $scope.lastName= "Doe";
    $scope.update = function (attr, value) {
      $scope[attr] = value;
      $scope.$apply();
    }
  }]);