var actorApp = angular.module("actorApp", ["ngRoute"]);

actorApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    })
    // .when("/cars", {
    //     templateUrl: "app/gallery/carGallery.html",
    //     controller: "carGalleryCtrl"
    // })
    // .when("/cars/:index", {
    //     templateUrl: "app/details/carDetails.html",
    //     controller: "carDetailsCtrl"        
    // })
    // .when("/maintenance", {
    //     templateUrl: "app/maintenance/maintenance.html"    
    // })    
})


