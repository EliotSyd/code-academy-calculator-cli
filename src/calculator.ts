
export class calculator {
    constructor(private number1: number, private number2: number){}

    add() {
        console.log(this.number1 + this.number2)

    }
    subtract() {
        console.log(this.number1 - this.number2)
    }

    multiply() {
        console.log(this.number1 * this.number2)
    }

    divide() {
        console.log(this.number1 / this.number2)
    }


}




