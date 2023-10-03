const arr = [1,2,3,4]


function deleteArr(arr : Array<number>){
    let aux = arr.map(ar => {
        return ar+1
    })
    return aux
}

let num = deleteArr(arr)

console.log(num)
