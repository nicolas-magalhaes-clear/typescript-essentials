const fabricantes  = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome: string, indice:number = 0){
    console.log(`${indice + 1}. ${nome}`)
}


fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))