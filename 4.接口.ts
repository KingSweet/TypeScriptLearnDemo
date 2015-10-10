/**
 * Created by kingsweet on 15/10/8.
 */
/*1.属性接口*/
interface LabelValue {
    label: string;
}

function printLabel(labelValue: LabelValue) {
    console.log(labelValue.label);
}

var myObj = {
    size: 10,
    label: "Size 10 Object"
};
printLabel(myObj);


/*2.可选属性*/
interface ColorConfig {
    color?: string;
    width?: number;
}

function createColor(config: ColorConfig): {color: string, area: number} {
    var newColor = {
        color: "white",
        area: 100
    };

    if (config.width) {
        newColor.color = config.color;
    }

    if (config.width) {
        newColor.area = config.width * config.width;
    }

    return newColor;
}
console.log(createColor({color: "red"}));


/*3.函数接口*/
interface SearchFunc {
    (source: string, subStr: string): boolean;
}
var mySearch: SearchFunc;
mySearch = function (source:string, subStr:string) {
    var result = source.search(subStr);

    if (result == -1) {
        return false;
    } else {
        return true;
    }
}
console.log(mySearch("dddd", "aa"));



/*4.数组接口*/
interface StrArray {
    [index: number]: string;
}
var myArray: StrArray;
myArray = ["bob", "KingSweet"];
console.log(myArray);

/*5.类*/
interface Clock {
    cClock: Date;
    setTime(d: Date);
}

class ChinaClock implements Clock {
    cClock: Date;

    constructor(h: number, m: number) {

    }

    setTime(d: Date) {
        this.cClock = d;
    }
}


/*6.接口继承*/
interface Shape {
    color: string;
}

interface Shape2 extends Shape, Shape3 {
    length: number;
}

interface Shape3 {
    add: string;
}

var s = <Shape2>{};
s.color = "red";
s.length = 10;
s.add = "dff";

/*7.混合类型*/
interface  Counter {
    interval: number;
    reset(): void;
    (start: number): string;
}

var c: Counter;
c(10);
c.reset();
