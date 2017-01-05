angular
  .module('solo.feedController', ['ngRoute', 'solo.ItinFactory'])
  .controller('feedController', feedController);

function feedController($scope, ItinFactory, $animate) {
$scope.currentItin = [1,2,3,4];
$scope.nums = [1,2,3];
$scope.title = 'Marina Del Rey';
$scope.zip = 90508;
$scope.author = "Chris Fleming";
$scope.name = "Whole Foods";
$scope.location = "Jefferson BLVD";
$scope.description = "Whole foods is a wonderful market here in town."

}
