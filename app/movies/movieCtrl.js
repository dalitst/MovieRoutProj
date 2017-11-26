actorApp.controller("movieCtrl", function($scope , $http, convert, Movie) {
    $scope.movies = [];
    
        $http.get("movies.json").then(function mySuccess(response){
            for (var i = 0; i < response.data.length; i++) {
               $scope.movies.push(new Movie(response.data[i].title, response.data[i].duration, 
                 response.data[i].cast, response.data[i].director, response.data[i].imdbUrl)) 
               } 
           //alert("success" + JSON.stringify(response.status));
            }, function myError(response) {
           alert("error" + JSON.stringify(response.status));
           }) })