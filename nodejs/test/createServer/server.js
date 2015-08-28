/**
 * Created by Wangcy on 2015/8/5.
 */
var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {
            "Content-Type": "text/html",
            "Server": "nodejs"
        }
    );
    response.write("Hello NodeJs");
    response.write("大嘉辉，你个叼毛！");
    response.end();
}).listen(8888);