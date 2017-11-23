actorApp.factory("Actor", function() {
    
    // Actor Constructor
    function Actor(firstName,lastName,image,imdbUrl) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.image = image;
        this.imdbUrl = imdbUrl;
        };

    return Actor;
  })