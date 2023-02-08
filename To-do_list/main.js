const button = document.querySelector(".btn")
const newItem = document.getElementById("new-item")
const list = document.querySelector(".list")

function appendItem (){
    const item = document.createElement('li')
    item.appendChild(document.createTextNode(newItem.value))
    list.appendChild(item)
}

button.addEventListener('click', ()=>{
    appendItem(newItem.value)
    newItem.value = ''
})

window.addEventListener('keyup', (e)=>{
    if (e.key === 'Enter'){
    appendItem(newItem.value)
    newItem.value = ''
    }
})