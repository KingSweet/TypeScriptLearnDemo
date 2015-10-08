/**
 * Created by kingsweet on 15/9/25.
 */
/*1.函数类型*/
function add(x, y) {
    return x + y;
}
//匿名函数
var mAdd = function (x, y) {
    return x + y;
};
//mAdd2类型是一个函数 (name: string, age: number) => number
var mAdd2 = function (n, a) {
    return a;
};
/*2.可选参数和默认参数*/
function buildName(name, age, height) {
    if (height === void 0) { height = 16; }
    return name + " " + age + " " + height;
}
console.log(buildName("ss", 0, 12));
/*3.可变参数*/
function names(n1) {
    var n = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        n[_i - 1] = arguments[_i];
    }
    return n1 + "===" + n.join("===");
}
console.log(names("a", "ddd", "dfs", "sss"));
//# sourceMappingURL=3.函数.js.map