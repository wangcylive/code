/****************** 构造函数法 *************************/

/**
 * 经典方法，也是教科书必教的方法。它用构造函数模拟"类"，在其内部用this关键字指代实例对象
 * 每个构造函数都有一个prototype属性，指向另一个对象；这个对象的所有属性和方法都会被构造函数的实例继承
 * 每个实例都有constructor属性，指向它的构造函数prototype属性的构造函数
 */
console.log("********** prototype **********");

(function() {
    function Cat(name, color) {
        this.name = name;
        this.color = color;
        this.eat = ["mouse", "snake", "cat food"];
        this.showAllProperty = function() {
            var result = "",
                prop;

            for(prop in this) {
                result += prop + ": " + this[prop] + "\n";
            }
            return result;
        }
    }

    /**
     * 其中一个实例改变了prototype属性的值，别的实例prototype属性也会发生变化
     */
    Cat.prototype.type = "猫科";
    Cat.prototype.sound = "喵喵喵";
    Cat.prototype.showOwnProperty = function() {
        var result = "",
            prop;

        for(prop in this) {
            if(this.hasOwnProperty(prop)) {
                result += prop + ": " + this[prop] + "\n";
            }
        }
        return result;
    }
    Cat.prototype.country = ["China", "America", "Russia"];

    var cat1 = new Cat("大黄", "黄色");
    var cat2 = new Cat("小黑", "黑色");

    /**
     * 这个方法用来判断，验证原型对象与实例对象之间的关系
     * true
     */
    console.log("Cat.prototype.isPrototypeOf(cat1)  %o", Cat.prototype.isPrototypeOf(cat1));

    /**
     * instanceof运算符，验证原型对象与实例对象之间的关系
     * true
     */
    console.log("cat1 instanceof Cat  %o", cat1 instanceof Cat);
    
    /**
     * 函数是Object的实例 
     * true
     */
    console.log("(function(){}) instanceof Function  %o", (function(){}) instanceof Function);
    console.log("Function instanceof Object  %o", Function instanceof Object);
    console.log("cat1 instanceof Object  %o", cat1 instanceof Object);

    // true
    console.log("cat1.constructor === Cat.prototype.constructor  %o", cat1.constructor === Cat.prototype.constructor);
    

    /**
     * 每个实例对象都有一个hasOwnProperty()方法，用来判断某一个属性到底是本地属性，还是继承自prototype对象的属性
     * false
     */
    console.log("cat1.hasOwnProperty(\"type\")  %o", cat1.hasOwnProperty("type"));
    
    // true
    console.log("cat1.hasOwnProperty(\"color\")  %o", cat1.hasOwnProperty("color"));
    

    /**
     * in运算符可以用来判断，某个实例是否含有某个属性，不管是不是本地属性
     * true
     */
    console.log("\"type\" in cat1  %o", "type" in cat1);
    
    // true
    console.log("\"color\" in cat1  %o", "color" in cat1);


    /**
     * 每生成一个实例，自身的属性都会在内存中生成一次，实例的属性互不相等
     * 改变一个实例属性，其他实例不会受到影响
     */
    
    // false
    console.log("cat1.eat === cat2.eat  %o", cat1.eat === cat2.eat);
    console.log("cat1.showAllProperty === cat2.showAllProperty  %o", cat1.showAllProperty === cat2.showAllProperty);

    cat1.eat.push("fish");
    console.log("cat1.eat = %o\n\ncat2.eat = %o", cat1.eat, cat2.eat);


    /**
     * 每一个构造函数都有一个prototype属性，指向另一个对象。这个对象的所有属性和方法，都会被构造函数的实例继承
     * prototype的属性都是同一个内存地址，改变其中一个实例属性的内存地址，其他实例也会改变
     */
    
    // true
    console.log("cat1.country === cat2.country  %o", cat1.country === cat2.country);
    console.log("cat1.showOwnProperty === cat2.showOwnProperty  %o", cat1.showOwnProperty === cat2.showOwnProperty);

    cat1.country.push("England");
    console.log("cat1.country = %o\n\ncat2.country = %o", cat1.country, cat2.country);
}());



