/**
 * apply和call是函数对象的一个方法，它的作用是改变函数的调用对象，它的第一个参数就表示改变后的调用这个函数的对象
 * apply(thisObj[,arg1[,arg2]...])
 * call(thisObj[,arg1][,arg2]...)
 */

/**
 * 区别：
 * apply传入的是一个参数数组，也就是将多个参数组合成为一个数组传入，而call则作为call的参数传入（从第二个参数开始）
 * fn.call(this, arg1, arg2);
 * fn.apply(this, [arg1, arg2]);
 * fn.apply(this, arguments);
 */

/********** apply Example 1 **********/
console.log("********** apply Example 1 **********");

function showAllArguments() {
    var i = 0,
        length = arguments.length,
        result = "";
    
    for(; i < length; i++) {
        result += arguments[i] + (i == length - 1 ? "" : ", ");
    }
    console.log(result);
}

function callShowAllArguments() {
    showAllArguments.apply(this, arguments);
}

callShowAllArguments("arg1", "arg2", "arg3", {name: "wangcy", age: "24"});



/********** apply Example 2 **********/
console.log("********** apply Example 2 **********");

function setPropertyName() {
    var i = 0,
        length = arguments.length;
    for(; i < length; i++) {
        this["property" + (i + 1)] = arguments[i];
    }
}

function getPropertyName() {
    setPropertyName.apply(this, arguments);
}

getPropertyName.prototype.show = function() {
    for(var prop in this) {
        if(this.hasOwnProperty(prop)) {
            console.log(prop + ": " + this[prop]);
        }
    }
}

var example2 = new getPropertyName("wangcy", "love", "chend");
example2.show();


/********** Array each Example **********/
console.log("********** Array each Example **********");

// 判断是否为Array
if(!Array.isArray) {
    Array.isArray = function (Arg) {
        return Object.prototype.toString.call(Arg) === "[object Array]";
    }
}
  
Array.prototype.each = function(callback) {
    for(var i = 0, j = this.length; i < j; i++) {
        Array.isArray(this[i]) ? this[i].each(callback) : callback.call(this, this[i], i);  
    }
}

var eachArray = function(arg, callback) {
    var i = 0,
        m = arg.length;

    for(; i < m; i++) {
        callback.call(arg[i], arg[i], i);
    }
}

var arrayExample = ["wangcy", "chendy", [1, 2]];

arrayExample.forEach(function(_t, i) {
    console.log("js Array.forEach: this = %o, _t = %o, i = %i", this, _t, i);
});

arrayExample.each(function(_t, i) {
    console.log("js Array.prototype.each: this = %o, _t = %o, i = %i", this, _t, i);
});

eachArray(arrayExample, function(_t, i) {
    console.log("js Array each function: this = %o, _t = %o, i = %i", this, _t, i);
});

$.each(arrayExample, function(i, _t) {
    console.log("jQuery each: this = %o, _t = %o, i = %i", this, _t, i);
});

$.each(arrayExample, function() {
    console.log(this + " Array后面添加字段");
});

eachArray(arrayExample, function() {
    console.log(this.length);
});

["wangcy", "cd", "cfl", "ymy"].forEach(function(_t, i) {
    console.log(_t + "  " + i);
});



/********** arguments **********/
console.log("********** arguments **********");

/**
 * Arguments是进行函数调用时，除了指定的参数外，还另外创建的一个隐藏对象。
 * Arguments是一个类似数组但不是数组的对象，说它类似数组是因为其具有数组一样的访问性质及方式，
 * 可以由arguments[n]来访问对应的单个参数的值，并拥有数组长度属性length。
 * 还有就是arguments对象存储的是实际传递给函数的参数，而不局限于函数声明所定义的参数列表，
 * 而且不能显式创建 arguments 对象。arguments 对象只有函数开始时才可用
 */
var argumentsFn = function(a, b) {
    var explictArgs = arguments.length,
        implictArgs = arguments.callee.length;

    console.log(typeof arguments);
    console.log(arguments instanceof Array);
    console.log(arguments instanceof Object);
    console.log("形式参数长度: " + implictArgs + ", 实际参数长度：" + explictArgs);
    console.log(arguments);
}

argumentsFn(1, 2, 3, 4);



/********** caller **********/
console.log("********** caller **********");

/**
 * 返回一个对函数的引用，该函数调用了当前函数
 * functionName.caller
 * functionName 对象是所执行函数的名称
 * 对于函数来说，caller 属性只有在函数执行时才有定义。
 * 如果函数是由顶层调用的，那么 caller 包含的就是 null 。
 * 如果在字符串上下文中使用 caller 属性，那么结果和 functionName.toString 一样，也就是说，显示的是函数的反编译文本。
 */
function callerDemo() {
    if(arguments.callee.caller) {
        console.log(arguments.callee.caller.toString());
    } else {
        console.log("This is a top function.");
    }
}

callerDemo();

function handleCaller() {
    callerDemo();
}

handleCaller();

(function() {
    handleCaller();
}());

// handleCaller();



/********** callee **********/
console.log("********** callee **********");

// callee可以打印其本身
function calleeDemo() {
    console.log("参数被调用函数：%o", arguments.callee);
}
calleeDemo();

(function() {
    console.log("参数被调用函数：%o", arguments.callee);
}());


//用于验证参数
function calleeLengthDemo(arg1, arg2) {
    console.log("实参长度：%i", arguments.length);
    console.log("形参长度：%i", arguments.callee.length);
}
calleeLengthDemo("wangcy", "cd", 1, {name: "wangcy"});

//递归计算
var sumA = function(n){
    if (n <= 1) {
        return 1;
    } else {
        return n + arguments.callee(n - 1);
    }
}

console.log("sumA: %i", sumA(2));

var sumB = function(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n + sumB(n - 1);
    }
}

console.log("sumB: %i", sumB(2));