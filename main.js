const inputArea = document.getElementById('input');
let lists = true;
document.getElementById('sidemenuBtn').onclick = ()=>{
    document.querySelector('.sidemenu').classList.toggle("open");
    console.log("Added");
    inputArea.placeholder = lists ? "Add New List" : "Add New Task";
    lists == true ? lists = false : lists = true;
    document.querySelector(".sidemenu-btn").classList.toggle('open');


}

//getting list elements and working on them
const listElements = document.querySelectorAll('li');

listElements.forEach(item => {
    item.onclick = done();
})

function done (){
console.log('clicked for done!')
}



