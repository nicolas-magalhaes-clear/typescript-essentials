//Promises works assynchrously

function falarDepoisDe(segundos: number, frase: String){
    return new Promise((resolve, reject):void =>{
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000);
    })
    
}


falarDepoisDe(3, 'Que Legal').then( frase => {
    let out = frase
    out = out + '?!?!'
    return out
})
.then(outraFrase => {
    console.log(outraFrase) 
})