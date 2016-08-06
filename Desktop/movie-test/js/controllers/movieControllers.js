function movieController($scope, movies) {
    
    
    $scope.movies;

      movies.getMovies().then(function (response) {

               $scope.movies = {
                    title: response.data.Title,
                    image: response.data.Poster,
                    year: response.data.Year,
                    genre: response.data.Genre,
                    actors: response.data.Actors,
                    director: response.data.Director,
                    Type: response.data.Type,
                    imdbRating: response.data.imdbRating
           
                };
                                for(var i=0;i<$scope.movies.length;i++){
                         $movies.getMovies.push(i);
                  }
         
             }, function (error) {

                console.error(error);
        });
        
}