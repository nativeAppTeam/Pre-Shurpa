angular
  .module('solo.createController', ['ngRoute', 'ngMap', 'solo.ItinFactory'])
  .controller('createController', createController);

function createController($scope, $location, ItinFactory, $http) {
  //$SCOPE.SPOTS WAS ADDED FOR ADDNEWSPOT FUNCTION
  $scope.spots = ['spot1'];

  //ADDNEWSPOT LETS YOU ADD ADDITIONAL STOPS ON THE ITINERARY
  // $scope.addNewSpot= function(){
  //   let newItemNo = $scope.spots.length+1;
  //   $scope.spots.push('spot'+newItemNo);
  // }
 
  //REMOVECHOICE LETS YOU REMVOE THOSE STOPS ON THE ITINERARY
  // $scope.removeChoice = function(){
  //   let lastItem = $scope.spots.length-1;
  //   $scope.spots.splice(lastItem);
  // }

  //UPDATESCOPE SETS THE SCOPE FROM NG-CHANGE INPUTS IN THE CREATE.HTML FILE
  $scope.updateScope = function(inputName, inputValue){
    //console.log(inputName, inputValue)
    $scope[inputName] = inputValue;
   // console.log($scope[inputName])
  }

  //SAVE RUNS THE POST FUNCTION IN ItinFactory
  $scope.save = function () {
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

  //SEARCHLOCATION IS MOSTLY USED TO CREATE authorZip WHICH IS REQUIRED TO FILTER THROUGH THE DATABASE FOR THE ZIPCODE
   $scope.searchLocation = function (x) {
    $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + x + '&key=AIzaSyDRjb5435OyNsX2BO4QM7vR-84vvUuzTBM')
      .success(function (data) {
        console.log(data);
        $scope.authorZip = data.results[0].formatted_address.slice(-10).slice(0,5);
        console.log($scope.authorZip)
      });
  };

  //GETLOCATION ALLOWS US TO GET THE CURRENT POSITION OF THE USER AS WELL AS CREATE THE authorZip FROM GEOLOCATION
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
