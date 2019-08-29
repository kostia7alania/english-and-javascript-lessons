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


let allMessages = [
    {author: "zloy-zloy", text: "А у кого какой мобильный??", edited: true},
    {author: "zloy-zloy", text: "Я с андроидом. Уже 3 года живет, он самым крепким оказался, пережил 2 утопления.", edited: false},
    {author: "МамаЗузу", text: "Айфон в свое время успешно сдох при первом же падении на кафельную плитку.", edited: false},
    {author: "void", text: "У меня андроид. Особенно нравится, что никаких заморочек с айтюнс.", edited: true},
    {author: "mama", text: "Айфон.", edited: false},
    {author: "mama", text: "Почему не отвечаешь?", edited: false},
    {author: "void", text: "Дэвид Хэрман «Сила JavaScript. 68 способов эффективного использования JS».", edited: false},
    {author: "void", text: "Marijn Haverbeke, Вячеслав Голованов «Выразительный javascript: Введение».", edited: false},
    {author: "void", text: "Ленюсь.", edited: false},
    {author: "void", text: "Пока оценивать нечего.", edited: false},
    {author: "void", text: "Не по-русски как-то получается, хоть и на русском.", edited: false},
    {author: "ivanov", text: "Чип и Дейл прикольно, играл в детстве.", edited: false},
    {author: "ivanov", text: "hello, world", edited: true},
    {author: "void", text: "Сейчас напишу книгу по JS.", edited: false},
    {author: "ivanov", text: "Спасибо.", edited: true},
    {author: "ivanov", text: "Смысл такого видео? Все непонятные функции приходится самому смотреть. Надо не так делать. Пишете код - объясняете сразу, что к чему, голосом, ну, или там, текстом хотя бы, хотя лучше голосом.", edited: true},
    {author: "void", text: "Поделитесь видео-каналами по js.", edited: true},
    {author: "void", text: "Ничего не понравилось.", edited: true}
];


function messageTracker(counter) {
  let total = counter.length; // Количество сообщений в чате
  let edited = 0; // Кол-во отредактированных сообщений
  let unedited = 0; // Кол-во нередактированных сообщений
  // Array.prototype.forEach = (element, key, index) => 'ретурним чето'
  // Array.prototype.sex = function ()
  counter.forEach( obj => obj.edited ? edited++ : unedited ++)
  //const oldArr = [1,2,3,4];
  //const newArr = oldArr.filter(element => element < 3)  
//edited = counter.filter(obj => obj.edited).length
//unedited = counter.filter(obj => !obj.edited).length

     for (let i = 0; i < total; i++) counter[i].edited && i>1 && edited++  || unedited++
     
     1 && 0 && 11 && 123 || i--


  return { total, edited, unedited }
}

console.log("Количество сообщений: " + messageTracker(allMessages).total);
console.log("Отредактированных сообщений: " + messageTracker(allMessages).edited);
console.log("Нередактированных сообщений: " + messageTracker(allMessages).unedited);


//Ложные и правдивые значения
//Falsy (ложных? лживеньких?) значений ровно 7, их надо знать наизусть: 0, -0 (да, в программировании есть отрицательный ноль), NaN, null, undefined, '' (пустая строка), false. Все остальные значения truthy, в том числе '0' (строка из символа 0). При преобразовании в логический (булев) тип falsy значения преовращаются в false, а все остальные — в true:
/// https://gist.github.com/codedokode/ce30e7a036f18f416ae0












// const arr = [3, 4, 2, 1, 5, 2, 1000, 400].sort(function (a, b) { 
// return b - a; 
// }).splice(0, 3);

// console.log(arr)


