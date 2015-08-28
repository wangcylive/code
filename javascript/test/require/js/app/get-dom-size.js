define(function() {
    return {
        showSize: function(arg) {
            try {
                var width = arg.clientWidth,
                    height = arg.clientHeight;

                console.log("width = " + width + "; height = " + height);
            } catch(e) {
                throw "arguments not's dom";
            }
        }
    }
});