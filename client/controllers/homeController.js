angular
  .module('solo.HomeController', ['ngRoute', 'ngMap', 'solo.ItinFactory'])
  .controller('HomeController', HomeController);

function HomeController($scope, ItinFactory, $http) {
  // $scope.currLocation = "Not Yet Defined"
  $scope.searchLocation = function(x) { 
          $http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+x+'&key=AIzaSyDRjb5435OyNsX2BO4QM7vR-84vvUuzTBM')
          .success(function(data) {
            console.log(data);
          });
  };
  $scope.getLocation = function(){
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
      $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+position.coords.latitude + ',' + position.coords.longitude+ '&key=AIzaSyDRjb5435OyNsX2BO4QM7vR-84vvUuzTBM').success(function(data){
         $scope.location = data.results[0].formatted_address;
         console.log(data.results[0])
      });
        
        // console.log(addressObj)        
         $scope.location = position.coords.latitude + ", " + position.coords.longitude;
        //  console.log($scope.location)
      });
   }
   console.log("Running get Location")
  };
}

