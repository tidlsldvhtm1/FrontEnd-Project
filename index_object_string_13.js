// Object
// - 원시형데이터 : 값을 참조
// - 참조형데이터 : 메모리에 할당되어 있는 주소를 참조하여 데이터를 찾게됨
//                  => 객체데이터 {} , 배열데이터 [], 함수 (function)
// 객체메서드
// - prototype메서드
// - 정적메서드(static메서드) => Object.prototype메서드를 제외한 메서드

const UserAge = {
    name:'Hong',
    age:55
}

const UserEmail = {
    name : 'Hong',
    email : 'hong@test.com'
}

// 정적메서드 : assign()
// const target = Object.assign(UserAge, UserEmail)
const target = Object.assign({}, UserAge, UserEmail)
console.log(target)
console.log(UserAge)
console.log(target === UserAge)

const ta = {k:123}
const tb = {k:123}
console.log(ta===tb) // false

// keys() : 객체의 키값만
const User = {
    name : 'Hong',
    age : 25,
    email : 'Hong@test.com'
}

const keys = Object.keys(User)
console.log(keys)
console.log(User['age'])
const values = keys.map(key=>User[key])
console.log(values)