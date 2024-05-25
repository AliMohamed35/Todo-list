let input = document.getElementById('input-box');
let list = document.getElementById('list-container');

function addTask(){
    if(input.value === ""){
        alert('Please enter something');
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
    }
    input.value = "";
    saveData();
}

function saveData(){
    localStorage.setItem('tasks',list.innerHTML);    
}
function showData(){
    list.innerHTML = localStorage.getItem('tasks');
}
showData();

// the toggle function for finished tasks

list.addEventListener('click',function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle('checked');
    }
    saveData();
})

function changeColor(color){
    document.body.style.backgroundColor = color;
}