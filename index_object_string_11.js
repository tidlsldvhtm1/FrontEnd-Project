//Array 객체

const numbers = [1, 2, 3, 4]
const fruits = ['apple', 'Banana', 'Cherry']

console.log(numbers[1])
console.log(numbers.length)
console.log(fruits[2])
console.log(fruits.length)
console.log([1,2].length)
console.log([].length)

console.log(numbers.concat(fruits))
console.log(numbers)
console.log(fruits)

fruits.forEach(function(element, index, array){
    console.log(element,index,array)
})
// 콜백함수 : 화살표함수
fruits.forEach((element, index, array)=>{
    console.log(element,index,array)
})
fruits.forEach((fruit,index)=>{
    console.log(`${fruit}-${index}`)
})

// map() : 새로운 배열로 반환
const b = fruits.map(function(fruit, index){
    return{
        id:index,
        name:fruit
    }
})
console.log(b)

const bb = fruits.map((fruit, index)=>{
    return{
        id:index,
        name:fruit
    }
})
console.log(bb)

// filter() 함수 : 테스트 후에 배열로 반환
const f = numbers.filter(number => number<3)

console.log(f)
console.log(numbers)
// find() 함수 : 판별 조건을 테스트 후에 첫 번째 요소 값 반환
const ff = fruits.find(fruits=>/^B/.test(fruits))
console.log(ff)
const fi = fruits.findIndex(fruits=>/^B/.test(fruits))
console.log(fi)

