// let emp = {
//     "name" : "홍길동",
//     "age" : 24,
//     "tel" : "010-1234-4321",
//     "address" : "서울 중랑구"

// }

// let msg = ""
// msg = `이름 : ${emp.name} <br> 나이 : ${emp.age} <br> 전화번호 : ${emp.tel} <br> 주소 : ${emp.address}`
// console.log(msg)

// let divEl = document.querySelector('#result')
// console.log(divEl)
// divEl.innerHTML = msg

let emp = [
    {"name":"홍길동", "age":25},
    {"name":"동길홍", "age":22},
    {"name":"길동홍", "age":28}
]
let msg=""
// with(emp[0]){
//     msg += "이름 : " + name + "<br> 나이 : " + age + "<br><br>"
// }
// with(emp[1]){
//     msg += "이름 : " + name + "<br> 나이 : " + age + "<br><br>"
// }
// with(emp[2]){
//     msg += "이름 : " + name + "<br> 나이 : " + age + "<br><br>"
// }
// msg += "이름 : " + emp[0].name + "<br> 나이 : " + emp[0].age + "<br><br>"
// msg += "이름 : " + emp[1].name + "<br> 나이 : " + emp[1].age + "<br><br>"
// msg += "이름 : " + emp[2].name + "<br> 나이 : " + emp[2].age + "<br><br>"


// for of 문
// for (let empi of emp){
//     msg += "이름 : " + empi.name + "<br> 나이 : " + empi.age + "<br><br>"
// }
for (let empi of emp){
    with(empi){
        msg += "이름 : " + name + "<br> 나이 : " + age + "<br><br>"
    }
}

emp.forEach((empi)=>{
    with(empi){
        msg += "이름 : " + name + "<br> 나이 : " + age + "<br><br>"
    }
})

document.querySelector("#result").innerHTML = msg

// forEach 문
// emp.forEach((empi)=>{
//     msg += "이름 : " + empi.name + "<br> 나이 : " + empi.age + "<br><br>"
// })