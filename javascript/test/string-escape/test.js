/**
 * Created by Wangcy on 2015/12/1.
 */
(function() {
    function stringEscape(string) {
        if(string == undefined) {
            return "";
        }

        var str = string + "";

        var char = "",
            value = [];

        var i = 0,
            length = string.length;
        for(; i < length; i++) {
            char = str.charAt(i);
            var encodeChar = encodeURIComponent(char);

            if(char === encodeChar) {
                value.push(char.charCodeAt(0).toString(16));
            } else {
                value.push(encodeChar.replace(/%/g, ""));
            }
        }

        return value.join("");
    }

    console.log(stringEscape("小日本Japan!"));

    function stringUnescape(string) {
        if(string == undefined) {
            return "";
        }

        var str = string + "";

        var arr = [],
            value = "";
        var i = 0,
            length = str.length / 2;

        for(; i < length; i++) {
            arr.push(str.substring(i * 2, i * 2 + 2));
        }

        value = arr.length > 0 ? "%" + arr.join("%") : "";

        try {
            value = decodeURIComponent(value);
        } catch (e) {
            value = "";
        }
        return value;
    }

    console.log(stringUnescape("E5B08FE697A5E69CAC4a6170616e21"));
}());