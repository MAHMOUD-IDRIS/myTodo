const data = {
    lists: [
        {id: 1, statusOfItem: true , list: "Dukkan", 
            tasks: [
                {id: 1.1 ,statusOfItem: true , task: "buy tomato"},{id: 1.1 ,statusOfItem: true , task: "buy chocolate"}
            ]
        },
        {id: 2, statusOfItem: true , list: "Appartment", 
            tasks: [
                {id: 1.1 ,statusOfItem: true , task: "find appartment"},{id: 1.1 ,statusOfItem: true , task: "rent appartment"}
            ]
        }
]
}
//Getting DOM elements:
const inputArea = document.getElementById('input');
const itemsCounter = document.getElementById('itemsOnList');
const tasksUl = document.getElementById('todoItems');
const listsUl = document.getElementById('maintasks');
const selectedListHeader = document.getElementById('selectedListHeader');

let sideMenuOpen = false;
let listSelected = null;

document.getElementById('sidemenuBtn').onclick = ()=>{
    document.querySelector('.sidemenu').classList.toggle("open");
    console.log("Added");
    inputArea.placeholder = sideMenuOpen ? "Add New List" : "Add New Task";
    sideMenuOpen == true ? sideMenuOpen = false : sideMenuOpen = true;
    document.querySelector(".sidemenu-btn").classList.toggle('open');

    console.log(
        "hellow world!!!" ,
        createItem("mahmoud")
    )    
}


listSelected = data.lists[0];
renderTasks();

function createItem (inputValue){
    let itmeId = undefined;
    let statusOfItem = false;
    let detail = inputValue;
    if (sideMenuOpen){
        return {
        id: itmeId, statusOfItem: statusOfItem, list: detail, tasks:[]
        }
    } else {
        return {
            id: itmeId, statusOfItem: statusOfItem, task: detail
    }    
}
}

//list Selected




function createListItem (text, placeIt){
    let li = document.createElement('li');
    li.innerText = text;
    let button = document.createElement('button');
    li.appendChild(button);
    placeIt.appendChild(li);
}

/*
createListItem("hellow there" , tasksUl)
console.log(listSelected);*/



function renderLists (){
    for (let element in data.lists){
        console.log(data.lists[element].list)
        createListItem( data.lists[element].list , listsUl)
        }
        selctingListElement()
        itemsCounter.innerText = listSelected.tasks.length;
    }

    function selctingListElement(){
        document.querySelectorAll('li').forEach(listItem => {
            listItem.onclick = (el)=>{
                if (sideMenuOpen){
                    console.log('selecting List', el.target.innerText);
                    getSelectedList (el.target.innerText)
                } else {
                    console.log('selecting Task', el.target.innerText)
                }               
                  
            }
        })
    }
renderLists();
    function getSelectedList (listName){
        data.lists.find(el => 
            {
                el.list = listName
                console.log(el);            
            });
        console.log("listSelected", listSelected)
        //listSelected = indexOfList;  
        console.log(listSelected , "renderHeader")
        renderHeader()
    }

    function renderTasks () {
        console.log('tasks and selected list', listSelected)
        for (let element in listSelected.tasks){
        console.log(data.lists[0].tasks[element].task)
        createListItem( listSelected.tasks[element].task , tasksUl)        
    }
    renderHeader()
    }

function renderHeader(){
    console.log(listSelected , "renderHeader")
    selectedListHeader.innerText = listSelected.list;
    itemsCounter.innerText = listSelected.tasks.length;
}