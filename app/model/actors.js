actorApp.factory("actors", function(Actor) {
    var actors = [];

    function getAll() {
        return actors;
    }

    function getActorById(index) {
        return actors[index];
    }

    function addActor(actor) {
        actors.push(actor);
    }

    function setActors(actorsPlain) {
        actors = [];
        for (var i = 0; i < actorsPlain.length; i++) {
            actors.push(new Actor(actorsPlain[i].firstName, actorsPlain[i].lastName, 
                actorsPlain[i].image, actorsPlain[i].imdbUrl))
        }
    }

    return {
        getAll: getAll,
        getActorById: getActorById,
        addActor: addActor,
        setActors: setActors
    }
})