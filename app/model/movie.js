actorApp.factory("Movie", function(convert) {
    
        function Movie(title,duration,cast,director,imdbUrl) {
        this.title = title;
        this.duration = duration;
        //this.cast = cast;
        this.cast = "";
         for (var j = 0; j  < cast.length; j++) {        
           this.cast += cast[j];
           if ((j + 1) < cast.length) {
             this.cast += ", ";
           }}
        this.director = director;
        this.imdbUrl = imdbUrl;
        this.durationStr = convert.min2str(this.duration);
    }
        return Movie;
    })