//scope- доступностть определенных переменных в функциях
//глобальный доступность везде

function funcA(){
    let a = 1;
    function fancB(){
        let b =2;
        function funcC(){
            let c = 3;
            console.log('funcC', a, b, c);
        }

        funcC();
        console.log('funcB', a, b);
    }
    fancB();
    console.log('funcA', a);
}
funcA();