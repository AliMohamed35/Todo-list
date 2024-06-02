// step 1 get
let inputBox = document.getElementById('input-box');
let listContainer = document.getElementById('list-container');

//step 2 add tasks function
function addTask(){
  if(inputBox.value === ""){
    alert('Please you must enter something')
  } else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

//step 3 saving data and showing it in local storage
function saveData(){
  localStorage.setItem('tasks',li.innerHTML);
}

function showData(){
  listContainer.innerHTML = localStorage.getItem('tasks');
};

//step 4 remove and toggle
listContainer.addEventListener('click' , function(event){
  if(event.target.tagName === "LI"){
    event.target.classList.toggle("checked");
  } else if(event.target.tagName === 'SPAN'){
    event.target.parentElement.remove();
  }
});