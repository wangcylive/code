/**
 * 创建name为anchorName的锚点
 */
stringObject.anchor(anchorName);
/**
 * 返回指定位置的字符
 */
stringObject.charAt(index);
/**
 * 返回指定位置字符的Unicode编码
 */
stringObject.charCodeAt(index);
/**
 * 返回某个指定字符串值在字符串中首次出现的位置
 * searchValue必需，规定需要检索的字符串；formIndex可选整数参数，规定在字符串中开始检索的位置，
 * 合法取值是0到stringObject.length-1之间，如果省略，则从字符串的首字符开始检索
 * 如果找不到指定的字符串返回-1
 */
stringObject.indexOf(searchValue,formIndex);
/**
 * 和indexOf类似，检索从后面开始
 */
stringObject.lastIndexOf(searchValue,formIndex);
/**
 * 可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配
 * 该方法类似 indexOf() 和 lastIndexOf()，但是它返回指定的值，而不是字符串的位置
 */
stringObject.match(searchValue/regexp);
/**
 * 用于在字符串中用一些字符替换另一些字符，或替换一个正则表达式匹配的子串
 */
stringObject.replace(regexp/substr,replacement);
/**
 * 用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串
 * search() 方法不执行全局匹配，它将忽略标志 g。它同时忽略 regexp 的 lastIndex 属性，
 * 并且总是从字符串的开始进行检索，这意味着它总是返回 stringObject 的第一个匹配的位置。
 */
stringObject.search(regexp/substr);
/**
 * 提取字符串的某个部分，并以新的字符串返回被提取的部分
 * 返回值：一个新的字符串。包括字符串 stringObject 从 start 开始（包括 start）到 end 结束（不包括 end）为止的所有字符。
 */
stringObject.slice(start,end);
/**
 * 在字符串中抽取从 start 下标开始的指定数目的字符
 */
stringObject.substr(start,length);
/**
 * 方法用于提取字符串中介于两个指定下标之间的字符
 * 与 slice() 和 substr() 方法不同的是，substring() 不接受负的参数
 */
stringObject.substring(start,stop);
/**
 * 把一个字符串分割成字符串数组
 */
stringObject.split(regexp/substr,howmany);