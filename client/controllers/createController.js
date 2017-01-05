angular
  .module('solo.createController', ['ngRoute', 'solo.ItinFactory'])
  .controller('createController', createController);

function createController($scope, $location, ItinFactory) {
  $scope.spots = ['spot1'];
  $scope.addNewSpot= function(){
    let newItemNo = $scope.spots.length+1;
    $scope.spots.push('spot'+newItemNo);
  }

  $scope.removeChoice = function(){
    let lastItem = $scope.spots.length-1;
    $scope.spots.splice(lastItem);
  }

  $scope.setAuthorAndLocation= function(){
   // ItinFactory.post($scope.itinAuthor, $scope.authorLocation)
  }
$scope.save= function(){
  //  ItinFactory.post($scope.placeName, $scope.location, $scope.description)
}

}
