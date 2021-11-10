//Immediate Invoked Function Expression
// (Function Expression, кторый моментально выполняется)
//Для создания локального scope
let results = [];
// for (var i=0; i < 5; i++)
//     results.push(function (){
//         console.log(i);
//     })
//
// results[2]();//5
// results[4]();//5

for(var i=0;i<5; i++){
    (function (){
        var j = i;
        results.push(function (){
            console.log(j)})
    })()
}
results[2]()//2
results[4]()//4