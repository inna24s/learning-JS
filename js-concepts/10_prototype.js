//__proto__
//каждый объект имеет прототип, который берется от родительского объекта, от которого был создан данныей объект
//ES6
// Object.getPrototypeOf()

function Cat(name, color){
    this.name = name;
    this.color = color;
}

Cat.prototype.voice = function (){
    console.log(`Cat ${this.name} says myay`);
}

const cat = new Cat('Kot', 'white');
cat.voice();
console.log(Cat.prototype);
console.log(cat);
console.log(cat.__proto__=== Cat.prototype);
console.log(cat.constructor);

function Person(){
}

Person.prototype.legs = 2;
Person.prototype.skin = 'white';

const person = new Person();
person.name = 'Aleksey';

console.log('skin' in person)

console.log(person.hasOwnProperty('name'))//true
console.log(person.hasOwnProperty('skin'))//false

//Object.create
let proto = {year:2021}
const myYear = Object.create(proto)

console.log(myYear.year);//2021
console.log(myYear.hasOwnProperty('year'));//false
console.log(myYear.__proto__ === proto);//true

proto.year = 2022;
console.log(myYear.year);//2022

proto = {year:2018}
console.log(myYear.year);//2022