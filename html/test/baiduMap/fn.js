(function() {

    function getCurrentPosition() {
        navigator.geolocation.getCurrentPosition(success, error, options);
    }

    getCurrentPosition();

    function success(pos) {
        var latitude = pos.coords.latitude,
            longitude = pos.coords.longitude;

        getMap(longitude, latitude);
    }

    function error(err) {
        console.log(err.message);
    }

    var options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
    }

    function getMap() {
        var map = new BMap.Map("baiduMap");             // 创建Map实例
        var point = new BMap.Point(113.39696321, 23.121297);    // 创建点坐标
        map.centerAndZoom(point, 15);                   // 初始化地图,设置中心点坐标和地图级别。
        map.addControl(new BMap.ZoomControl());         //添加地图缩放控件
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);

        var opts = {      
            width : 100,     // 信息窗口宽度      
            height: 50,     // 信息窗口高度      
            title : "过来"  // 信息窗口标题     
        }      
        var infoWindow = new BMap.InfoWindow("我在这里", opts);  // 创建信息窗口对象      
        map.openInfoWindow(infoWindow, marker.getPosition());      // 打开信息窗口
    }
}());