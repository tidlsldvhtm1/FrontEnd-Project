// 변수의 유효범위 : scope
// var : 전역변수 , 재할당이 가능

// function scope(){
//     console.log(a)
//     if(true){
//         var a =123
//         console.log(a)
//         var a = 256
//         console.log(a)
//     }
//     console.log(a)
// }


// let : 유효범위가 블럭, 재할당이 불가능(중복정의 불가능) , 값의 변경은 가능
// function scope(){
//     console.log(a)
//     if(true){
//         let a =123
//         console.log(a)
//         // let a = 256
//         // console.log(a)
//     }
//     // console.log(a)
// }


// const : 유효범위 블럭{} , 재할당이 불가능(중복정의 불가능), 값의 변경이 불가능
function scope(){
    // console.log(a)
    if(true){
        const a =123
        console.log(a)
        // a = 256
        // console.log(a)
    }
    // console.log(a)
}

scope()

// closure
// => 함수를 선언하고 함수를 사용하는 렉시컬한 범위
// => JS클로저는 함수가 실행되는 시점에 생성되어
// 그 렉시컬한 환경을 포섭(클로저)하여 실행될때 이용

// closure가 적용이 안되는 경우
function add(){
    let n=0
    return ++n
}

console.log(add())
console.log(add())

function cadd(){
    let n = 0
    return function(){
        return ++n
    }
}

let increase = cadd()
console.log(increase())
console.log(increase())
console.log(increase())

function multiply(n){
    return function(){
        return n*=n
    }
}
let num1 = multiply(10)
console.log(num1())
console.log(num1())
let num2 = multiply(20)
console.log(num2())
console.log(num2())

//재귀함수
function factorial(n){
    if(n==0){
        console.log("호출끝")
    }
    else{
        console.log("호출" + n)
        factorial(n-1)
    }
}
factorial(7)