const tea = document.querySelector('#tea')

const childs = tea.childNodes

console.log(childs)

for(let i=0; i<childs.length; i++){
    if(childs[i].nodeName == "LI"){
        console.log(i, '번째데이타', childs[i].firstChild.nodeValue)
    }
}