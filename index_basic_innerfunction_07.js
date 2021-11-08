//내장함수(전역함수)
//문자열 숫자변환
let inputA = '512'
let inputB = '3.141592'
let inputC = '2021년'

console.log(typeof parseInt(inputA), parseInt(inputA))
console.log(typeof parseFloat(inputB), parseFloat(inputB))
console.log(typeof parseInt(inputC), parseInt(inputC))

//타이머함수
// setTimeout(함수, 시간) : 일정한 시간경과후 함수 실행
// setInterval(함수, 시간) : 일정한 시간간격마다 함수실행
// clearTimeout() : 설정된 Timeout 해제
// clearInterval() : 설정된 Interval 해제

const timer = setInterval(()=>{
    console.log("Hello")
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', ()=>{
    clearInterval(timer)
})