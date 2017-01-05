angular
  .module('solo.ItinFactory', [])
  .factory('ItinFactory', ItinFactory);

function ItinFactory() {
  return {
    post: function () {
      itinerary.create({
        id: req.spot,
        author: req.author,
        location: req.location,
        description: req.description
      })
    }
  }

}
