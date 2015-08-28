(function() {
    var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;

    function updateBatteryStatus() {
        alert("Battery Status: " + battery.level * 100 + "%");

        if(battery.charging) {
            alert("Battery is charging");
        }
    }

    battery.addEventListener("chargingchange", updateBatteryStatus);
    battery.addEventListener("levelchange", updateBatteryStatus);
    updateBatteryStatus();
}());