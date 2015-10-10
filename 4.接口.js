function printLabel(labelValue) {
    console.log(labelValue.label);
}
var myObj = {
    size: 10,
    label: "Size 10 Object"
};
printLabel(myObj);
function createColor(config) {
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
console.log(createColor({ color: "red" }));
var mySearch;
mySearch = function (source, subStr) {
    var result = source.search(subStr);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
console.log(mySearch("dddd", "aa"));
var myArray;
myArray = ["bob", "KingSweet"];
console.log(myArray);
var ChinaClock = (function () {
    function ChinaClock(h, m) {
    }
    ChinaClock.prototype.setTime = function (d) {
        this.cClock = d;
    };
    return ChinaClock;
})();
var s = {};
s.color = "red";
s.length = 10;
s.add = "dff";
var c;
c(10);
c.reset();
//# sourceMappingURL=4.接口.js.map