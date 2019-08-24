class Person{
    constructor(myName='Anon', yourName="a secret", age=0){
        this.name= myName
        this.yourName = yourName
        this.age = age
        return 
    }
    getGreeting(){
        return(`My name is ${this.name}. Nice to meet you ${this.yourName}`);
        
    }
    getDescription(){
        return(`The suspect is ${this.name}, we beleive he is ${this.age} years old. Proceed with caution`)
    }
}

class Custody extends Person{
    constructor(myName,yourName,age,location){
        super(myName,yourName,age)
        this.location = location
    }
    getDescription(){
        let description = super.getDescription()
     
        if(this.location){
            return console.log(description+=`We believe he is currently in ${this.location}`);
            
        }
        console.log(description);
        
        
    }
}

const kon = new Person('konnie','jessy')
const other = new Custody(undefined,'Alpha',15)
const king = new Custody('bob', 'doe', 12, 'Kingston')

other.getDescription()

king.getDescription();
