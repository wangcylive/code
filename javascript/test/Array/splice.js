/**
 * Created by silent on 2014/11/23.
 */
(function() {

    /**
     * splice()方法始终返回一个数组，该数组中包含从原始数组中删除的项
     * 如果没有删除任何项，则返回一个空数组
     * 如果起始位置为负数，则起始位置为其长度加数值
     * 如果删除项数为0或负数，则数组不做变化
     *
     * 删除：指定2个参数，要删除的第一个项的位置和要删除的项数
     *
     * 插入：指定3个参数（起始位置，0，插入项），如果要插入多个项，可以在传入任意多个项
     *
     * 替换：指定3个参数（起始位置，要删除项数，插入项）
     */
    var a = [1, 2, 3, 4, 5];
    var b = a.splice(0, 1);  // 删除第1项
    console.log(a);
    console.log(b);

    var c = a.splice(-2, 1);  // 删除倒数第2项
    console.log(a);
    console.log(c);
}());

(function() {
    var a = [1, 2, 4, 5];
    var b = a.splice(2, 0, 3);  // 在第2项前插入
    console.log(a);
    console.log(b);

    var c = a.splice(2, -3);
    console.log(a);
    console.log(c);
}());

(function() {
    var a = [1, 2, 3, 4, 5];
    var b = a.splice(2, 1, "i", "y", "h");  // 第2项替换
    console.log(a);
    console.log(b);

    var c = a.splice(3, 10, 11, 12, 13, 14, 15);
    console.log(a);
    console.log(c);
}());