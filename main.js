const list = document.querySelector('.list');
const addBtn = document.querySelector('#addbtn');
//const inputvalue = ;

const LOCAL_STORAGE_KEY = "KEY.KEY"
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []

function render(){
    list.innerHTML = ""
lists.forEach(element => {
const item = document.createElement('li');
item.classList.add('item');
item.innerText = element;
list.appendChild(item)})
}



 
addBtn.addEventListener('click', ()=>{

    let input = document.querySelector('#input').value;
    if (input == null || input == "") {return};
    lists.push(input);
    
    render()
    save()
})

function deletelocalStorageList (){ localStorage.removeItem(LOCAL_STORAGE_KEY);}

    

function save (){
    console.log(lists)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lists))
}

document.getElementById('delete').addEventListener('click', ()=>{
    console.log('DELETED!')
    deletelocalStorageList()
})


