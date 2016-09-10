angular.module('starter').factory('LocationsService', ['$http',
    function($http) {
        return {
            all: function() {
                return $http.get('http://radhistories.com/?json=get_recent_posts&post_type=location')
                    .then(function(response) {
                        return response;
                    });
            }
        }
    }
]);