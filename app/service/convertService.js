actorApp.factory("convert", function() {

    function convertMinToStr(duration) {
        var hour = Math.floor(duration / 60);
        var minute = duration % 60;
        return hour.toString() + "h " + minute.toString() + "min";
    }
        return {
            min2str : convertMinToStr
        }

});
