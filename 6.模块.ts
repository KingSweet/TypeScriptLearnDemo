/**
 * Created by kingsweet on 15/10/10.
 */

/*
* 1.模块化, 可重用
* 2.封装变量和函数
* */

module M1 {
    export interface StringValue {
        isAcceptable(s: string): boolean;
    }

    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValue {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValue {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }

}

/*时钟应用*/
module TimeClock {
    export class Test {
        element: HTMLElement;
        span: HTMLElement;
        timer: number;

        constructor(e: HTMLElement) {
            this.element = e;
            this.element.innerHTML = "现在时间是:";
            this.span = document.createElement("span");
            this.element.appendChild(this.span);
            this.span.innerHTML = new Date().toTimeString();
        }

        start() {
            this.timer = setInterval(() => this.span.innerHTML = new Date().toTimeString(), 500);
        }

        stop() {
            clearTimeout(this.timer);
        }

    }
}

