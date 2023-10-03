const products = [
    { nome: 'Notebook', preco: 1200, fragil: true},
    { nome: 'Ipad Pro', preco: 500, fragil: true},
    { nome: 'Copo de vidro', preco: 20, fragil: true},
    { nome: 'Bloco de folha a4', preco: 30, fragil: false},
    { nome: 'Estojo', preco: 10, fragil: false},
]


const produtosFrageis = products.filter(product => {
    return product.fragil === true
})


console.log('Produtos frageis')
produtosFrageis.map(produto => {
    console.log(`Produto: ${produto.nome} Valor: ${produto.preco}`)
})


const produtosResistentes = products.filter(product => {
    return product.fragil === false
})

console.log('Produtos NÃO frágeis')
produtosResistentes.map(produto=>{
    console.log(`Produto: ${produto.nome} Valor: ${produto.preco}`)
})