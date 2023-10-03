//We can use arrow functions to declare functions more easily
//Arrow functions doesn't change 'this' scope
const function1 = () => {
    console.log('Function 1 working')
}


function1()



//Example of this use in arrow functions

class People {

    idade: number

    constructor() {
        this.idade = 0
    }

    increment() {
        return this.idade += 1
    }
    getIdade() {
        return this.idade
    }
}

let sPeople = new People()

setInterval(() => {
    console.log(sPeople.getIdade())
    sPeople.increment()

}, 1000)


