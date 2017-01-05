angular
  .module('solo.HomeController', ['ngRoute', 'ngMap', 'solo.ItinFactory'])
  .controller('HomeController', HomeController);

function HomeController($scope, ItinFactory, $http) {

  $scope.searchLocation = function(location) {
    // Querying Geocode API to convert location (address formatted) into Lat and Long
    $http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+location+'&key=AIzaSyDRjb5435OyNsX2BO4QM7vR-84vvUuzTBM')
      .success(function(data) {
        console.log(data);
      });

    // Querying for ALL itins upon search click
    $http.get('/itins').then(function(data){
      ItinFactory.currentItins = data.data;
      console.log('data from get request', data);
    })
    // Playing with Maps Geomety
    // var _kCord = new google.maps.LatLng(-36.874694, 174.735292);
    // var _pCord = new google.maps.LatLng(-36.858317, 174.782284);
    // console.log(google.maps.geometry.spherical.computeDistanceBetween(_pCord, _kCord));
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
