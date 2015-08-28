/**
 * 对象属性或方法不存在，或声明了变量但从未赋值。
 * 代表一切未知的事物，什么都没有，无法想象，代码无法处理。
 * typeof(undefined)返回的是undefined，可以将undefined赋值给任何变量和属性，
 * 但并不意味了清除了该变量，反而会因此多一个属性。
 */
undefined
/**
 * 判断对象属性或方法是否存在，或是否给变量赋值
 */
if(typeof(x) == "undefined") {}

/**
 * 有那么一个概念，但没有东西，代码可以处理。
 * typeof(null)返回的是object，但null并不是object，具有null值的变量也并非object。
 * 产生null的原因是对一个变量显式地赋值null，包含null表达式之间的任何操作。
 * 可以通过给一个变量赋值null出清楚变量的内容。
 * null == undefined。
 */
null
/**
 * 检查一个对象的属性是否存在
 */
if('x' in y) {}

/**
 * 是就是，非就非，没有疑问，对就对，错纠错，绝对明确，既能被代码处理，也可以控制代码流程。
 * null、undefined和0被当作false，0==false，1==true。
 */
boolean

/**
 * 线性的事物，大小和次序分明，多而不乱。便于代码进行批量处理，也可以控制代码的迭代和循环。
 * typeof(NaN)和typeof(Infinity)返回的都是number，NaN参加任何计算都是NaN，NaN != NaN，
 * Infinity/Infinity = NaN
 */
unmber

/**
 * 面向人类的理性事物，而不是机器信号。人机信息沟通，代码据此理解人的意图等等。
 */
string
/**
 * 调用一个对象的方法，以另一个对象替换当前对象。
 * 参数thisObj。
 * 可选项arg1,arg2,,argn，将被传递方法参数序列。
 * call方法可以用来代替另一个对象调用一个方法，call方法可将一个函数对象上下文从初始的上下文改变为由
 * thisObj指定的对象。
 * apply和call用法一样，只是第二个参数必须是数组。
 */
call([thisObj[,arg1[,[arg2[,[.argn]]]]])

/**
 * 复制内容
 */
if(window.clipboardData) {
	window.clipboardData.setData('text',document.URL);
} else {
	
}
/**
 * [屏蔽鼠标右键]
 * @return {[type]} [description]
 */
document.oncontextmenu = function() {
	return false;
}
/**
 * [禁止粘贴]
 * @return {[type]} [description]
 */
document.onpaste = function() {
	return false;
}
/**
 * [禁止复制]
 * @return {[type]} [description]
 */
document.oncopy = function() {
	return false;
}
/**
 * 禁止选中
 */
if(document.all) {
	document.onselectstart = function() {
		return false;
	}
} else {
	$('body').css({'user-select':'none'});
}
/**
 * [询问]
 * @type {[type]}
 */
var c = confirm("您确认要关闭吗？");
/**
 * [输入信息]
 * @type {[type]}
 */
var p = prompt("提示标题","用户输入内容");
/**
 * [关闭窗口]
 * @return {[type]} [description]
 */
var close = function() {
	window.opener = null;
	window.open("","_self");
	window.close();
}

// 添加收藏夹
function addFavorite(sURL, sTitle) {
    try {
        window.external.addFavorite(sURL, sTitle);
    } catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "");
        } catch (e) {
            alert("您的浏览器需要手动添加收藏，\n请使用快捷键Ctrl+D进行添加");
        }
    }
}

// 设置首页
function setHome(url){
    try {
        document.body.style.behavior = "url(#default#homepage)";
        document.body.setHomePage(url);
    } catch(e) {
        prompt("您的需要手动设置首页，\n请复制下面的地址手动设置", window.location);
    }
}