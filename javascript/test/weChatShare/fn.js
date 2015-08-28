var wxData = {
    img_url: "http://xiaoyuan.istudy.com.cn/images/icon-schoolplus.png",
    link: "http://xiaoyuan.istudy.com.cn",
    title: "校园+",
    desc: "校园+官方网站",
    appid: "wxbdba826bf8b2feb1"
}

function shareFriend() {
    WeixinJSBridge.invoke('sendAppMessage', wxData, function(message) {


    });
}

function shareTimeline() {
    WeixinJSBridge.invoke('shareTimeline', wxData, function(message) {


    });
}


(function(w, d) {

    // 查看网络状态
    var getNetworkType = d.getElementById("getNetworkType");
    getNetworkType.addEventListener("click", function() {
        WeixinJSBridge.invoke("getNetworkType", {}, function(e) {
            var span = d.createElement("span");
            span.appendChild(d.createTextNode(e.err_msg));
            getNetworkType.parentNode.appendChild(span);
        });
    }, false);

    // 图片预览
    var imagePreview = d.getElementById("imagePreview"),
        imageList = [
                        "http://183.63.144.83:11002/share/images/weChat-andriod-download.png",
                        "http://183.63.144.83:11002/share/images/weChat-andriod-open.png",
                        "http://183.63.144.83:11002/share/images/weChat-iphone-download.png",
                        "http://183.63.144.83:11002/share/images/weChat-iphone-open.png"
                    ];

    imagePreview.addEventListener("click", function() {
        WeixinJSBridge.invoke("imagePreview", {
            current: imageList[0],
            urls: imageList
        })
    }, false);

    // 扫描二维码
    var scanQRCode = d.getElementById("scanQRCode");
    scanQRCode.addEventListener("click", function() {
        WeixinJSBridge.invoke("scanQRCode");
    }, false);

    // 关闭窗口
    var closeWindow = d.getElementById("closeWindow");
    closeWindow.addEventListener("click", function() {
        WeixinJSBridge.invoke("closeWindow");
    }, false);

    // 添加联系人
    var addContact = d.getElementById("addContact");
    addContact.addEventListener("click", function() {
        WeixinJSBridge.invoke("addContact", {
            webType: 1,
            userName: "qqauto"
        }, function(e) {
            alert(e.err_msg);
        });
    }, false);

    // 是否安装校园+
    var getInstallState = d.getElementById("getInstallState");
    getInstallState.addEventListener("click", function() {
        WeixinJSBridge.invoke("getInstallState", {
            "packageName": "com.istudy.school.add",
            "packageUrl": "wxbdba826bf8b2feb1"
        }, function(e) {
            alert(e.err_msg);
        })
    }, false);

}(window, document));


// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function() {

    var p = document.createElement("p");
    p.appendChild(document.createTextNode("WeixinJSBridge ready"));

    document.body.appendChild(p);

    // 发送给好友
    WeixinJSBridge.on('menu:share:appmessage', function(argv){
        shareFriend();
    });


    // 分享到朋友圈
    WeixinJSBridge.on('menu:share:timeline', function(argv){
        shareTimeline();
    });

}, false);