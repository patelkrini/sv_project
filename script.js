function addTask() {
    const taskInput = document.getElementById('inputTask');
    const taskList = document.getElementById('tasklist');

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value; 
    addDeleteButton(newTask);
    taskList.appendChild(newTask);
    taskInput.value = ''; 
}

function addDeleteButton(parentTask) {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    
    deleteBtn.style.marginLeft = "10px";
    parentTask.appendChild(deleteBtn);

    deleteBtn.onclick = function() {
        parentTask.remove();
    };
}