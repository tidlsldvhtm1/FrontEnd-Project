let output=""

for(let i=0; i<256; i++){
    output+= '<div></div>'
}

document.body.innerHTML = output
// for(let i = 0; i<divEls; i++){
//     let div = divs[i]
//     div.style.height = "2px"
//     div.style.backgroundColor = `rgb($[i],$[i],$[i]})`
// }


let divEls = document.querySelectorAll('div')
divEls.forEach((div, i)=>{
    div.style.height = '2px'
    div.style.backgroundColor = `rgb(${i}, ${i}, ${i})`
})