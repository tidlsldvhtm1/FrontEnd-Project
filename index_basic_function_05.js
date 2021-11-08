function sum(x, y){
    console.log(x+y)
    return x+y
}

const ia = sum(18, 19)
const ib = sum(89, 59)

console.log(ia)
console.log(ib)
console.log(ia+ib)
console.log(sum(18,19)+sum(89,59))


const sum2 = function(x, y){
    return x + y
}
console.log(sum2(2, 9))

const instant = function(){
    console.log('즉시함수실행!!')
}()

// ( ) => { } vs 익명 함수 : function(){ }
const double = function(x){
    return x*2
}
console.log('double', double(9))

const doubleArrow = (x) => {
    return x * 2
}

console.log('doubleArrow', doubleArrow(99))

//화살표 함수의 축약형
//실행자가 하나만 있다면 => () 생략가능
//리턴문이 없는 경우 => {} 생략가능

const doubleArrowShort = (x) => 2*x
console.log('doubleArrowShort', doubleArrowShort(88))
const doubleArrowShort2 = (x,y) => x*x
console.log('doubleArrowShort2', doubleArrowShort2(8,8))
const doubleArrowShort3 = (x) => null
console.log('doubleArrowShort3', doubleArrowShort3(7))
const doubleArrowShort4 = (x) => undefined
console.log('doubleArrowShort4', doubleArrowShort4(88))
const doubleArrowShort5 = (x) => [1, 2, 3]
console.log('doubleArrowShort5', doubleArrowShort5(88))
const doubleArrowShort6 = (x) => ({name:'test'})
console.log('doubleArrowShort6', doubleArrowShort6(88))

//Callback function
// function timeout(){
//     setTimeout(()=>{
//         console.log('Hello!!')
//     }, 3000) //1000ms = 1s
// }

// timeout()
// console.log('Done')

function timeout(cb){
    setTimeout(()=>{
        console.log("Happy!!")
        cb()
    } , 3000)    
}
timeout(()=>{
    console.log("done!!")
})

// 호이스팅
// 함수의 선언부가 유효범위 최상단으로 끌어 올려지는 현상
const ta=7
hdouble()
//함수표현시는 접근오류(호이스팅이 되지 않음)
// const hdouble = function(){
//     console.log(a*2)
// }

function hdouble(){
    console.log(ta*2)
}

