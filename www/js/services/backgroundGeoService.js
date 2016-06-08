angular.module('starter').factory('BackgroundGeolocationService', ['$q', '$http', 'LocationsService', '$cordovaLocalNotification', '$rootScope', function ($q, $http, LocationsService, $cordovaLocalNotification, $rootScope) {

    var callbackFn = function(location, geo) {
    
        console.log('[js] BackgroundGeoLocation callback:  ' + location.latitude + ',' + location.longitude);
        
        var userSettings = backgroundGeoLocation.config.extraOption;
        console.log(userSettings)
    
        var getDistance = function(loc1){
            var lat1 = loc1.lat;
            var lon1 = loc1.lon;
            var lld1 = new LatLng(lat1, lon1);
            var lld2 = new LatLng(location.latitude, location.longitude);
                return lld1.distance(lld2)*1000;
        };
        
        var withinDistance = function(loc){
            return loc.dist < userSettings.distance;
        }
        
        LocationsService.all().then(function(points){
                var posts = points.data.posts
                var loPoint = [];
            // populate list of points
                for(x in posts){
                    var point={};
                    point["id"] = x;
                    point["lat"] = posts[x].custom_fields.coordinates[0].split(',')[0];
                    point["lon"] = posts[x].custom_fields.coordinates[0].split(',')[1];
                    loPoint.push(point)
                    };

            // add distances
                for(x in loPoint){
                    var dist = getDistance(loPoint[x])
                    loPoint[x]["dist"] = dist;
                }
                console.log(loPoint)
            // find closest point 
                var pointsWithinDistance = loPoint.filter(withinDistance)
            
                var getClosestDist = function(lop){
                    if (lop.length != 0){
                        return Math.round(pointsWithinDistance[0].dist)
                    } else {
                        return 500
                    }; 
                }
                var closestDist = getClosestDist(pointsWithinDistance);

            if (closestDist < userSettings.distance){
                cordova.plugins.notification.local.schedule({
                    id: 1,
                    title: 'Hey!',
                    text: 'You\'re ' + closestDist + ' metres away from something cool!' ,
                    data: {
                        customProperty: 'custom value'
                    }
                });
            };
        });

        backgroundGeoLocation.finish();
    },

        failureFn = function(error) {
            console.log('BackgroundGeoLocation error ' + JSON.stringify(error));
        },

        //Enable background geolocation
        start = function (geo) {
            //save settings (background tracking is enabled) in local storage
            window.localStorage.setItem('bgGPS', 1);

            backgroundGeoLocation.configure(callbackFn, failureFn, {
                desiredAccuracy: 10,
                stationaryRadius: 20,
                distanceFilter: 30,
                debug: false,
                stopOnTerminate: false,
                extraOption: geo
            });

            backgroundGeoLocation.start(geo);
        };

    return {
        start: start,

        // Initialize service and enable background geolocation by default
        init: function (geo) {
            console.log(geo)
            var bgGPS = window.localStorage.getItem('bgGPS');
            if (bgGPS == 1 || bgGPS == null) {
                start(geo);
            }
        },

        // Stop data tracking
        stop: function () {
            window.localStorage.setItem('bgGPS', 0);
            backgroundGeoLocation.stop();
        }
    }
}]);