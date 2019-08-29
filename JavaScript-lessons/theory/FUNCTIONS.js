
a()

function a () {
    b()
}
function b () { }

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
