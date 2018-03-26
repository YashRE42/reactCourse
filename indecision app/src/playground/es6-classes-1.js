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

const me = new Student;
console.log(me.getDescription());

const him = new Student('Barrowman', '1', 'Time travelling');
console.log(him)
console.log(him.getDescription());