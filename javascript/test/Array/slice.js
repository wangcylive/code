/**
 * Created by silent on 2014/11/23.
 */
(function() {

    /**
     * slice方法，基于当前数组中的一项或多项创建一个新数组，接受一个或两个参数，既要返回项的起始位置和结束位置
     * 在只有个参数的时候，slice()方法返回从该参数指定位置开始到当前数组末尾的所有项
     * 如果有两个参数，改方法返回起始位置和结束位置之间的项-但不包括结束位置的项
     * 不会影响原始数组
     * 如果slice()方法参数为负数，则用数组的长度加上该数来确定相应的位置
     * 如果起始位置大于结束位置，则返回空数组[]
     * 和字符串的slice()方法类似
     */
    var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(a.slice(2));  // 第2项到末尾
    console.log(a.slice(-3));  // 后面3项
    console.log(a.slice(0, 3));  // 前面3项
    console.log(a.slice(1, 5));  // 第1项到第5项
    console.log(a.slice(5, 0));  // []
    console.log(a.slice(-3, 0));  // a.slice(7, 0);
    console.log(a.slice(-5, -1));  // a.slice(5, 9);
    console.log(a.slice(-6, -0));  // a.slice(4, 0);
}());

(function() {
    var a = "0123456789";
    console.log(a.slice(2));
    console.log(a.slice(-3));
    console.log(a.slice(0, 3));
    console.log(a.slice(1, 5));
    console.log(a.slice(5, 0));
    console.log(a.slice(-3, 0));
    console.log(a.slice(-5, -1));
    console.log(a.slice(-6, -0));
}());