// ********** 构造函数绑定 **********
console.log("********** 构造函数绑定 **********");

(function() {
    function Animal() {
    　　this.species = "动物";
        this.type = ["猫科", "犬科"];
    }

    Animal.prototype.home = "earth";


    function Cat(name, color) {

        // 构造函数绑定
        Animal.call(this);

    　　this.name = name;
    　　this.color = color;
    }

    var cat1 = new Cat("阿黄", "黄色");
    var cat2 = new Cat("小黑", "黑色");

    // true
    console.log("cat1.constructor === Cat  %o", cat1.constructor === Cat);

    // true
    console.log("cat1.constructor === cat2.constructor  %o", cat1.constructor === cat2.constructor);

    /**
     * prototype原型不被继承
     */
    // undefined
    console.log("cat1.home  %o", cat1.home);

    // true
    console.log("cat1 instanceof Cat  %o", cat1 instanceof Cat);

    // true
    console.log("cat1 instanceof Object  %o", cat1 instanceof Object);

    // true
    console.log("cat1.type === cat2.type  %o", cat1.type === cat2.type);
}());



// ********** prototype模式 **********
console.log("********** prototype模式 **********");

(function() {
    function Animal(time) {
    　　this.species = "动物";
        this.time = time;
        this.eatType = ["食草", "食肉", "细菌类"];
        this.showSpecies = function() {
            console.log(this.species);
        }
    }

    Animal.prototype = {
        type: ["猫科", "犬科"]
    }

    function Cat(name, color) {
    　　this.name = name;
    　　this.color = color;
        this.showColor = function() {
            console.log(this.color);
        }
    }

    /**
     * 这里将被替换，实例不会继承
     */
    Cat.prototype = {
        home: "earth",
        eat: "猫粮"
    }

    /**
     * 任何一个prototype对象都有一个constructor属性，指向它的构造函数
     * 更重要的是，每一个实例也有一个constructor属性，默认调用prototype对象的constructor属性
     * 如果替换了prototype对象，下一步必然是为新的prototype对象加上constructor属性，并将这个属性指回原来的构造函数
     */
    Cat.prototype = new Animal();
    Cat.prototype.constructor = Cat;

    // true
    console.log("Cat.prototype.__proto__ === Animal.prototype  %o", Cat.prototype.__proto__ === Animal.prototype);


    var cat1 = new Cat("阿黄", "黄色", "2000");
    var cat2 = new Cat("小白", "白色", "2000");

    // true
    console.log("cat1.__proto__ === Cat.prototype  %o", cat1.__proto__ === Cat.prototype);

    // true
    console.log("cat1.constructor === cat2.constructor  %o", cat1.constructor === cat2.constructor);

    // true
    console.log("cat1 instanceof Cat  %o", cat1 instanceof Cat);

    // true
    console.log("cat1 instanceof Animal  %o", cat1 instanceof Animal);

    // true
    console.log(Animal.prototype.isPrototypeOf(cat1));

    // true
    console.log(Cat.prototype.isPrototypeOf(cat1));

    // true
    console.log("cat1.addType === cat2.addType  %o", cat1.addType === cat2.addType);

    // true
    console.log("cat1.showSpecies === cat2.showSpecies  %o", cat1.showSpecies === cat2.showSpecies);

    /**
     * 这种继承方式，实例的属性继承同一个内存地址，修改一个其他也会修改
     * 重新赋值则不会出现这种情况
     */
    console.log("cat1.eatType = %o\n\ncat2.eatType = %o", cat1.eatType, cat2.eatType);
    cat1.eatType.push("太阳能");
    console.log("cat1.eatType = %o\n\ncat2.eatType = %o", cat1.eatType, cat2.eatType);


    var animal1 = new Animal(new Date().getTime());
    var animal2 = new Animal(new Date().getTime());

    console.log("animal1.type === animal2.type  %o", animal1.type === animal2.type);
    console.log("cat1.type === animal1.type  %o", cat1.type === animal1.type);

    console.log("animal1.type = %o\n\nanimal2.type = %o\n\ncat1.type = %o\n\ncat2.type = %o", animal1.type, animal2.type, cat1.type, cat2.type);
    cat1.type.push("哺乳类");
    console.log("animal1.type = %o\n\nanimal2.type = %o\n\ncat1.type = %o\n\ncat2.type = %o", animal1.type, animal2.type, cat1.type, cat2.type);


    // 重新赋值
    cat1.eatType = ["fish", "snake"];

    console.log("cat1.eatType = %o\n\ncat2.eatType = %o", cat1.eatType, cat2.eatType);
}());


// ********** 直接继承prototype **********
console.log("********** 直接继承prototype **********");

(function() {
    /**
     * 优点是效率比较高（不用执行和建立Animal的实例了），比较省内存。
     * 缺点是Cat.prototype和Animal.prototype现在指向了同一个对象，那么任何对Cat.prototype的修改，都会反映到Animal.prototype
     */
    function Animal() {}
    Animal.prototype.species = "动物";
    Animal.prototype.eatType = ["草食", "肉食"];

    function Cat(name, color) {
        this.name = name;
        this.color = color;
    }
    Cat.prototype.home = "earth";

    Cat.prototype = Animal.prototype;

    var cat1 = new Cat("大黄", "黄色");
    var cat2 = new Cat("小白", "白色");

    // true
    console.log("cat1.constructor === Animal && cat2.constructor === Animal  %o", cat1.constructor === Animal && cat2.constructor === Animal);

    // undefined
    console.log("cat1.home  %o", cat1.home);

    // true
    console.log("cat1.eatType === cat2.eatType  %o", cat1.eatType === cat2.eatType);


    Cat.prototype.constructor = Cat;

    // true
    console.log("cat1.constructor === Cat && cat2.constructor === Cat  %o", cat1.constructor === Cat && cat2.constructor === Cat);

    var animal1 = new Animal();

    // false
    console.log("animal1.constructor === Animal  %o", animal1.constructor === Animal);
}());



