// selecting elements from the HTML page
const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");


// this function creates a new task
function addTask(){

// get the text from input
const text = input.value;

// if input is empty do nothing
if(text === ""){
alert("Please type a task");
return;
}

// create new list item
const li = document.createElement("li");

// put the text inside the list item
li.textContent = text;


// button to mark task completed
const doneBtn = document.createElement("button");
doneBtn.textContent = "Done";

// when click it marks as completed
doneBtn.addEventListener("click", function(){
li.classList.toggle("completed");
});


// button to delete task
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Remove";

// when click it removes the task
deleteBtn.addEventListener("click", function(){
li.remove();
});


// add buttons to the task
li.appendChild(doneBtn);
li.appendChild(deleteBtn);

// add task to the list on page
list.appendChild(li);

// clear input
input.value="";
}


// event listener when user click button
button.addEventListener("click", addTask);
