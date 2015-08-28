/**
 * 检查某个值是否为有穷大的数
 */
element.isFinite();

/**
 * 检查某个值是否是数字
 */
element.isNaN();

/**
 * 解析一个字符串并返回一个浮点数
 */
parseFloat(element);

/**
 * 解析一个字符串并返回一个浮点数
 */
parseInt(element);

/**
 * 计算某个字符串，并执行其中的的 JavaScript 代码
 */
eval(string);

/**
 * 对字符串进行编码，不会对 ASCII 字母和数字进行编码，
 * 也不会对下面这些 ASCII 标点符号进行编码： * @ - _ + . / 
 */
escape(string);

/**
 * 对escape(string)进行解码
 */
unescape(string);

/**
 * 把字符串作为 URI 进行编码
 * 不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( )
 * 该方法的目的是对 URI 进行完整的编码，因此对以下在 URI 中具有特殊含义的 ASCII 标点符号，
 * encodeURI() 函数是不会进行转义的：;/?:@&=+$,#
 */
encodeURI(string);

/**
 * 对encodeURI()进行解码
 */
decodeURI(string);

/**
 * 可把字符串作为 URI 组件进行编码
 * 不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ' 
 */
encodeURIComponent(string);

/**
 * 对encodeURIComponent(string)进行解码
 */
decodeURIComponent(string);
