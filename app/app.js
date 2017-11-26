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
     .when("/movies", {
         templateUrl: "app/movies/movie.html",
         controller: "movieCtrl"        
     })
    // .when("/maintenance", {
    //     templateUrl: "app/maintenance/maintenance.html"    
    // })    
})

// actorApp.controller("TestCtrl", function(Actor, actors) {
//     var actor = new Actor("Bruce", "Willis", "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA0MjMzMTE5OF5BMl5BanBnXkFtZTcwMzQ2ODE3Mw@@._V1_UY317_CR27,0,214,317_AL_.jpg", "http://www.imdb.com/name/nm0000246/?ref_=nv_sr_1");
//     console.log(actor);

//     var actorsPlain = [{
//         "firstName":"Gal",
//         "lastName":"Gadot",
//         "image":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg",
//         "imdbUrl":"http://www.imdb.com/name/nm2933757/?ref_=nv_sr_1"
//      },
//      {
//         "firstName":"Angelina",
//         "lastName":"Jolie",
//         "image":"https://images-na.ssl-images-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_UY317_CR22,0,214,317_AL_.jpg",
//         "imdbUrl":"http://www.imdb.com/name/nm0001401/?ref_=nv_sr_2"
//      },
//      {
//         "firstName":"Julia",
//         "lastName":"Roberts",
//         "image":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQzNjU3MDczN15BMl5BanBnXkFtZTYwNzY2Njc4._V1_UX214_CR0,0,214,317_AL_.jpg",
//         "imdbUrl":"http://www.imdb.com/name/nm0000210/?ref_=nv_sr_1"
//      },
//      {
//         "firstName":"Kevin",
//         "lastName":"Spacey",
//         "image":"https://images-na.ssl-images-amazon.com/images/M/MV5BY2NhY2U2YjgtNTFhZS00NjkwLWI2YzAtYWViNmRhMmQ5YWZjXkEyXkFqcGdeQXVyMDkxMjMwMA@@._V1_UY317_CR87,0,214,317_AL_.jpg",
//         "imdbUrl":"http://www.imdb.com/name/nm0000228/?ref_=nv_sr_1"
//      },
//      {
//         "firstName":"Brad",
//         "lastName":"Pitt",
//         "image":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
//         "imdbUrl":"http://www.imdb.com/name/nm0000093/?ref_=nv_sr_1"
//      },
//      {
//         "firstName":"Jack",
//         "lastName":"Nicholson",
//         "image":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_UY317_CR7,0,214,317_AL_.jpg",
//         "imdbUrl":"http://www.imdb.com/name/nm0000197/?ref_=nv_sr_1"
//      }];

//      actors.setActors(actorsPlain);
//      actors.addActor(actor);
//      console.log(actors.getAll());
//      console.log(actors.getActorById(0));
 
//  });

 actorApp.controller("TestCtrl", function(Movie, movies) {
     var movie = new Movie("Die Hard", "172",  ["Bruce Willis","Bonnie Bedelia"] , "John McTiernan", "http://www.imdb.com/title/tt0095016/?ref_=nm_knf_i1");
     console.log(movie);

     var moviesPlain = [{
     "title":"Wonder Woman",
     "duration":"141",
     "cast":["Gal Gadot","Chris Pine","Connie Nielsen"],
     "director":"Zack Snyder",
     "imdbUrl":"http://www.imdb.com/title/tt0451279/?ref_=nm_knf_i1"
 },
  {
      "title":"Batman v Superman",
      "duration":"151",
      "cast":["Ben Affleck","Gal Gadot","Henry Cavill"],
      "director":"Zack Snyder",
      "imdbUrl":"http://www.imdb.com/title/tt2975590/?ref_=nm_knf_i2"
  },
  {
     "title":"Mr. & Mrs. Smith",
     "duration":"120",
     "cast":["Brad Pitt","Angelina Julie","Vince Vaughn"],
     "director":"Peter Berg",
     "imdbUrl":"http://www.imdb.com/title/tt0356910/?ref_=nm_knf_i3" 
 }];

      movies.setMovies(moviesPlain);
      movies.addMovie(movie);
      console.log(movies.getAll());
      console.log(movies.getMovieById(0));
 
  });