// ********** 利用空对象作为中介 **********
console.log("********** 利用空对象作为中介 **********");

(function() {
    function Animal() {}
    Animal.prototype.species = "动物";
    Animal.prototype.eatType = ["草食", "肉食"];

    function Cat(name, color) {
        this.name = name;
        this.color = color;
    }
    Cat.prototype.home = "earth";

    function F() {}

    F.prototype = Animal.prototype;

    Cat.prototype = new F();

    Cat.prototype.constructor = Cat;

    var cat1 = new Cat("大黄", "黄色");
    var cat2 = new Cat("小白", "白色");
    var animal1 = new Animal();

    console.log("cat1.constructor === Cat  %o", cat1.constructor === Cat);
    console.log("animal1.constructor === Animal  %o", animal1.constructor === Animal);

    console.log("cat1.eatType === animal1.eatType  %o", cat1.eatType === animal1.eatType);

    cat1.eatType.push("细菌类");
    console.log("animal1.eatType = %o\n\ncat1.eatType = %o\n\ncat2.eatType = %o", animal1.eatType, cat1.eatType, cat2.eatType);


    function extend(Child, Parent) {
        var F = function() {}
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.uber = Parent.prototype;
    }

    extend(Cat, Animal);

    var cat3 = new Cat("小黑", "黑色");
    var cat4 = new Cat("小红", "红色");
    var animal2 = new Animal();

    // true
    console.log("cat3.constructor === Cat  %o", cat3.constructor === Cat);

    // true
    console.log("animal2.constructor === Animal  %o", animal2.constructor === Animal);
}());


// ********** 拷贝继承 **********
console.log("********** 拷贝继承 **********");

(function() {
    function extend(Child, Parent) {
        var p = Parent.prototype,
            c = Child.prototype;

        for(var prop in p) {
            c[prop] = p[prop];
        }
        Child.uber = p;
    }

    function Animal() {}
    Animal.prototype.species = "动物";
    Animal.prototype.eatType = ["草食", "肉食"];

    function Cat(name, color) {
        this.name = name;
        this.color = color;
    }
    Cat.prototype.home = "earth";

    extend(Cat, Animal);

    var cat1 = new Cat("小黑", "黑色");
    var cat2 = new Cat("大黄", "黄色");
    var animal1 = new Animal();

    // Cat
    console.log("cat1.constructor = %o", cat1.constructor);

    // Animal
    console.log("animal1.constructor = %o", animal1.constructor);

    console.log("cat1.eatType = %o\n\ncat2.eatType = %o\n\nanimal1.eatType = %o", cat1.eatType, cat2.eatType, animal1.eatType);

    // true
    console.log("cat1.eatType === animal1.eatType  %o", cat1.eatType === animal1.eatType);

    cat1.eatType.push("太阳能");
    
    console.log("cat1.eatType = %o\n\ncat2.eatType = %o\n\nanimal1.eatType = %o", cat1.eatType, cat2.eatType, animal1.eatType);    
}());



// ********** 非构造函数继承 **********
console.log("********** 非构造函数继承 **********");


// object()方法，prototype链实现
console.log("********** prototype链实现 **********");

(function() {
    var Chinese = {
        nation: "中国"
    }

    // var Doctor = {
    //     career: "医生"
    // }

    function object(o) {
        var F = function() {}
        F.prototype = o;
        return new F();
    }

    var Doctor = object(Chinese);

    Doctor.career = "医生";

    console.log("Doctor.career = %o\n\nDoctor.nation = %o", Doctor.career, Doctor.nation);
}());


// 浅拷贝
console.log("********** 浅拷贝 **********");

(function() {
    function extend(o) {
        var c = {};

        for(var prop in o) {
            c[prop] = o[prop];
        }
        c.uber = o;
        return c;
    }

    var Chinese = {
        nation: "中国",
        eat: ["牛", "驴"]
    }

    var Doctor = {
        career: "医生"
    }

    Doctor = extend(Chinese);

    console.log("Doctor.nation = %o", Doctor.nation);
    console.log("Doctor.eat = %o\n\nChinese.eat = %o", Doctor.eat, Chinese.eat);

    Doctor.eat.push("猪");

    console.log("Doctor.eat = %o\n\nChinese.eat = %o", Doctor.eat, Chinese.eat);
}());


// 深拷贝
console.log("********** 深拷贝 **********");
(function() {
    function extend(target, obj) {
        var obj = obj || {};

        for(var prop in obj) {
            if(typeof obj[prop] === "object") {
                target[prop] = (obj[prop].constructor === Array) ? [] : {};
                arguments.callee(target[prop], obj[prop]);
            } else {
                target[prop] = obj[prop];
            }
        }

        return target;
    }

    var Chinese = {
        nation: "中国",
        eat: ["牛", "驴"]
    }

    var Doctor = {
        career: "医生",
        eat: "素食"
    }

    extend(Doctor, Chinese);

    console.log("Doctor.eat = %o\n\nChinese.eat = %o", Doctor.eat, Chinese.eat);

    Doctor.eat.push("青蛙");

    console.log("Doctor.eat = %o\n\nChinese.eat = %o", Doctor.eat, Chinese.eat);
}());