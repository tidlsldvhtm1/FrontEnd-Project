// function addList(){
//     const addValue = document.getElementById('item').value
//     const li = document.createElement("li");
//     li.setAttribute('id',addValue);
//     const addText = document.createTextNode(addValue);
//     li.appendChild(addText);
//     document.getElementById('todolist').appendChild(li);
//     document.getElementById("item").value = "";
// }

// let btnEl = document.querySelector("#btn")
// btnEl.addEventListener('click', addList)

function addItem(){
    let list = document.querySelector('#todolist')
    let item = document.querySelector('#item')

    let listtime = document.createElement('li')
    let itembtn = document.createElement('button')

    itembtn.addEventListener('click',(e)=>{
        let pnode = e.target.parentNode
        list.removeChild(pnode)
    })

    listtime.innerHTML = item.value
    listtime.appendChild(itembtn)


    list.appendChild(listtime)


    item.value = ''
    item.focus()
}

let btnEl = document.querySelector('.btn')
btnEl.addEventListener('click', addItem)