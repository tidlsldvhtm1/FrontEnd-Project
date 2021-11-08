// 내장객체

//String : '' ""
//Number 수치값
//Boolean : true, false
//Array []
//Object {}
//undefined

// 객체데이타형
// Object, Number, Math, String, Array, Date, Set, Map

// String 객체
const result = 'Hello World!!'.indexOf('World')
const result2 = new String('Hello World')

console.log(result)
console.log(typeof result2, result2)

const str = '012345'
console.log(typeof str, str)
console.log(str.length)

const strs = 'Hello World'
console.log(strs.lastIndexOf('o'))
console.log(strs.slice(0, 3))
console.log(strs.slice(6, 11))
console.log(strs.replace('World', 'world'))

const strv = 'testHong@gmail.com'
console.log(strv.match(/.+(?=@)/)[0])