angular
  .module('solo.createController', ['ngRoute', 'ngMap', 'solo.ItinFactory'])
  .controller('createController', createController);

function createController($scope, $location, ItinFactory, $http) {
  $scope.spots = ['spot1'];
  // $scope.addNewSpot= function(){
  //   let newItemNo = $scope.spots.length+1;
  //   $scope.spots.push('spot'+newItemNo);
  // }

  // $scope.removeChoice = function(){
  //   let lastItem = $scope.spots.length-1;
  //   $scope.spots.splice(lastItem);
  // }

  $scope.updateScope = function(inputName, inputValue){
    //console.log(inputName, inputValue)
    $scope[inputName] = inputValue;
   // console.log($scope[inputName])
  }
  $scope.save = function () {
    console.log($scope.title, $scope.author, $scope.authorLocation, $scope.authorZip, $scope.stop1placeName, $scope.stop1description);
    ItinFactory.post(
      $scope.title,
      $scope.author,
      $scope.authorLocation,
      $scope.authorZip,
      $scope.stop1placeName,
      $scope.stop1location,
      $scope.stop1description,
      $scope.stop2placeName,
      $scope.stop2location,
      $scope.stop2description,
      $scope.stop3placeName,
      $scope.stop3location,
      $scope.stop3description,
      $scope.stop4placeName,
      $scope.stop4location,
      $scope.stop4description
    )
  }
  $scope.searchLocation = function (x) {
    $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + x + '&key=AIzaSyDRjb5435OyNsX2BO4QM7vR-84vvUuzTBM')
      .success(function (data) {
        console.log(data);
        $scope.authorZip = data.results[0].formatted_address.slice(-10).slice(0,5);
        console.log($scope.authorZip)
      });
  };
  $scope.getLocation = function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&key=AIzaSyDRjb5435OyNsX2BO4QM7vR-84vvUuzTBM').success(function (data) {
          $scope.authorLocation= data.results[0].formatted_address;
          $scope.authorZip= data.results[0].formatted_address.slice(-10).slice(0,5);
          console.log($scope.authorZip)
        });

        // console.log(addressObj)        
        $scope.location = position.coords.latitude + ", " + position.coords.longitude;
        //  console.log($scope.location)
      });
    }
    console.log("Running get Location")
  };
}
