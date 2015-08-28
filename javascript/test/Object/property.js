/**
 * Created by silent on 2014/12/7.
 * 数据属性 包含一个数据值的位置。在这个位置可以读取和写入
 * Configurable: 表示能否通过 delete 删除属性从而重新定义属性，能够修改属性的特性，或者能否把属性修改为访问器属性。默认值为 true
 * Enumerable: 表示能否通过 for-in 循环返回属性。默认值为 true
 * Writable: 表示能否修改属性的值。默认值为 true
 * Value: 包含这个属性的数据值。读取属性值得时候，从这个位置读；写入属性值得时候，把新值保存在这个位置。默认值为 undefined
 *
 * 必须使用 Object.defineProperty() 方法修改属性默认特性，包含3个参数：属性所在对象，属性的名字和一个描述符的对象
 */

var person = {
    name: "silent"
};

console.log("******** writable *******");

Object.defineProperty(person, "name", {
    writable: false,
    value: "wangcy"
});

console.log(person.name);
person.name = "wangchunyang";
Object.defineProperty(person, "name", {
    value: "_wangchunyang"
});
console.log(person.name);

Object.defineProperty(person, "name", {
    writable: true
});
person.name = "chendi";
console.log(person.name);


console.log("******** configurable *********");

person.age = 24;
Object.defineProperty(person, "age", {
    configurable: false
});

console.log(person.age);
person.age = 12;
delete person.age;
console.log(person.age);

// 一旦把属性定义为不可配置，就不能再把它变回可配置了
Object.defineProperty(person, "age", {
    writable: false,
    value: 1
});
console.log(person.age);


console.log("********** enumerable **********");

for(var x in person) {
    console.log(x);
}
Object.defineProperty(person, "name", {
    enumerable: false
});
for(var y in person) {
    console.log(y);
}


/**
 * 访问器属性 不包含数据值，它们是一对 getter和setter 函数，在读取访问值时，对调用 getter 函数，这个函数负责返回有效的值；
 * 在写入访问器属性时，会调用 setter 函数并传入新值，这个函数负责决定如何处理数据。
 * Configurable
 * Enumerable
 * Get
 * Set
 * 只指定 getter 意味着属性是不能写，尝试写入属性会被忽略。只指定 setter 函数的属性也不能读
 */

var book = {
    _year: 2004,
    edition: 1
};

Object.defineProperty(book, "year", {
    get: function() {
        return this._year;
    },
    set: function(newYear) {
        if(newYear > 2004) {
            this._year = newYear;
            this.edition += newYear - 2004
        }
    }
});

book.year = 2014;
console.log(book._year);
console.log(book.edition);

Object.defineProperty(book, "author", {
    get: function() {
        return "wangcy";
    }
});

book.author = "wangchunyang";
console.log(book.author);


var books = {};
/**
 * 在调用设置数据属性的时候，如果不指定，configurable、enumerable、writable 默认值为 false
 */
Object.defineProperties(books, {
    _year: {
        value: 2004
    },
    edition: {
        value: 1
    },
    year: {
        get: function() {
            return this._year;
        },
        set: function(newYear) {
            if(newYear > 2004) {
                this._year = newYear;
                this.edition += newYear - 2004;
            }
        }
    }
});


/**
 * 读取属性的特性
 * Object.getOwnPropertyDescriptor()
 */

var descriptor = Object.getOwnPropertyDescriptor(books, "_year");
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(descriptor.enumerable);
console.log(descriptor.writable);

descriptor = Object.getOwnPropertyDescriptor(books, "year");
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(descriptor.get);
console.log(descriptor.set);

descriptor = Object.getOwnPropertyDescriptor(books, "edition");
books.edition = 3;
console.log(books.edition);
console.log(descriptor.configurable);