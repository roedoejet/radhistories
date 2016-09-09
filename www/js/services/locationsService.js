angular.module('starter').factory('LocationsService', ['$http',
    function($http) {
        return {
            all: function() {
                return $https.get('https://radhistories.com/?json=get_recent_posts&post_type=location')
                    .then(function(response) {
                        return response;
                    });
            }
        }
    }
]);