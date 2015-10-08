/**
 * Created by kingsweet on 15/9/24.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*基类*/
var Animal = (function () {
    function Animal(name) {
        this._age = 0;
        this.name = name;
    }
    Animal.prototype.move = function (meter) {
        if (meter === void 0) { meter = 10; }
        console.log(name + " Animal move = " + meter);
    };
    Object.defineProperty(Animal.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (newValue) {
            this._age = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Animal.fullName = "Bob Smith";
    return Animal;
})();
var animal = new Animal("Lili");
//animal.move();
/*继承*/
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function (meter) {
        if (meter === void 0) { meter = 45; }
        _super.prototype.move.call(this);
        console.log(this.name + "Snake move = " + meter);
    };
    Snake.prototype.move2 = function (meter) {
        if (meter === void 0) { meter = 45; }
        _super.prototype.move.call(this);
        console.log(this.name + "Snake move = " + meter);
    };
    return Snake;
})(Animal);
var snake = new Snake("KS");
snake.move();
//Snake.fullName;
snake.age;
//# sourceMappingURL=2.Class.js.map