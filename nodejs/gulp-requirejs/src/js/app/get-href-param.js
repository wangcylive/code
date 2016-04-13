define(function() {
    var parameterArr = window.location.search.substring(1).split("&"),
        parameterArrLength = parameterArr.length,
        parameterObj = {};

    for(var i = 0; i < parameterArrLength; i++) {
        var splitString = parameterArr[i].split("=");
        parameterObj[splitString[0]] = splitString[1];
    }

    return parameterObj;
});