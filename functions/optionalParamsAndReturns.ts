

//In typescript we can define if a function has 
//Necessary parameters or options parameters by using the operator ?

function multiplyOptional(a:number, b:number, c?:number){
    if(c !== undefined){
        return a*b*c
    }
    else{
        return a*b
    }
}


//Defining an starter value if not defined
function multiply1(a: number, b: number, c:number = 1):number {
    return(a*b*c)
}
console.log(multiplyOptional(10,20))
console.log(multiply1(2,3,4))