/**
 * Object.create()法
 * 为了解决"构造函数法"的缺点，更方便地生成对象，
 * Javascript的国际标准ECMAScript第五版（目前通行的是第三版），提出了一个新的方法Object.create()。
 * 用这个方法，"类"就是一个对象，不是函数
 */
console.log("********** Object.create() **********");

(function() {
    var Cat = {
        name: "大毛",
        color: "黄色",
        eat: ["snake", "fish"]
    }

    /**
     * 目前，各大浏览器的最新版本（包括IE9）都部署了这个方法。
     * 如果遇到老式浏览器，可以用下面的代码自行部署
     */
    if (!Object.create) {
    　　Object.create = function (o) {
    　　　　function F() {}
    　　    F.prototype = o;
    　　　　return new F();
    　　}
    }

    /**
     * 这种方法比"构造函数法"简单，但是不能实现私有属性和私有方法，实例对象之间也不能共享数据，对"类"的模拟不够全面。
     */
    var cat1 = Object.create(Cat);
    var cat2 = Object.create(Cat);

    // true
    console.log("cat1.constructor === cat2.constructor  %o", cat1.constructor === cat2.constructor);

    // false
    console.log("cat1 === cat2  %o", cat1 === cat2);

    // true
    console.log("cat1.eat === cat2.eat  %o", cat1.eat === cat2.eat);

    cat1.eat.push("mouse");
    console.log("cat1.eat = %o\n\ncat2.eat = %o", cat1.eat, cat2.eat);
}());



/**
 * 极简注意法
 * 这种方法不使用this和prototype，代码部署起来非常简单，这大概也是它被叫做"极简主义法"的原因。
 * 首先，它也是用一个对象模拟"类"。在这个类里面，定义一个构造函数createNew()，用来生成实例。
 * 然后，在createNew()里面，定义一个实例对象，把这个实例对象作为返回值。
 * 使用的时候，调用createNew()方法，就可以得到实例对象。
 * 这种方法的好处是，容易理解，结构清晰优雅，符合传统的"面向对象编程"的构造，因此可以方便地部署下面的特性。
 */
console.log("********** 极简注意法 **********");

(function() {

    /**
     * 继承
     * 让一个类继承另一个类，实现起来很方便。只要在前者的createNew()方法中，调用后者的createNew()方法即可
     */
    var Animal = {
        // 公共属性
        publicSound: ["publick", "喵"],

        createNew: function(arg) {

            // 私有属性
            var privateSound = ["private", "喵"];

            var animal = {
                showSleep: function() {
                    console.log("睡觉");
                },
                handle: arg,
                publicSound: Animal.publicSound,
                privateSound: privateSound
            }

            return animal;
        }
    }

    var Cat = {
        createNew: function(args, name, color) {
            var cat = Animal.createNew(args);

            cat.name = name,
            cat.color = color,
            cat.makeSound = function() {
                return "喵喵喵";
            };
            cat.art1 = [7, 8, 9];

            return cat;
        }
    }

    var cat1 = Cat.createNew("Test inheirt", "小黑", "黑色");
    var cat2 = Cat.createNew("Test inheirt", "小白", "白色");

    // false
    console.log("cat1 === cat2  %o", cat1 === cat2);

    // true
    console.log("cat1.constructor === cat2.constructor  %o", cat1.constructor === cat2.constructor);

    // true
    console.log("cat1.publicSound === cat2.publicSound  %o", cat1.publicSound === cat2.publicSound);

    cat1.publicSound.push("喵喵喵");
    console.log("cat1.publicSound = %o\n\ncat2.publicSound = %o", cat1.publicSound, cat2.publicSound);

    // false
    console.log("cat1.privateSound === cat2.privateSound  %o", cat1.privateSound === cat2.privateSound);

    cat1.privateSound.push("喵喵喵喵");
    console.log("cat1.privateSound = %o\n\ncat2.privateSound = %o", cat1.privateSound, cat2.privateSound);
}());