//null, undefined, boolean, number, string, object, symbol(ES6)

console.log(typeof 0); //number
console.log(typeof true);
console.log(typeof "JS"); //"", '', ``
console.log(typeof undefined);
console.log(typeof Math);
console.log(typeof Symbol('JS'));

console.log(typeof null); //object
console.log(typeof function (){});//function

console.log(typeof NaN); //number
console.log(typeof 1/0);//number

//undefined - переменнная не объявлена
//функции, которые ничего не возвращают, по умолчанию возвращают undefined

//null - переменная объявлена, но не присвоено значение

//Приведение типов
let language = 'JavaScript'
if(language)//интерпретатор приводит строковый тип данных к boolean
    console.log('The best language is ', language);

//false - '', 0, null, undefined, NaN, false
console.log(Boolean(''));
//[], {}, function(){} == true

//Строки и числа
console.log(1 + '2')//'12'
//JS видит. что есть строка и приводит все к строковому типу данных
console.log(1+''+2)//'12'
console.log('' - 1 + 0);//-1 (оператор минус не определен для строк
console.log('3'*'8');//24
console.log(10+4+'px')//14px
console.log(4+'px'+10)//4px10
console.log('4px'-2)//NaN
console.log(null+2)//2 (null приводится к 0)
console.log(undefined+2); //nan

//== vs ===
//== сравнивает значения с приведением типов
//=== сравнивает значения без приведения типов
console.log(2=='2')//true
console.log(2==='2')//false
console.log(undefined == null) //true
console.log(undefined === null) // false
console.log('0'==false)//true

//========
console.log(false == '');//true
console.log(false==[]);//true
console.log(false=={});//false
console.log(''==0);//true
console.log(''==[]);//true
console.log(''=={});//false
console.log(0==[]);//true
console.log(0== {});//false
console.log(0==null);//false
