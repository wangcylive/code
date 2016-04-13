define(function(require, exports, module) {
    var app = {
        track: true
    };
    app.log = function() {
        if(this.track) {
            var args = Array.prototype.slice.call(arguments, 0);
            try {
                console.log.apply(console, args);
            } catch (e) {

            }
        }
    };
    return app;
});