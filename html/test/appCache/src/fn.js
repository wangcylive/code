(function(w, d) {

    w.applicationCache.addEventListener("updateready", function(event) {
        console.log("updateready");
    });

    w.applicationCache.addEventListener("checking", function(event) {
        console.log("checking");
    });

    w.applicationCache.addEventListener("downloading", function(event) {
        console.log("downloading");
    });

}(window, document));