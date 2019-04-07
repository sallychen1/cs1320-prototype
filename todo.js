let taskInput = document.getElementById("new-task"); 
let addButton = document.getElementsByTagName("button")[0]; 
let incompleteTaskHolder = document.getElementById("incomplete-tasks");
let completedTasksHolder = document.getElementById("completed-tasks"); 

function createNewTaskElement (taskString) {

    let todo = document.createElement("li");
    let checkBox = document.createElement("input"); 
    let label = document.createElement("label"); 
    let editInput = document.createElement("input");
    let editButton = document.createElement("button"); 
    let editIcon = document.createElement('span')
    editIcon.className = "glyphicon glyphicon-pencil";

    let deleteButton = document.createElement("button"); 
    let deleteIcon = document.createElement('span')
    deleteIcon.className = "glyphicon glyphicon-trash";
    label.innerText = taskString;

    checkBox.type = "checkbox";
    let customBox = document.createElement('span')
    customBox.className = "custom-checkbox"

    editButton.appendChild(editIcon)
    deleteButton.appendChild(deleteIcon);
    checkBox.appendChild(customBox)

    editInput.type = "text";
    editButton.className = "edit";
    deleteButton.className = "delete";

    todo.appendChild(checkBox);
    todo.appendChild(label);
    todo.appendChild(editInput);
    todo.appendChild(editButton);
    todo.appendChild(deleteButton);
    return todo;
}



function addTask () {
    let todo = createNewTaskElement(taskInput.value);
    incompleteTaskHolder.appendChild(todo);
    bindTaskEvents(todo, taskCompleted);
    taskInput.value = "";

}


function editTask () {

    let todo = this.parentNode;

    let editInput = todo.querySelector('input[type=text]');
    let label = todo.querySelector("label");
    let containsClass = todo.classList.contains("editMode");

    if (containsClass) {
        label.innerText = editInput.value;
    } else {
        editInput.value = label.innerText;
    }

    todo.classList.toggle("editMode");
}


 function deleteTask () {
    let todo = this.parentNode;
    let ul = todo.parentNode;
    ul.removeChild(todo);

}

function taskCompleted() {
    let todo = this.parentNode;
    completedTasksHolder.appendChild(todo);
    bindTaskEvents(todo, taskIncomplete);

}


function taskIncomplete() {
    let todo = this.parentNode;
    incompleteTaskHolder.appendChild(todo);
    bindTaskEvents(todo, taskCompleted);
}


addButton.onclick = addTask;
addButton.addEventListener("click", addTask);

function bindTaskEvents (taskListItem, checkBoxEventHandler) {
    console.log("bind list item events");
    let checkBox = taskListItem.querySelector("input[type=checkbox]");
    let editButton = taskListItem.querySelector("button.edit");
    let deleteButton = taskListItem.querySelector("button.delete");

    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
    checkBox.onchange = checkBoxEventHandler;
}

for (let i = 0; i < incompleteTaskHolder.children.length; i++) {
    bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}


for (let i = 0; i < completedTasksHolder.children.length; i++) {
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}

let am = 0;
function changeColor() {
    if (am == 0) {
        document.body.style.background = "linear-gradient(to bottom, #020111 10%,#3a3a52 100%)";
        am = 1;
    } else {
        document.body.style.background = "linear-gradient(to bottom, #82addb 0%,#ebb2b1 100%)";
        am = 0;
    }
    
 }
