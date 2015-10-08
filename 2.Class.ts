/**
 * Created by kingsweet on 15/9/24.
 */


/*基类*/
class Animal {
    name: string;
    static fullName: string = "Bob Smith";
    constructor(name: string) {
        this.name = name;
    }

    move (meter: number = 10) {
        console.log(name + " Animal move = " + meter);
    }

    private _age: number = 0;
    set age(newValue: number) {
        this._age = newValue;
    }
    get age(): number {
        return this._age;
    }
}

var animal = new Animal("Lili");
//animal.move();

/*继承*/
class Snake extends Animal {
    constructor(name: string) {
        super(name)
    }

    public move(meter: number = 45) {
        super.move();
        console.log(this.name + "Snake move = " + meter);
    }

    private move2(meter: number = 45) {
        super.move();
        console.log(this.name + "Snake move = " + meter);
    }
}

var snake = new Snake("KS");
snake.move();
//Snake.fullName;
snake.age;