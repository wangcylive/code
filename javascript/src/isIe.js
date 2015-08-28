if(window.clipboardData) {
	window.clipboardData.setData('text',document.URL);
} else {
	alert('您的浏览器不能自动复制，请手动ctrl+c复制！');
}
var isIE = !!window.ActiveXObject;  
var isIE6 = isIE && !window.XMLHttpRequest;  
var isIE8 = isIE && !!document.documentMode;  
var isIE7 = isIE && !isIE6 && !isIE8; 