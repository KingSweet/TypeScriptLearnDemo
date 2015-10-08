/**
 * Created by kingsweet on 15/9/25.
 */


/*1.函数类型*/
function add(x: number, y: number): number {
    return x + y;
}
//匿名函数
var mAdd = function (x: number, y: number): number {
    return x + y;
}
//mAdd2类型是一个函数 (name: string, age: number) => number
var mAdd2:(name: string, age: number) => number = function (n: string, a:number): number {
    return a;
}

/*2.可选参数和默认参数*/
function buildName(name: string, age?: number, height: number = 16) {
    return name + " " + age + " " + height;
}
console.log(buildName("ss", 0, 12));


/*3.可变参数*/
function names(n1: string, ...n: string[]) {
    return n1 + "===" + n.join("===");
}
console.log(names("a", "ddd", "dfs", "sss"));