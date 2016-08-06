angular.module('movieApp', [])
.controller('movieController', ['$scope', 'movies', movieController])
.service('movies', movies);
//.directive('moviesCard', moviesCard);
