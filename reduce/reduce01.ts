
const employees = [
    {
        name: 'John Doe',
        note: 9,
        bonus: true
    },
    {
        name: 'Jane Smith',
        note: 8,
        bonus: false
    },
    {
        name: 'Alice Johnson',
        note: 7,
        bonus: true
    },
    {
        name: 'Bob Brown',
        note: 6,
        bonus: false
    },
    {
        name: 'Charlie Davis',
        note: 5,
        bonus: true
    },
    {
        name: 'David Wilson',
        note: 4,
        bonus: false
    },
    {
        name: 'Emily Taylor',
        note: 3,
        bonus: true
    },
    {
        name: 'Frank Thomas',
        note: 2,
        bonus: false
    },
    {
        name: 'Grace Lee',
        note: 1,
        bonus: true
    },
    {
        name: 'Harry Miller',
        note: 0,
        bonus: false
    }
];

const resultados = employees.map(a => a.note).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log('Resultados:', resultados)


//Challenge 1 All employess have scholarship

const employeesR = employees.map(emp => emp.bonus).reduce(function(status,nextStatus):boolean{
    let mainStatus = true
    if(status === false ){
        mainStatus = false
        return mainStatus
    }
    else{
        return mainStatus
    }
})

console.log(employeesR)
console.log(`Todos membros são bolsistas: ${employeesR ? 'Não' : 'Sim'}`)