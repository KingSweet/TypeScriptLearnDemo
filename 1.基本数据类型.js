/**
 * Created by kingsweet on 15/9/22.
 */
var isBoo = true; //Boolean类型
var height = 7; //Number类型
var name = "KingSweet"; //String类型
var array = [1, 2, 4]; //数组
var array2 = [4, 5, 6];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
; //枚举
var c = Color.Green;
var colorName = Color[4];
var anyValue = 4;
anyValue = "sss";
anyValue = false;
var anyArray = [1, true, "KingSweet"];
function tell() {
    console.log("isBoo:boolean = " + isBoo);
    console.log("height:number = " + height);
    console.log("name:string = " + name);
    console.log("array:number[] = " + array);
    console.log("array2:Array\<number\> = " + array2);
    console.log("c:Color = " + c);
    console.log("colorName:string = " + colorName);
    console.log("anyArray:any[] = " + anyArray);
}
tell();
//# sourceMappingURL=1.基本数据类型.js.map