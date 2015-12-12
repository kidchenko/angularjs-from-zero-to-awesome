var app = angular.module('minmax', []);

app.controller('MinMaxCtrl', function ($scope, $http) {
  $scope.formModel = {};
  $scope.onSubmit = function () {
    console.log('Juca submited!');
    console.log($scope.formModel);
    $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel)
        .then(function (success) {
          console.log(':)')
        }, function (error) {
          console.log(':C')
        });
  };
});
