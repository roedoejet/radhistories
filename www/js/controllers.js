angular.module('starter')
    .controller('HomeCtrl', ['$scope','LocationsService','$cordovaGeolocation','$rootScope', '$ionicModal',
     function($scope,LocationsService,$cordovaGeolocation,$rootScope,$ionicModal) {
         
        // $scope.allMarkers
        // $scope.markers
        // $scope.currentTour
         
        angular.element(document).ready(function() {
            
            // Load initial map
            $scope.map = {
                center: {
                    lat: 49.2592095,
                    lng: -123.0908865,
                    zoom: 12
                },
                defaults: {
                    tileLayer: 'https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw',
                    maxZoom: 18,
                    zoomControlPosition: 'bottomleft',
                    attribution: ''
                },
                markers: {},
                events: {
                    map: {
                        enable: ['context'],
                        logic: 'emit'
                    }
                }
            };
            
            // Add current point markers, add to map
            $scope.map.markers = [];
            LocationsService.all().then(function(theseLocations) {
                var thesePoints = theseLocations.data.posts;
                $scope.allMarkers = [];
                thesePoints.forEach(function(element,index,array) {
                  var theseCoordinatesArray = element.custom_fields.coordinates[0].split(',');
                  var thisExcerpt = element.excerpt;
                  var thisTitle = element.title;
                  var thisContent = element.content;
                  var html = "<h5>"+thisTitle+"</h5>"+
                        "<p>"+thisExcerpt+"</p>"+
                        "<button ng-click='openContentModal()'>Read more</button>";
                  $scope.allMarkers.push({
                      lat: parseFloat(theseCoordinatesArray[0]),
                      lng: parseFloat(theseCoordinatesArray[1]),
                      message: html,
                      post_id : element.id,
                      title: thisTitle,
                      excerpt: thisExcerpt,
                      link : element.url,
                      images : element.attachments,
                      authors : element.custom_fields.point_creator,
                      getMessageScope: function() { return $scope; }
                  });
                $scope.map.markers = $scope.allMarkers;
                });
            });
        });
        
         // Content Modal

         $ionicModal.fromTemplateUrl('templates/contentModal.html', {
             scope: $scope,
             animation: 'slide-in-up'
         }).then(function(modal) {
             $scope.contentModal = modal;
         });
         $scope.closeContentModal = function() {
             $scope.contentModal.hide();
         };
         $scope.openContentModal = function() {
             $scope.contentModal.show();
         };

        // Map geolocation centering
        $scope.locate = function() {
            $cordovaGeolocation
                .getCurrentPosition()
                .then(function(position) {
                    $scope.map.center.lat = position.coords.latitude;
                    $scope.map.center.lng = position.coords.longitude;
                    $scope.map.center.zoom = 15;
                    $scope.map.markers.now = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
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
         
        // Watch for tour selection
        $scope.$watch('$root.currentTour',function() {
            var currentTour = $rootScope.currentTour;
            var tourMarkers = [];
            if(typeof currentTour!=='undefined') {
                $scope.allMarkers.forEach(function(element,index,array) {
                    thisTourPointArray = currentTour.point_array[0].replace(/ /g,'');
                    thisTourPointArray = thisTourPointArray.split(',');
                    for(i=0;i<thisTourPointArray.length;i++) {
                        if(parseInt(thisTourPointArray[i])===element.post_id) {
                            tourMarkers.push(element)
                        }
                    }
                });
                $scope.map.markers = tourMarkers;
            }
        });
}])

.controller('ToursCtrl', ['$scope','ToursService','$rootScope',
    function($scope,ToursService,$rootScope) {
    // Get tours and list them
    var allTours = [];
    // Add current point markers, add to map
    $scope.tours = [];
    ToursService.all().then(function(tours) {
        tours.data.forEach(function(element,index,array) {
          // Update the sidebar with this info
          if(element.tour_name!=='Uncategorized') {
              if(element.point_array.length>0) {
                $scope.tours.push({
                    title : element.tour_name
                });
                allTours.push(element);
//                jQuery('#tour-list').append('<li class="list-group-item tour" id="tour-'+element.tour_id+'">'+element.tour_name+'</li>');
//                allTours.push(element);
              }
          }
        });
    });
    
    $scope.selectTour = function(key) {
        $rootScope.currentTour = allTours[key];
    }

}])

// Controller shell just so template loads
.controller('SettingsCtrl', [
    '$scope',
    '$rootScope',
function($scope,$rootScope) {
    
}])

.controller('MapCtrl', ['$scope',
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
        angular.element(document).ready(function() {
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
                markers: {},
                events: {
                    map: {
                        enable: ['context'],
                        logic: 'emit'
                    }
                }
            };

        });

        var Location = function() {
            if (!(this instanceof Location)) return new Location();
            this.lat = "";
            this.lng = "";
            this.name = "";
        };

        $ionicModal.fromTemplateUrl('templates/addLocation.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        /**
         * Center map on user's current position
         */
        $scope.locate = function() {

            $cordovaGeolocation
                .getCurrentPosition()
                .then(function(position) {
                    $scope.map.center.lat = position.coords.latitude;
                    $scope.map.center.lng = position.coords.longitude;
                    $scope.map.center.zoom = 15;

                    $scope.map.markers.now = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
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

    }
]);