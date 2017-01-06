
angular
  .module('solo.ItinFactory', ['solo.createController'])
  .factory('ItinFactory', ItinFactory);

function ItinFactory($http) {
  return {
    post: function (title, author, authorLocation, authorZip, stop1placeName, stop1location, stop1description,stop2placeName, stop2location, stop2description, stop3placeName, stop3location, stop3description, stop4placeName, stop4location, stop4description) {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/create',
        data: {
        title: title,
        author: author,
        authorLocation:  authorLocation,
        authorZip: authorZip,
        stop1placeName: stop1placeName,
        stop1location: stop1location,
        stop1description: stop1description,
        stop2placeName: stop2placeName,
        stop2location: stop2location,
        stop2description: stop2description,
        stop3placeName:  stop3placeName,
        stop3location: stop3location,
        stop3description: stop3description,
        stop4placeName: stop4placeName,
        stop4location: stop4location,
        stop4description: stop4description
      }
      })
    }
  }
}

