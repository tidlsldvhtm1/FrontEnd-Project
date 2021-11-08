function signUp(){
    alert("정말로 가입하시겠습니까?")
    document.getElementById("regform").style.display = "none"
    document.getElementById("rname").innerHTML = document.form1.name.value
    document.getElementById("remail").innerHTML = document.form1.email.value
    document.getElementById("result").setAttribute("style", "display:block; background-color:khaki;")
}

// regbtn에 click되면 singUP 실행
// 표준이벤트모델 방식
document.getElementById('regbtn').addEventListener('click', signUp)
let btnEl = document.querySelector("#regbtn")
btnEl.addEventListener('click', signUp)