const button = document.querySelector(".btn")
const clearAll = document.querySelector(".clear")
const newItem = document.getElementById("new-item")
const list = document.querySelector(".list")
const item = document.querySelectorAll('li')

function appendItem (){
    if (newItem.value === '') return
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(newItem.value))
    list.appendChild(li)
}

list.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }
})

button.addEventListener('click', ()=>{
    appendItem(newItem.value)
    newItem.value = ''
})

clearAll.addEventListener('click', ()=>{
    while (list.firstChild){
        list.removeChild(list.firstChild)
    }
})

window.addEventListener('keyup', (e)=>{
    if (e.key === 'Enter'){
    appendItem(newItem.value)
    newItem.value = ''
    }
})