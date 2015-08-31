require.config({baseUrl:"js/",paths:{getHrefParam:"app/get-href-param",getHrefParamArray:"app/get-href-param-array",getDomSize:"app/get-dom-size",jquery:["http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min","lib/jquery-2.1.3.min"],zepto:"lib/zepto.min",json:"lib/json2.min",iscroll:"lib/iscroll-lite.min","jquery.mousewheel":"lib/jquery.mousewheel.min","jquery.color":"lib/jquery.colors","jquery.nodeName":"app/jquery.nodeName",appLog:"app/app-log"},shim:{"jquery.color":["jquery"]}}),define("main-config",function(){}),require(["main-config"],function(){require(["appLog","jquery","getHrefParamArray"],function(e,n,r){e.track=!1,e.log(r),require(["jquery.color"],function(){n("h1").animate({color:"#ff0000"},2e3)}),require(["jquery.nodeName"],function(){e.log(n("body").nodeName())});var o=n("#mousewheel"),t=n("#mouseDelta");o.one("mouseover",function(){require(["jquery.mousewheel"],function(){o.mousewheel(function(e){t.val(e.deltaY)})})}),function(){var e=document.getElementById("nav");"function"==typeof addEventListener?require(["iscroll"],function(){new IScroll(e,{scrollX:!0,scrollY:!1,eventPassthrough:!0})}):e.style.width="500px"}();var i="function"==typeof addEventListener?["zepto"]:["jquery"],a=document.getElementById("loadShareModule");"function"==typeof addEventListener?a.addEventListener("click",function(){var n=Date.now();require(i,function(){e.log(Date.now()-n)})},!1):a.attachEvent("onclick",function(){var n=+new Date;require(i,function(){e.log(+new Date-n)})});var u="[object JSON]"===Object.prototype.toString.call(JSON)?[]:["json"],c={name:"李嘉辉",age:24,sex:"man",height:"182cm"};require(u,function(){var n=JSON.stringify(c,function(e,n){return"sex"===e?"women":n},4);e.log("JSON.stringify",n);var r=JSON.parse(n,function(e,n){return"sex"===e?"man":n});e.log("JSON.parse",r)})})}),define("main",function(){}),define("appLog",[],function(){var e={track:!0};return e.log=function(){if(this.track){var e=Array.prototype.slice.call(arguments,0);try{console.log.apply(console,e)}catch(n){}}},e}),define("getHrefParam",[],function(){for(var e=window.location.search.substring(1).split("&"),n=e.length,r={},o=0;n>o;o++){var t=e[o].split("=");r[t[0]]=t[1]}return r}),define("getHrefParamArray",["getHrefParam"],function(e){var n=e,r=[];for(var o in n)r.push(o,n[o]);return r}),define("getDomSize",[],function(){return{showSize:function(e){try{var n=e.clientWidth,r=e.clientHeight;console.log("width = "+n+"; height = "+r)}catch(o){throw"arguments not's dom"}}}});