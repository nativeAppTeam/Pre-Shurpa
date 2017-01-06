angular
  .module('solo.HomeController', ['ngRoute', 'ngMap', 'solo.ItinFactory'])
  .controller('HomeController', HomeController);

function HomeController($scope, ItinFactory, $http) {

  // getLocation uses HTML5 geolocation then passes those coords into google maps geocode to get a formatted address
  $scope.getLocation = function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&key=AIzaSyDRjb5435OyNsX2BO4QM7vR-84vvUuzTBM')
          .success(function (data) {
            console.log("Full Data returned from getLocation", data.results[0]);
            $scope.location = data.results[0].formatted_address;
          });
      });
    }
  };

  $scope.searchLocation = function (location) {
    if (!location) {
      alert('NO SEARCH QUERY');
      return;
    }
    // Querying Geocode API to get ZIP code of {{location}} search input to pass to ItinFactory
    $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=AIzaSyDRjb5435OyNsX2BO4QM7vR-84vvUuzTBM')
      .success(function (data) {
        ItinFactory.searchZip = data.results[0].formatted_address.slice(-10).slice(0, 5);
      });

    // Making a GET request for ALL itins upon search click and saving to ItinFactory
    // Redirecting to feed
    $http.get('/itins').then(function (data) {
      ItinFactory.currentItins = data.data;
      window.location = '/#/feed';
    });
  };

  // initializing pull of last three submitted itineraries
  $http.get('/itins').then(function (data) {
    $scope.lastThree = data.data.slice(-3);
  });
}



// Playing with Maps Geomety to calculate distance between two coordinates 
// This could be used to give more control of proximity search

// var _kCord = new google.maps.LatLng(-36.874694, 174.735292);
// var _pCord = new google.maps.LatLng(-36.858317, 174.782284);
// console.log(google.maps.geometry.spherical.computeDistanceBetween(_pCord, _kCord));