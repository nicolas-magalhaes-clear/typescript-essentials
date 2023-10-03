const arr2 = [10,15,13,2,9,21,24,16,8,25,26,2,4]

//filter returns only a conditioned value

let result =  arr2.filter(res => {
    return (res%2)===0
})

console.log('Resultados pares', result)