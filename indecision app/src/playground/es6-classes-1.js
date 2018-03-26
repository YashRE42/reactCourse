class Person{
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGretting(){
        return `Hi. I am ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year${this.age == 1?'':'s'} old`;
    }
}

const me = new Person;
console.log(me.getDescription());

const him = new Person('Borowman','1');
console.log(him)
console.log(him.getDescription());