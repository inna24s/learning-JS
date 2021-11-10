//let
// let a = 'Variable a';
// let b = 'Variable b';
// {
//     a = 'New Variable A';
//     let b = 'Local Variable b';
//     console.log('Scope a', a);
//     console.log('Scope b', b);
// }
// console.log('a', a);
// console.log('b', b);

//const
// const port = 8080;
// port =2000;//error

const array = ['JS', "is", 'awesome'];
array.push('!');
array[0] = 'JavaScript';
console.log(array); //4 elements
//array = '';//error

const obj = {}
obj.name = 'Inna';
obj.age = 21;
console.log(obj);
obj.age = 25;
delete obj.age;
// obj='';//error