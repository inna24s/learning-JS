// console.log(sum(1, 41));
// function sum(a, b){
//     return a+b;
// }

//hosting - js при интерпретации какого-либо файла берет и перемещает
// //определение функций в начало файла
// var i;
// console.log(i);//undefined, т.к. интерпретатор знает, что где-то в документе она определена
// i = 42;
// console.log(i); //42

// console.log(num);//error, тк на переменные типа let и const хостинг не распространяется
// const num = 42; //or let num=42;
// console.log(num);

//Function Expression & Function Declaration
//square(25); //625
// function square(num){ //Function Declaration
//     return num ** 2;
// }

square(25)//error
var square = function(num){ //Function Expression
    return num ** 2;
}
square(25);//625