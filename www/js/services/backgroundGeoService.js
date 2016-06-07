angular.module('starter').factory('BackgroundGeolocationService', ['$q', '$http', function ($q, $http) {
    var callbackFn = function(location) {
        console.log('[js] BackgroundGeoLocation callback:  ' + location.latitude + ',' + location.longitude);
//        $http({
//            //request options to send data to server
//        });
        backgroundGeoLocation.finish();
    },

        failureFn = function(error) {
            console.log('BackgroundGeoLocation error ' + JSON.stringify(error));
        },

        //Enable background geolocation
        start = function () {
            //save settings (background tracking is enabled) in local storage
            window.localStorage.setItem('bgGPS', 1);

            backgroundGeoLocation.configure(callbackFn, failureFn, {
                desiredAccuracy: 10,
                stationaryRadius: 20,
                distanceFilter: 30,
                debug: false,
                stopOnTerminate: false
            });

            backgroundGeoLocation.start();
        };

    return {
        start: start,

        // Initialize service and enable background geolocation by default
        init: function () {
            var bgGPS = window.localStorage.getItem('bgGPS');
            if (bgGPS == 1 || bgGPS == null) {
                start();
            }
        },

        // Stop data tracking
        stop: function () {
            window.localStorage.setItem('bgGPS', 0);
            backgroundGeoLocation.stop();
        }
    }
}]);