const people = {
    salute: 'Bom dia',
    speak(){
        console.log(this.salute)
    }
}

people.speak()

const speak = people.speak


//speak()
//doesnt work because "this" enviroment belongs to people
//so when it calls this.salute it's not found then returns an error

//Right way:
const peopleTalk = people.speak.bind(people)

//We are binding the "this" enviroment from people to people.speak


peopleTalk()