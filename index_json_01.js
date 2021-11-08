let emp = {
    "name" : "홍길동",
    "age" : 24,
    "tel" : "010-1234-4321",
    "address" : "서울 중랑구"

}

let msg = ""
msg = `이름 : ${emp.name} <br> 나이 : ${emp.age} <br> 전화번호 : ${emp.tel} <br> 주소 : ${emp.address}`
console.log(msg)

let divEl = document.querySelector('#result')
console.log(divEl)
divEl.innerHTML = msg