/**
 * Created by silent on 2014/11/23.
 */
(function() {

    /**
     * ECMAScript5为数组定义5个迭代方法，每个方法接收两个参数：要在每一项上运行的函数和（可选）运行改函数的作用域对象-影响this的值
     * 传入这些方法中的函数会接收3个参数：数组项的值，该项在数组中的位置，数组对象本身
     * callback 只会为那些已经被赋值的索引调用。不会为那些被删除或从来没被赋值的索引调用
     */
    var a = [1, 2, 3, 4, 5, 6];

    /**
     * every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false（表示可转换为布尔值 false 的值）的元素
     * 如果发现了一个这样的元素，every 方法将会立即返回 false。否则，callback 为每一个元素返回 true，every 就会返回 true
     */
    var everyResult = a.every(function(item, index, array) {  // 检测是否所有项大于3
        return item > 3;
    });
    console.log(everyResult);

    /**
     * some 为数组中的每一个元素执行一次 callback 函数，直到找到一个使得 callback 返回一个“真值”（即可转换为布尔值 true 的值）
     * 如果找到了这样一个值，some 将会立即返回 true。否则，some 返回 false
     */
    var someResult = a.some(function(item, index, array) {  // 检测是否有一项大于3
        return item > 3;
    });
    console.log(someResult);

    // 返回每次函数调用的结果组成的数组
    var mapResult = a.map(function(item, index, array) {
        return item * index;
    });
    console.log(mapResult);

    // 返回改函数会返回true的项组成的数组
    var filterResult = a.filter(function(item, index, array) {  // 筛选值大于2的项
        return item > 2;
    });
    console.log(filterResult);

    var b = [];
    /**
     * forEach 方法按升序为数组中的每个有值的元素执行一次给定的 callback 函数
     * 没有办法中止 forEach 循环。如果要中止，可使用  Array.every 或 Array.some
     */
    a.forEach(function(item, index, array) {
        b.push(a[a.length - 1 - index]);
    });
    console.log(b);
}());

(function() {
    console.log("************");
    var a = [1, 2, null, 3, 4, undefined, [], {}, 5, 6, 7, , ,];
    a.forEach(function(item, index, array) {
        console.log(index);
        if(!item) {
            return false;
        }
    });

    console.log("**********");
    var everyResult = a.every(function(item, index, array) {
        console.log(index);
        if(!item) {
            return false;
        }
        return true;
    });
    console.log(everyResult);

    console.log("*************");
    var someResult = a.some(function(item, index, array) {
        console.log(index);
        if(!item) {
            return true;
        }
        return false;
    });
    console.log(someResult);

    console.log("*************");
    var b = [1, 2, 3];
    b.some(function() {
        console.log(this);
        //return false;
    }, b);
}());