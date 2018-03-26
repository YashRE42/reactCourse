class Person{
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGretting(){
        return `Hi. I am ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year${this.age == 1?'':'s'} old.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major; //returns boolean true or false, converts undefined to false
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor){
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGretting(){
        let greeting = super.getGretting();
        if(this.hasHomeLocation()){
            greeting += ` I am visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Traveller;
console.log(me.getGretting());

const him = new Traveller('Barrowman', '1', 'New Earth');
console.log(him.getGretting());