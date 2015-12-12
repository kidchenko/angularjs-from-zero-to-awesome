var app = angular.module('minmax', []);

app.controller('MinMaxCtrl', function ($scope) {
  $scope.formModel = {};
  $scope.onSubmit = function () {
    console.log('Juca submited!');
    console.log($scope.formModel);
  };
});
