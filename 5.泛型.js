/**
 * Created by kingsweet on 15/10/9.
 */
/*1.泛型*/
function identity(arg) {
    return arg;
}
console.log(identity("KingSweet"));
function identitys(arg) {
    console.log(arg.length);
    console.log(arg);
}
identitys(["1", "3"]);
/*2.泛型类型*/
var m1 = identity; //方式一
var m2 = identity; //方式2
var m3 = identity; //方式3
var m4 = identity;
var m5 = identity;
/*3.类泛型*/
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
})();
var mGenericNumber = new GenericNumber();
mGenericNumber.zeroValue = 0;
mGenericNumber.add = function (x, y) {
    return x + y;
};
console.log(mGenericNumber.add(12, 23));
function lI(arg) {
    console.log(arg.length);
    return arg;
}
//lI(3);//number 没有length属性
console.log(lI({ length: 10, value: 3 }));
//# sourceMappingURL=5.泛型.js.map