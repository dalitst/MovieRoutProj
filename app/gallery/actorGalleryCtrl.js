actorApp.controller("actorGalleryCtrl", function($scope, actors, $log, $http, $location) {
    //$scope.test = "galcrtlewewew";

    // http call to get data from json
    $http.get("app/model/data/actors.json").then(function mySuccess(response) {
        // Updating the service with the data
        actors.setActors(response.data);

        // Getting the data from the service
        $scope.actors = actors.getAll();
      }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });

    $scope.addActor = function() {
        actors.addActor(new Actor("Tom", "Cruise", "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY98_CR4,0,67,98_AL_.jpg", "http://www.imdb.com/name/nm0000129/bio?ref_=nm_ov_bio_sm"));
        $scope.actors = actors.getAll();
    }
      
      $scope.sortBy = function(prop) {
        $scope.orderProp = prop;
      }
      
      $scope.openActor = function (actor) {
        // Getting the index of the actor in the array
        var actorIndex = $scope.actors.indexOf(car);

        // Updating the URL
        $location.path("/actors/" + actorIndex)
      }
    })