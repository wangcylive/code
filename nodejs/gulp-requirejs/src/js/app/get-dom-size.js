define(function(require) {
    return {
        showSize: function(arg) {
            try {
                var width = arg.clientWidth,
                    height = arg.clientHeight;

                var app = require("app-log");

                app.log("width = " + width + "; height = " + height);
            } catch(e) {
                throw "arguments not's dom";
            }
        }
    }
});