const inputArea = document.getElementById('input');
let sideMenuOpen = true;
document.getElementById('sidemenuBtn').onclick = ()=>{
    document.querySelector('.sidemenu').classList.toggle("open");
    console.log("Added");
    inputArea.placeholder = sideMenuOpen ? "Add New List" : "Add New Task";
    sideMenuOpen == true ? sideMenuOpen = false : sideMenuOpen = true;
    document.querySelector(".sidemenu-btn").classList.toggle('open');


}

const data = {
    lists: [{id: 1, done: true , list: "groceries", tasks: [{id: 1.1 ,done: true , task: "buy tomato"}]},
    {id: 2, done: true , list: "school", tasks: [{id: 2.1 ,done: true , task: "class at 5"}]}
], 
}

for (let element in data.lists){
    console.log(data.lists[element].list)
}

for (let element in data.lists){
    console.log(data.lists[element].tasks[0].task)
}



