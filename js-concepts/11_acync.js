//js работает в 1 потоке
//callstack
const fisrt = () => console.log('First');
const second = () => console.log('Second');
const third = () => console.log('Third');

//First, Third, Second
fisrt();//закидывает в callstack, выполнение
setTimeout(second, 0);//закидывает на сторонний API
//очистка callstack
third();//закидывает в callstack, выполнение,очистка callstack
//setTimout увидел, что выполнение моментальное, пометил функцию, как нужную для выполнения
//и помещает ее в CallbackQueue(очередь, там бегает EventLoop, он выкидывает функцию из очереди в callstack)
