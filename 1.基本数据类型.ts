/**
 * Created by kingsweet on 15/9/22.
 */

var isBoo: boolean = true;//Boolean类型
var height: number = 7;//Number类型
var name: string = "KingSweet";//String类型
var array: number[] = [1, 2, 4];//数组
var array2: Array<number> = [4, 5, 6];
enum Color {Red, Green, Blue = 4};//枚举
var c: Color = Color.Green;
var colorName: string = Color[4];
var anyValue: any = 4;anyValue = "sss"; anyValue = false;
var anyArray: any[] = [1, true, "KingSweet"];

function tell (): void {
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