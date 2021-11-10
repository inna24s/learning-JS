//scope - видимость определенных переменных
//context определяет, как функция была вызвана и указывает на ключевое слово this

const person = {
    surname: 'Старк',
    knows: function (what, name){
        console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
    }
}

const john = {
    surname: 'Сноу'
}
person.knows('все', 'Бран');
//сразу вызывают функцию
person.knows.call(john, 'ничего не', 'Джон')
person.knows.apply(john, ['ничего не', 'Джон'])
//ES6
person.knows.call(john, ...['ничего не', 'Джон'])
//bind не вызывает функцию
person.knows.bind(john, 'ничего не', 'Джон')();

//=====
//ES5
function Person(name, age){
    this.name = name;
    this.age = age
    console.log(this)
}

const elena = new Person('Elena', 25);

//=====
//Явный binding

function logThis(){
    console.log(this)
}

const obj = {num:42};
logThis.apply(obj);
logThis.call(obj);
logThis.bind(obj)();

//====Неявный binding
const animal = {
    legs: 4,
    logThis: function (){
        console.log(this)
    }
}

//====
function Cat(color){
    this.color = color;
    console.log('This', this);
    (()=>console.log('Arrow this', this))()//стрелочна функция не создает своего контекста
}

new Cat('Black');