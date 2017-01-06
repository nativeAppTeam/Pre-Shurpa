angular
  .module('solo.createController', ['ngRoute', 'ngMap', 'solo.ItinFactory'])
  .controller('createController', createController);

function createController($scope, $location, ItinFactory, $http) {
  $scope.spots = ['spot1'];
  //addNewSpot lets you add additional stops on the Itinerary
  // $scope.addNewSpot= function(){
  //   let newItemNo = $scope.spots.length+1;
  //   $scope.spots.push('spot'+newItemNo);
  // }
  
  //removeChoice lets you remove those stops on the Itinerary
  // $scope.removeChoice = function(){
  //   let lastItem = $scope.spots.length-1;
  //   $scope.spots.splice(lastItem);
  // }

  //updateScope is to set the scope from the ng-change inputs in the create.html file
  $scope.updateScope = function(inputName, inputValue){
    //console.log(inputName, inputValue)
    $scope[inputName] = inputValue;
   // console.log($scope[inputName])
  }

  //save is necessary to run the post function in the ItinFactory 
  $scope.save = function () {
    //console.log($scope.title, $scope.author, $scope.authorLocation, $scope.authorZip, $scope.stop1placeName, $scope.stop1description);
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
    ).success(function() {
       alert('Itinerary Created!!!')
    })
  }

  //search location is used mostly to create the authorZip, which is used to filter through the database for the zipcode
  $scope.searchLocation = function (x) {
    $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + x + '&key=AIzaSyDRjb5435OyNsX2BO4QM7vR-84vvUuzTBM')
      .success(function (data) {
        console.log(data);
        $scope.authorZip = data.results[0].formatted_address.slice(-10).slice(0,5);
        console.log($scope.authorZip)
      });
  };

  //getLocation allows us to get the current position of the user as well as create the authorZip from the geolocation
  $scope.getLocation = function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&key=AIzaSyDRjb5435OyNsX2BO4QM7vR-84vvUuzTBM').success(function (data) {
          $scope.authorLocation= data.results[0].formatted_address;
          $scope.authorZip= data.results[0].formatted_address.slice(-10).slice(0,5);
          console.log($scope.authorZip)
        });
<<<<<<< HEAD
        // console.log(addressObj)        
=======

        // console.log(addressObj)
>>>>>>> 1e56908c22ba0826aa0e532da7a6bcdab0a07a62
        $scope.location = position.coords.latitude + ", " + position.coords.longitude;
        //  console.log($scope.location)
      });
    }
    console.log("Running get Location")
  };
}
