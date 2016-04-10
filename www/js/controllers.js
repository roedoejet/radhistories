angular.module('starter')
    .controller('HomeCtrl', function($scope) {})

    .controller('ToursCtrl', function($scope) {})

    .controller('MapCtrl',
  [ '$scope',
    '$rootScope',
    '$cordovaGeolocation',
    '$stateParams',
    '$ionicModal',
    '$ionicPopup',
    'LocationsService',
    'InstructionsService',
    function(
      $scope,
      $rootScope,
      $cordovaGeolocation,
      $stateParams,
      $ionicModal,
      $ionicPopup,
      LocationsService,
      InstructionsService
      ) {

      // List of Tours
    $scope.popularTours = LocationsService.topThree().posts
    $scope.tours = LocationsService.all().posts
          
    
      // Info Modal
    
    $ionicModal.fromTemplateUrl('templates/infoModal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.infoModal = modal;
  });      
  $scope.closeInfoModal = function() {
    $scope.infoModal.hide();
  };
  $scope.openInfoModal = function() {
    $scope.infoModal.show();
  };
  

      
          
          
      /**
       * Once state loaded, get put map on scope.
       */
//      $scope.$on("$ready", function() {
        angular.element(document).ready(function () {

        $scope.locations = LocationsService.all().posts;
        $scope.newLocation;

//        if(!InstructionsService.instructions.newLocations.seen) {
//
//          var instructionsPopup = $ionicPopup.alert({
//            title: 'Add Locations',
//            template: InstructionsService.instructions.newLocations.text
//          });
//          instructionsPopup.then(function(res) {
//            InstructionsService.instructions.newLocations.seen = true;
//            });
//
//        }

        $rootScope.map = {
          center: {
              lat: 49.2827,
              lng: -123.1207,
              zoom: 12
          },
          defaults: {
            tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            maxZoom: 18,
            zoomControlPosition: 'bottomleft'
          },
          markers : {},
          events: {
            map: {
              enable: ['context'],
              logic: 'emit'
            }
          }
        };

//        $scope.goTo(0);

      });

      var Location = function() {
        if ( !(this instanceof Location) ) return new Location();
        this.lat  = "";
        this.lng  = "";
        this.name = "";
      };

      $ionicModal.fromTemplateUrl('templates/addLocation.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
          $scope.modal = modal;
        });

      /**
       * Detect user long-pressing on map to add new location
       */
      $scope.$on('leafletDirectiveMap.contextmenu', function(event, locationEvent){
        $scope.newLocation = new Location();
        $scope.newLocation.lat = locationEvent.leafletEvent.latlng.lat;
        $scope.newLocation.lng = locationEvent.leafletEvent.latlng.lng;
        $scope.modal.show();
      });

      $scope.saveLocation = function() {
        LocationsService.all().posts.push($scope.newLocation);
        $scope.modal.hide();
        $scope.goTo(LocationsService.all().posts.length - 1);
      };

      /**
       * Center map on specific saved location
       * @param locationKey
       */
      $scope.goTo = function(locationKey) {
          var location = LocationsService.all().posts[locationKey];
          
          console.log(location)
          
        $rootScope.map.center  = {
            lat : location.custom_fields.coordinates.lat,
            lng : location.custom_fields.coordinates.lng,
          zoom : 12
        };
          
        $rootScope.map.markers[locationKey] = {
            lat:location.custom_fields.coordinates.lat,
            lng:location.custom_fields.coordinates.lng,
          message: location.title,
          focus: true,
          draggable: false
        };
      };

      /**
       * Center map on user's current position
       */
      $scope.locate = function(){

        $cordovaGeolocation
          .getCurrentPosition()
          .then(function (position) {
            $scope.map.center.lat  = position.coords.latitude;
            $scope.map.center.lng = position.coords.longitude;
            $scope.map.center.zoom = 15;

            $scope.map.markers.now = {
              lat:position.coords.latitude,
              lng:position.coords.longitude,
              message: "You Are Here",
              focus: true,
              draggable: false
            };

          }, function(err) {
            // error
            console.log("Location error!");
            console.log(err);
          });

      };

    }]);


                                 