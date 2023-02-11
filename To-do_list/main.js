const button = document.querySelector(".btn")
const clearAll = document.querySelector(".clear")
const newItem = document.getElementById("new-item")
const list = document.querySelector(".list")
let item = document.getElementsByTagName('LI')

function appendItem (){
    if (newItem.value === '') return

    let li = document.createElement('li')
    li.appendChild(document.createTextNode(newItem.value))
    list.appendChild(li)
}

function clearAllItems(){
    while (list.firstChild){
        list.removeChild(list.firstChild)
    }
}

list.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }
})

button.addEventListener('click', ()=>{
    appendItem()
    newItem.value = ''
})

clearAll.addEventListener('click', ()=>{
    clearAllItems()
})

window.addEventListener('keyup', (e)=>{
    if (e.key === 'Enter'){
    appendItem()
    newItem.value = ''
    }

    if(e.key === 'Escape'){
        clearAllItems()
    }
})