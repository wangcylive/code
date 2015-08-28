// 所有构造器/函数的__proto__都指向Function.prototype，它是一个空函数（Empty function）

/**
 * JavaScript中有内置(build-in)构造器/对象共计12个（ES5中新加了JSON），这里列举了可访问的8个构造器。
 * 剩下如Global不能直接访问，Arguments仅在函数调用时由JS引擎创建
 */

// true
console.log("Number.__proto__ === Function.prototype  %o", Number.__proto__ === Function.prototype);
console.log("Boolean.__proto__ === Function.prototype  %o", Boolean.__proto__ === Function.prototype);
console.log("String.__proto__ === Function.prototype  %o", String.__proto__ === Function.prototype);
console.log("Object.__proto__ === Function.prototype  %o", Object.__proto__ === Function.prototype);
console.log("Function.__proto__ === Function.prototype  %o", Function.__proto__ === Function.prototype);
console.log("Array.__proto__ === Function.prototype  %o", Array.__proto__ === Function.prototype);
console.log("RegExp.__proto__ === Function.prototype  %o", RegExp.__proto__ === Function.prototype);
console.log("Error.__proto__ === Function.prototype  %o", Error.__proto__ === Function.prototype);
console.log("Date.__proto__ === Function.prototype  %o", Date.__proto__ === Function.prototype);

/**
 * Math，JSON是以对象形式存在的，无需new。它们的__proto__是Object.prototype
 */
console.log("Math.__proto__ === Object.prototype  %o", Math.__proto__ === Object.prototype);
console.log("JSON.__proto__ === Object.prototype  %o", JSON.__proto__ === Object.prototype);


/**
 * 所有的构造器都来自于Function.prototype，甚至包括根构造器Object及Function自身。
 * 所有构造器都继承了Function.prototype的属性及方法。如length、call、apply、bind（ES5）。
 */
function Perpon() {}

var Man = function() {}

// true
console.log("Perpon.__proto__ === Function.prototype  %o", Perpon.__proto__ === Function.prototype);

// true
console.log("Man.__proto__ === Function.prototype  %o", Man.__proto__ === Function.prototype);


/**
 * Function.prototype也是唯一一个typeof XXX.prototype为 “function”的prototype。
 * 其它的构造器的prototype都是一个对象
 */
console.log("typeof Function.prototype  %o", typeof Function.prototype);
console.log("typeof Object.prototype  %o", typeof Object.prototype);
console.log("typeof Number.prototype  %o", typeof Number.prototype);
console.log("typeof Boolean.prototype  %o", typeof Boolean.prototype);
console.log("typeof String.prototype  %o", typeof String.prototype);
console.log("typeof Array.prototype  %o", typeof Array.prototype);
console.log("typeof RegExp.prototype  %o", typeof RegExp.prototype);
console.log("typeof Error.prototype  %o", typeof Error.prototype);
console.log("typeof Date.prototype  %o", typeof Date.prototype);

/**
 * 相信都听说过JavaScript中函数也是一等公民，那从哪能体现呢？如下
 * 这说明所有的构造器也都是一个普通JS对象，可以给构造器添加/删除属性等。
 * 同时它也继承了Object.prototype上的所有方法：toString、valueOf、hasOwnProperty等
 */
console.log("Function.prototype.__proto__ === Object.prototype  %o", Function.prototype.__proto__ === Object.prototype);


// 已经到顶了，为null
console.log("Object.prototype.__proto__ === null  %o", Object.prototype.__proto__ === null);



// 所有对象的__proto__都指向其构造器的prototype

var obj = {name: "wangcy"};
var str = "wangcy";
var num = 24;
var bool = false;
var reg = /\w/g;
var err = new Error("sayty")