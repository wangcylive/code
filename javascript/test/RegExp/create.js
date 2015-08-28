/**
 * Created by silent on 2014/11/24.
 */
(function() {
    var a = /\[ab\]c\s/gmi,
        b = new RegExp("\\[ab\\]c\\s", "gmi");

    var str = "wangcy [ab]c test //";
    console.log(a.exec(str));
    console.log(b.exec(str));

    var c = /\w/,
        d = new RegExp("\\w");
    console.log(c.exec(str));
    console.log(d.exec(str));

    var e = /\/\//,
        f = new RegExp("\\/\\/");
    console.log(e.exec(str));
    console.log(f.exec(str));
}());