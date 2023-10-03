const nums = [ 1,2,3,4,5,6]


let resultado = nums.map((num) => {
    return num*2
})

console.log('resultado:', resultado)


const soma10 = (e:number) => e + 10
const triplo = (e:number) => e * 3
const paraDinheiro = (e:number):String => {
    return `R$${e},00`
}

const resultado2 = nums.map(triplo).map(soma10).map(paraDinheiro)

console.log('resultado2', resultado2)