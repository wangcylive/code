/**
 * Created by wangcy on 2015/6/9.
 */
;(function() {
    var refreshMethod = pullRefresh();
    refreshMethod.done(function() {
        document.body.firstElementChild.insertAdjacentText("beforebegin", "refresh  ");

        console.log(1);
    }).done(function() {
        console.log(2);
    });

    var listNode = document.getElementById("list"),
        listStyle = listNode.style;

    function toHex(num) {
        var string = num.toString(16);

        if(string.length < 2) {
            string = string + string;
        }

        return string;
    }
}());