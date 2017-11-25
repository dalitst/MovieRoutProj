var actorApp = angular.module("actorApp", ["ngRoute"]);

actorApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    })
     .when("/actors", {
         templateUrl: "app/gallery/actorGallery.html",
         controller: "actorGalleryCtrl"
    })
    // .when("/cars/:index", {
    //     templateUrl: "app/details/carDetails.html",
    //     controller: "carDetailsCtrl"        
    // })
    // .when("/maintenance", {
    //     templateUrl: "app/maintenance/maintenance.html"    
    // })    
})

actorApp.controller("TestCtrl", function(Actor, actors) {
    var actor = new Actor("Bruce", "Willis", "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA0MjMzMTE5OF5BMl5BanBnXkFtZTcwMzQ2ODE3Mw@@._V1_UY317_CR27,0,214,317_AL_.jpg", "http://www.imdb.com/name/nm0000246/?ref_=nv_sr_1");
    console.log(actor);

    var actorsPlain = [{
        "firstName":"Gal",
        "lastName":"Gadot",
        "image":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg",
        "imdbUrl":"http://www.imdb.com/name/nm2933757/?ref_=nv_sr_1"
     },
     {
        "firstName":"Angelina",
        "lastName":"Jolie",
        "image":"https://images-na.ssl-images-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_UY317_CR22,0,214,317_AL_.jpg",
        "imdbUrl":"http://www.imdb.com/name/nm0001401/?ref_=nv_sr_2"
     },
     {
        "firstName":"Julia",
        "lastName":"Roberts",
        "image":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQzNjU3MDczN15BMl5BanBnXkFtZTYwNzY2Njc4._V1_UX214_CR0,0,214,317_AL_.jpg",
        "imdbUrl":"http://www.imdb.com/name/nm0000210/?ref_=nv_sr_1"
     },
     {
        "firstName":"Kevin",
        "lastName":"Spacey",
        "image":"https://images-na.ssl-images-amazon.com/images/M/MV5BY2NhY2U2YjgtNTFhZS00NjkwLWI2YzAtYWViNmRhMmQ5YWZjXkEyXkFqcGdeQXVyMDkxMjMwMA@@._V1_UY317_CR87,0,214,317_AL_.jpg",
        "imdbUrl":"http://www.imdb.com/name/nm0000228/?ref_=nv_sr_1"
     },
     {
        "firstName":"Brad",
        "lastName":"Pitt",
        "image":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
        "imdbUrl":"http://www.imdb.com/name/nm0000093/?ref_=nv_sr_1"
     },
     {
        "firstName":"Jack",
        "lastName":"Nicholson",
        "image":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_UY317_CR7,0,214,317_AL_.jpg",
        "imdbUrl":"http://www.imdb.com/name/nm0000197/?ref_=nv_sr_1"
     }];

     actors.setActors(actorsPlain);
     actors.addActor(actor);
     console.log(actors.getAll());
     console.log(actors.getActorById(0));
 
 });
// $http.get("actors.json").then(function mySuccess(response){
//     //   $scope.actors = response.data;
//     for (var i = 0; i < response.data.length; i++) {
//        $scope.actors.push(new Actor(response.data[i].firstName, response.data[i].lastName, 
//          response.data[i].image, response.data[i].imdbUrl)) 
//        } 
//    alert("success" + JSON.stringify(response.status));
//     }, function myError(response) {
//    alert("error" + JSON.stringify(response.status));
//    })
// })

// console.log(actor);