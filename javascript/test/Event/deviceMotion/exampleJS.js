if ((window.DeviceMotionEvent) {
  window.addEventListener('devicemotion', deviceMotionHandler, false);
} else {
  document.getElementById("dmEvent").innerHTML = "Not supported on your device."
}
function deviceMotionHandler(eventData) {
  // 捕捉重力加速度
  var acceleration = eventData.accelerationIncludingGravity;
 
  // 打印加速数据
  var rawAcceleration = "[" +  Math.round(acceleration.x) + ", " +
    Math.round(acceleration.y) + ", " + Math.round(acceleration.z) + "]";
 
  // Z轴,可知设备朝上或者朝下
  var facingUp = -1;
  if (acceleration.z &gt; 0) {
    facingUp = +1;
  }
 
  // 根据重力通过 acceleration.x|y 转换得到加速值,
  // 运用重力加速度9.81来计算得到一个百分比然后乘以转换角度90
  var tiltLR = Math.round(((acceleration.x) / 9.81) * -90);
  var tiltFB = Math.round(((acceleration.y + 9.81) / 9.81) * 90 * facingUp);
 
  // 打印加速度的计算结果
  document.getElementById("moAccel").innerHTML = rawAcceleration;
  document.getElementById("moCalcTiltLR").innerHTML = tiltLR;
  document.getElementById("moCalcTiltFB").innerHTML = tiltFB;
 
  // 将2D和3D的转换应用到图片上
  var rotation = "rotate(" + tiltLR + "deg) rotate3d(1,0,0, " + (tiltFB) + "deg)";
  document.getElementById("imgLogo").style.webkitTransform = rotation;