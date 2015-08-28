/**
 * Created by silent on 2014/11/23.
 */
(function() {

    /**
     * arr.reduce(callback,[initialValue])
     * reduce 为数组中的每一个元素依次执行回调函数，不包括数组中被删除或从未被赋值的元素
     * reduce() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始缩减，最终为一个值
     * 执行数组中每个值的函数，包含四个参数：previousValue-上一次调用回调返回的值，或者是提供的初始值（initialValue），
     * currentValue-数组中当前被处理的元素，index-当前元素在数组中的索引，array-调用 reduce 的数组。
     * initialValue-作为第一次调用 callback 的第一个参数
     */
    var a = [0, 1, 2, 3, 4];
    var reduceResult = a.reduce(function(prev, cur, index, array) {
        console.log(index);
        return prev + cur;
    }, 10);
    console.log(reduceResult);

    var b = [[0, 1], [2, 3], [4, 5]];
    var reduceResultB = b.reduce(function(prev, cur, index, array) {
        return prev.concat(cur);
    }, ["a", "b"]);
    console.log(reduceResultB);
}());


(function() {
    console.log("***************");
    var a = [0, 1, 2, 3, 4, 5];
    var reduceResult = a.reduceRight(function(prev, cur, index, array) {
        console.log(index);
        return prev + cur;
    });
    console.log(reduceResult);
}());