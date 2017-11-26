actorApp.factory("movies", function(Movie) {
    var movies = [];

    function getAll() {
        return movies;
    }

    function getMovieById(index) {
        return movies[index];
    }

    function addMovie(movie) {
        movies.push(movie);
    }

    function setMovies(moviesPlain) {
        movies = [];
        for (var i = 0; i < moviesPlain.length; i++) {
            movies.push(new Movie(moviesPlain[i].title, moviesPlain[i].duration, 
                moviesPlain[i].cast, moviesPlain[i].director, moviesPlain[i].imdbUrl))
        }
    }

    return {
        getAll: getAll,
        getMovieById: getMovieById,
        addMovie: addMovie,
        setMovies: setMovies
    }
})