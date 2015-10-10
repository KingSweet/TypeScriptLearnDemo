/**
 * Created by kingsweet on 15/10/9.
 */

/*1.泛型*/
function identity<T>(arg: T): T {
     return arg;
}
console.log(identity<string>("KingSweet"));

function identitys<T>(arg: T[]) {
    console.log(arg.length);
    console.log(arg);
}
identitys(["1", "3"]);


/*2.泛型类型*/
var m1: <U>(arg: U) => U = identity;//方式一
var m2: <T>(arg: T) => T = identity;//方式2
var m3: {<U>(arg: U): U} = identity;//方式3

//方式4
interface GType {
    <T>(arg: T): T;
}
var m4: GType = identity;

//方式5
interface GType2<T> {
    (arg: T): T;
}
var m5: GType2<number> = identity;


/*3.类泛型*/
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
var mGenericNumber = new GenericNumber<number>();
mGenericNumber.zeroValue = 0;
mGenericNumber.add = function (x, y) {
    return x + y;
};
console.log(mGenericNumber.add(12, 23));


/*4.泛型约束*/
interface Lengthwise {
    length: number;
}
function lI<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
//lI(3);//number 没有length属性
console.log(lI({length: 10, value: 3}));
