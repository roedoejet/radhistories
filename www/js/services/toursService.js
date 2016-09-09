angular.module('starter').factory('ToursService', ['$http',
    function($http) {
        return {
            all: function() {
                return $http.get('https://radhistories.com/wp-content/themes/glwparent-child/tours.php')
                    .then(function(response) {
                        return response;
                    });
            }
        }
    }
]);