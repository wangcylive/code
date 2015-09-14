(function() {

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(pos) {
            var latitude = pos.coords.latitude,
                longitude = pos.coords.longitude;

            console.log(pos);
        }, function(err) {
            console.log(err);
            switch (err.code) {
                case 1:
                    console.log("permission denied");
                    break;
                case 2:
                    console.log("position unavailable");
                    break;
                case 3:
                    console.log("timeout");
                    break;
            }
        }, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 60000
        })
    } else {
        console.info("geolocation not supported!");
    }


    function getMap(longitude, latitude) {
        var map = new BMap.Map("baiduMap");                 // 创建Map实例
        var point = new BMap.Point(longitude, latitude);    // 创建点坐标
        map.centerAndZoom(point, 15);                       // 初始化地图,设置中心点坐标和地图级别。

        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
        marker.enableDragging();
        marker.addEventListener("click", function() {
            console.log(marker.getPosition());
        }, false);
    }

    /*getMap(116.404, 39.915);*/

    var map = new BMap.Map("baiduMap");
    var point = new BMap.Point(116.331398, 39.897445);
    map.centerAndZoom(point,12);

    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
        } else {
            alert('failed'+this.getStatus());
        }
    },{enableHighAccuracy: true})
}());