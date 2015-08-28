(function(d) {
    var inputUserName = d.getElementById("userName"),
        inputUserEmail = d.getElementById("userEmail");

    if(!Modernizr.input.autofocus) {
        
    }

    if(!Modernizr.input.placeholder) {
        
    }

    
    // ie8以下支持propertychange事件，ie9+及主流浏览器支持input事件
    // ie9 input事件 删除、剪贴不触发
}(document));