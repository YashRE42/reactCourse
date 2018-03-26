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
}

const me = new Student;
console.log(me.getDescription());

const him = new Student('Barrowman','1');
console.log(him)
console.log(him.getDescription());