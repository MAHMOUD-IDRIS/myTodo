const inputArea = document.getElementById('input');
let lists = true;
document.getElementById('sidemenuBtn').onclick = ()=>{
    document.querySelector('.sidemenu').classList.toggle("open");
    console.log("Added");
    inputArea.placeholder = lists ? "Add New List" : "Add New Task";
    lists == true ? lists = false : lists = true;


}



