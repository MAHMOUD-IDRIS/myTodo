const LOCAL_STORAGE_LIST_KEY = "tasks.list"
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [{id: 1, statusOfItem: false , list: "Demo", 
tasks: [
    {id: 1.1 ,statusOfItem: true , task: "Task 1"},{id: 1.1 ,statusOfItem: false , task: "Task 2"}, {id: 1.1 ,statusOfItem: true , task: "Task3"}
]
}];
/*const lists = [
        {id: 1, statusOfItem: false , list: "Dukkan", 
            tasks: [
                {id: 1.1 ,statusOfItem: true , task: "buy tomato"},{id: 1.1 ,statusOfItem: false , task: "buy chocolate"}, {id: 1.1 ,statusOfItem: true , task: "buy Biscuits"}
            ]
        },
        {id: 2, statusOfItem: true , list: "Appartment", 
            tasks: [
                {id: 1.1 ,statusOfItem: true , task: "find appartment"},{id: 1.1 ,statusOfItem: true , task: "rent appartment"}
            ]
        }
]
*/

//Getting DOM elements:
const inputArea = document.getElementById('input');
const itemsCounter = document.getElementById('itemsOnList');
const tasksUl = document.getElementById('todoItems');
const listsUl = document.getElementById('maintasks');
const selectedListHeader = document.getElementById('selectedListHeader');

let sideMenuOpen = false;
let listSelected = lists[0] || {id: 1, statusOfItem: false , list: "Demo", 
tasks: [
    {id: 1.1 ,statusOfItem: true , task: "Task 1"},{id: 1.1 ,statusOfItem: false , task: "Task 2"}
]
} ;

render()

function sideMenu(){
    document.querySelector('.sidemenu').classList.toggle("open");
    console.log("Added");
    inputArea.placeholder = sideMenuOpen ? "Add New List" : "Add New Task";
    sideMenuOpen == true ? sideMenuOpen = false : sideMenuOpen = true;
    document.querySelector(".sidemenu-btn").classList.toggle('open');
    render()
    selctingListElement()
    console.log(
        "hellow world!!!" ,
        createItem("mahmoud")
    ) 
}
document.getElementById('sidemenuBtn').onclick = sideMenu;



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


/*
function renderLists (){
    for (let element in data.lists){
        console.log(data.lists[element].list)
        createListItem( data.lists[element].list , listsUl)
        }
        selctingListElement()
        itemsCounter.innerText = listSelected.tasks.length;
    }*/

function selctingListElement(){
        document.querySelectorAll('li').forEach(listItem => {
            listItem.onclick = (el)=>{
                if (sideMenuOpen){
                    console.log('selecting List', el.target.innerText);
                    getSelectedList (el.target.innerText)
                    //document.querySelector('.sidemenu').classList.remove("open");
                } else {
                    
                    console.log('selecting Task', el.target.innerText)
                }  

            }
        });
        document.querySelectorAll('li>button').forEach(button => {button.onclick = selectItem})
    }



function findSelectedTask(element){
    let task;
   if (sideMenuOpen){
       console.log(element, lists)
      for (let i in lists){
          lists[i].list == element ? task = lists[i] : 'list not found';
      }

       
   } else {
     const tasks =  listSelected.tasks;
    console.log(element, tasks)
        for (let i in tasks){
        console.log(i, tasks[i].task, tasks[i]);

       tasks[i].task == element ? task = tasks[i] : "Try Again :("                  
    }
    console.log(task)
      
   }
   console.log(task , "taskkk")
    return task
}

function getSelectedList (listName){

        for (let i in lists){
            console.log(i, lists[i].list);
            if (lists[i].list == listName) {
               listSelected = lists[i]
               console.log("s", lists[i]) 
               //document.querySelector('.sidemenu').classList.remove('open'); 
               sideMenu()          
            } else {
                console.log ("not found!");

            }
        }
       
        console.log("listSelected", listSelected)
        //listSelected = indexOfList;  
        
        renderHeader()
    }
function saveToLocalStorage (){
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
}
function render () {
    saveToLocalStorage ()
    if(sideMenuOpen){

        lists.forEach(list => {
            const length = list.tasks.length;
            let counter = 0;
            for (let i in list.tasks){
                if (list.tasks[i].statusOfItem) {counter +=1} 
            }
           if(length == counter && length != 0){
               list.statusOfItem = true;
           }
        })
        clearElement(listsUl);
        console.log(lists);
        lists.forEach(item => {
            let li = document.createElement('li');
            li.innerText = item.list;           
            let button = document.createElement('button');
             if(item.statusOfItem){
                   li.classList.add("done"); button.classList.add('buttonSelected')                    
                } else {
                       console.log('not selected yet')
             } ;
            li.appendChild(button);
            listsUl.appendChild(li);
        })


    } else {
        clearElement(tasksUl);
        listSelected.tasks.forEach(item => {
            let li = document.createElement('li');
            li.innerText = item.task;           
            let button = document.createElement('button');
             if(item.statusOfItem){
                   li.classList.add("done"); button.classList.add('buttonSelected') } else {
                       console.log('not selected yet')
             } ;
            li.appendChild(button);
            tasksUl.appendChild(li);
        })
        
    }
        
        renderHeader()
        selctingListElement()
        
        
        
        /*console.log('tasks and selected list', listSelected)
        for (let element in listSelected.tasks){
        console.log(listSelected.tasks[element].task)
        listSelected.tasks[element].statusOfItem ?
        createListItem(listSelected.tasks[element].task , tasksUl)  : console.log('only finished items are rendered!')  ;*/    
    }
    
    
function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}
 
function renderHeader(){
    //console.log(listSelected , "renderHeader" , listSelected.tasks.length)
    selectedListHeader.innerText = listSelected.list || "Make it";
    itemsCounter.innerText = listSelected.tasks.filter((item)=>{
        return item.statusOfItem == false
     }).length;
      
}

function selectItem (item){
console.log(item.target, item.target.parentElement)
item.target.parentElement.classList.toggle('done');
item.target.classList.toggle('buttonSelected');
let selectedTask = findSelectedTask(item.target.parentElement.innerText);
console.log(selectedTask.statusOfItem, "before")
selectedTask.statusOfItem = selectedTask.statusOfItem == true ? false : true;
console.log(selectedTask.statusOfItem, "after")
render()
}

document.getElementById('add-btn').onclick = ()=>{
    const addingText = document.getElementById('input').value;
    if (addingText == "") return;
    console.log('adding', addingText)
    if(sideMenuOpen) {
      console.log("adding list" , addingText); 
      lists.push(createItem(addingText));
      document.getElementById('input').value = "";      

   } else {
       console.log("adding task", addingText, createItem(addingText) );
      
       listSelected.tasks.push(createItem(addingText))
       document.getElementById('input').value = "";
             
   } 
    render()
      
}

//removes  - functions
document.getElementById('remove-all-tasks').onclick = removeAll;
document.getElementById('remove-finished-tasks').onclick = removeFinished;

function removeAll (){
    if(sideMenuOpen){
        lists = []
    } else {
        listSelected.tasks = []
    }
    render()

}

function removeFinished(){
    if(sideMenuOpen){
        lists = lists.filter(item => {
           return item.statusOfItem == false
        })
    } else {
        listSelected.tasks = listSelected.tasks.filter(item => {
            return item.statusOfItem == false
        })
    }
    render()
}