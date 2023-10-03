//Anonymous functions has no name bind directly to the function
//We define vars/let/constants to attribute to then

const showResult = (a:number, b:number):void => {
    
    console.log(a+b)

}

showResult(2,5)
showResult(4,5)
showResult(12,5)


//We can also define functions inside anonymous functions like minimal clases

const group  = {
    speak(){
        console.log('Ok working speak')
    },
    close(param? : String){
        console.log('CLosing thanks', param)
    }
}

group.speak()
group.close('Nicolas')