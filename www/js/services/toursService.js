angular.module('starter').factory('ToursService', ['$http',
    function($http) {
        return {
            all: function() {
                return $http.get('http://radhistories.com/wp-content/themes/glwparent-child/tours.php')
                    .then(function(response) {
                        return response;
                    });
            }
        }
    }
]);