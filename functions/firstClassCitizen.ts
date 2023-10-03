
//Using functions as parameters to other functions!



function run(fun : any){
    fun()
}


run(()=>{console.log('Função como parametro funcionando')})



//Functions can return/contain functions
function sum(a: number, b: number){
    return function(c:number):void{
        console.log(a+b+c)
    }
}

sum(2,20)(4) //output 26


const sumFive = sum(2,3)
sumFive(4) //output 9


