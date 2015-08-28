/**
 * Created by Wangcy on 2015/6/4.
 */
function getMaximumSupportedArgumentsLength() {
    var args = {length: 0};

    function noop() {
    }

    function test(n) {
        args.length = n;
        try {
            noop.apply(null, args);
        } catch (e) {
            return false;
        }
        return true;
    }

    function getNum(min, max) {
        var start = min, end = max, mid = Math.ceil((start + end) / 2), count = 0;
        while (start < end) {
            if (test(mid)) {
                start = mid;
                mid = Math.floor((start + end) / 2);
            } else {
                end = mid - 1;
                mid = Math.floor((start + end) / 2);
            }
            count++;
            if (count > 32) {
                return max;
            }
        }
        return mid;
    }

    return getNum(0x7f, 0x7fffffff);
}

function getMaximumCallStackSize() {
    var size = 0;

    function test() {
        size++;
        test();
    }

    try {
        test();
    } catch (e) {
        return size;
    }
}