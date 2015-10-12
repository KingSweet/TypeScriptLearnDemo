/**
 * Created by kingsweet on 15/10/10.
 */
/*
* 1.模块化, 可重用
* 2.封装变量和函数
* */
var M1;
(function (M1) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    })();
    M1.LettersOnlyValidator = LettersOnlyValidator;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    })();
    M1.ZipCodeValidator = ZipCodeValidator;
})(M1 || (M1 = {}));
/*时钟应用*/
var TimeClock;
(function (TimeClock) {
    var Test = (function () {
        function Test(e) {
            this.element = e;
            this.element.innerHTML = "现在时间是:";
            this.span = document.createElement("span");
            this.element.appendChild(this.span);
            this.span.innerHTML = new Date().toTimeString();
        }
        Test.prototype.start = function () {
            var _this = this;
            this.timer = setInterval(function () { return _this.span.innerHTML = new Date().toTimeString(); }, 500);
        };
        Test.prototype.stop = function () {
            clearTimeout(this.timer);
        };
        return Test;
    })();
    TimeClock.Test = Test;
})(TimeClock || (TimeClock = {}));
//# sourceMappingURL=6.模块.js.map