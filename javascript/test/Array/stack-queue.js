/**
 * Created by silent on 2014/11/22.
 */
(function() {

    // 栈方法，后进先出
    var a = [];
    a.push(1, 2, 3);  // 从后面推入，返回数组长度
    a.pop();  // 弹出末位并返回值
    console.log(a);

    // 队列方法，先进先出
    var b = [];
    b.push(1, 2, 3);
    b.shift();  // 移除首位并返回值
    console.log(b);

    // 反向队列方法
    var c = [1];
    c.unshift(3, 4, 5);  // 从前面推入，返回数组长度  **ie7之前以及ie8兼容模式返回undefined**
    c.pop();
    console.log(c);

    var d = [1, 2, 3, 4, 5, 7],
        e = [];
    while(d.length) {
        e.push(d.pop());
    }
    console.log(e);

    var f = [7, 6, 5, 4, 3, 2, 1, 0],
        g = [];
    while(f.length) {
        g.unshift(f.shift());
    }
    console.log(g);
}());