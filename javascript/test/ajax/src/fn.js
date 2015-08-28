function ajax(options) {
    function callback() {}

    var url = options.url || "",
        type = options.type || "GET",
        cache = options.cache === false ? false : true,
        dataType = options.dataType || "text",
        async = !!options.async,
        data = options.data || null,
        fail = options.fail || callback,
        done = options.done || callback,
        always = options.always || callback;

    type = type.toUpperCase();

    var args = "";
    
    if(data !== null) {
        if(typeof data === "object") {
            var arr = [];
            
            for(var key in data) {
                if(data.hasOwnProperty(key)) {
                    var value = data[key];

                    arr.push(key + "=" + encodeURIComponent(value));
                }
            }

            args = arr.join("&");
        } else if(typeof data === "function") {
            args = data();
        } else if(typeof data === "string") {
            args = data;
        }
    }
    
    if(type === "GET") {
        url += (url.indexOf("?") === -1 ? "?" : "&") + args;
        
        if(!cache) {
            url += (url.indexOf("?") === -1 ? "?" : "&") + "_=" + new Date().getTime();
        }
    }
     
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    xhr.onreadystatechange = function() {

        if(xhr.readyState === 4) {
            var status = xhr.status,
                isSuccess = status >= 200 && status < 300 || status === 304;
            
            if(isSuccess) {
                var data = (dataType === "text" ? xhr.responseText : xhr.responseXML);

                done(data, xhr.statusText, xhr);

                always(data, xhr.statusText, xhr);
            } else {
                fail(xhr, xhr.statusText);

                always(xhr, xhr.statusText);
            }
            
        }
    };
    
    xhr.open(type, url, async);
    
    if(type === "POST") {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
        xhr.send(args);
    } else {
        xhr.send();
    }

    return xhr;
};

/**
 * readyState 5中状态
 * 0-（未初始化）还没调用send()方法
 * 1-（载入）已调用send()方法，正在发送请求
 * 2-（载入完成）send()方法执行完成，已经接收到全部响应内容
 * 3-（交互）正在解析响应内容
 * 4-（完成）响应内容解析完成，可以在客户端调用
 */



(function() {

    ajax({
        url: "data/example.json",
        type: "get",
        cache: false,
        data: {
            name: "wangcy",
            email: "w@w.com"
        },
        done: function(data, statusText, xhr) {
            // console.group('done');
                console.log(statusText);
            // console.groupEnd();
        },
        fail: function(xhr, statusText) {
            // console.group('fail');
                console.log(xhr);
                console.log(statusText);
            // console.groupEnd();
        },
        always: function() {
            // console.group('always');
                console.log(arguments[0]);
                console.log(arguments[1]);
                console.log(arguments[2]);
            // console.groupEnd();
        }
    });

    function writeTable(data) {
        var d = JSON.parse(data);

        var table = document.createElement("table"),
            tbody = document.createElement("tbody"),
            fragment = document.createDocumentFragment();

        var i = 0,
            length = d.themes.length;

        for(i; i < length; i++) {
            var tr = document.createElement("tr");

            // console.log(d.themes[i]);
            for(var x in d.themes[i]) {
                var td = document.createElement("td");

                td.appendChild(document.createTextNode(d.themes[i][x]));

                tr.appendChild(td);
            }

            fragment.appendChild(tr);
        }

        tbody.appendChild(fragment);
        table.appendChild(tbody);

        document.body.appendChild(table);
    }

    

}());

/**   
  * 执行基本ajax请求,返回XMLHttpRequest   
  *  Ajax.request({   
  *  url
  *  async 是否异步 true(默认)  
  *  method 请求方式 POST or GET(默认)  
  *  data 请求参数 (键值对字符串)  
  *  success 请求成功后响应函数，参数为xhr  
  *  error 请求失败后响应函数，参数为xhr  
  *  });   
  */   
Ajax = (function() {
    function request(opt) {
        function fn() {
        }

        var url = opt.url || "";

        var async = opt.async !== false,
            method = opt.method || 'GET',
            data = opt.data || null,
            success = opt.success || fn,
            error = opt.failure || fn;

        method = method.toUpperCase();

        if (method == 'GET' && data) {
            var args = "";

            if(typeof data == 'string'){
                //alert("string")
                args = data;
            } else if(typeof data == 'object') {
                //alert("object")
                var arr = new Array();

                for(var k in data) {
                    var v = data[k];
                    arr.push(k + "=" + v);
                }

                args = arr.join("&");
            }

            url += (url.indexOf('?') == -1 ? '?' : '&') + args;

            data = null;
        }

        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

        xhr.onreadystatechange = function() {
            _onStateChange(xhr, success, error);
        };

        xhr.open(method, url, async);

        if (method == 'POST') {
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;');
        }

        xhr.send(data);

        return xhr;
    }

    function _onStateChange(xhr, success, failure) {
        if (xhr.readyState == 4) {
            var s = xhr.status;

            if (s >= 200 && s < 300) {
                success(xhr);
            } else {
                failure(xhr);
            }
        } else {

        }
    }

    return {
        request : request
    };
}());


// var b = Ajax.request({
//     url: "data/example.json",
//     method: "get",
//     data: {
//         name: "wangcy"
//     },
//     success: function(xhr) {
//         console.log(xhr.responseText);
//     },
//     error: function(xhr) {
//         console.log(xhr);
//     }
// });

// console.log(b);