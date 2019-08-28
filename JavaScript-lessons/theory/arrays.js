const arr = [33,44, 9, 99999, 10, 0, 8888, 1113, 444, 555, 111]
let biggest = 0;
arr.forEach(num => num > biggest && (biggest = num))

    //iteration 1:
    //    num     == 33;
    //    biggest == 0;
    // => biggest = условие ? num : biggest


// biggest = 1>2 ? 'yes' : "no" 

function compare(a, b) {
    if (a меньше b по некоторому критерию сортировки) return -1;
    if (a больше b по некоторому критерию сортировки) return 1;
    return 0;// a должно быть равным b
  }

// const len = arr.length
/*
for (иниц переменных                ; условие             ; операция  )
for (let i = 1, g = 2, y=1, wwww=1 ; g == w**2/(y+1)/wwww ; g = w**2/(y+1)/wwww  ) {console.log(i,g,y,wwww)}
*/
// => Открывай в консоле хрома:
for (let i = 0 ; i<10 ; i++ ) {debugger;console.log(`i=>${i}`)}
/*
ITERATION #1: SCOPE: {Block} i: 0
=>PRESS F8:
ITERATION #2: SCOPE: {Block} i: 1
....
=> LAST ITERATION:
ITERATION #10: SCOPE: {Block} i: 9 <===== i<10 FALSE ( i не меньше 10)
*/
const a = 1;
let w;

window.q = 1

if(true) { 
    q = 123123
    if(true) {

        const q=1
        function e () {
            console.log(q)
        }
        e() // => 1

        // q==defined 
    }
}
//q==undefined

{
    const f = (el) => { 
        const asdas = 12;
        return el+100+asdas
    }
    console.log(f(10));
    
    function f (el) {
        const asdas = 12;
        return el+100+asdas
    } 
    console.log(f(1231112312))

    const elems = [6,2,34,4]
    const multiply = (a,i) => a + 10;
    const newArr = elems.map(multiply)
    console.log(newArr)

}



const arr = [33,44, 9, 99999, 10, 0, 8888, 1113, 444, 555, 111]

let biggest = -Infinity;

arr.forEach(function(num){
    if(num > biggest) biggest = num;
})
console.log(biggest);
// вывести топ-3 самые большие числа
const a = [5,1,2,3,4].sort((a,b)=>b-a).filter((_,i)=> i<3 )
console.log(a)


var res = func1(func2)
console.log('res=>', res)

function func1(cb){
    console.log('первая функция')
    return cb()
}
function func2(){
    console.log('вторая функция')
    return "ретурн второй фнукции"
}

/////////

[ a=>a+100 ][0]
[ function (a){return a+100} ][0]

let anon = function (a){return a+100}
let anon = a=>a+100
[12313,'adasd', anon ][2]()

//obj
const obj = {a: (a,b) => a + b}
console.log( obj )

obj['a'](3,4)





a()

function a () {
    b()
}
function b () { }

