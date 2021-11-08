// Object
// 객체생성 : literal을 이용한 객체 생성
const User = {
    name : 'Hong',
    age : 25,
    view :function(){
        return `My name is ${this.name}, My age is ${this.age}`
    } 
}

console.log(typeof User, User)
console.log(User.name, User.age)
console.log(User.view())

// 생성자 함수를 이용한 객체 생성
// 빈객체를 생성하고 프로퍼티 속성, 메서드 추가

const UserA = new Object()
UserA.name = 'Hong'
UserA.age = 18
UserA.view = function(){
    return `My name is ${this.name}, My age is ${this.age}`
}
console.log(UserA.view())

//생성자 함수
function UserB(name, age){
    this.name = name
    this.age = age
    this.view =function(){
        return `My name is ${this.name}, My age is ${this.age}`
    }    
}

let obj1 = new UserB('PARK', 33)
let obj2 = new UserB('Choi', 66)
console.log(obj1.view())
console.log(obj2.view())

//prototype 메서드
function Triangle(b, h){
    this.base=b
    this.height=h
}
Triangle.prototype.area = function(){
    return this.base*this.height/2
}
Triangle.prototype.printResult = function(){
    return `밑변 : ${this.base} 높이 : ${this.height} 넓이 : ${this.area()}`
}

let t1 = new Triangle(30, 10)
console.log(t1.printResult())

let t2 = new Triangle(77, 90)
console.log(t2.printResult())

//for문 과제라고? 353p ~ 380p ????
