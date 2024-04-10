document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    addTaskBtn.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      }
    });
  
    function addTask(taskText) {
      const taskItem = document.createElement("li");
      taskItem.className = "task";
      taskItem.innerText = taskText;
  
      taskItem.addEventListener("click", function() {
        taskItem.classList.toggle("completed");
      });
  
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", function(event) {
        event.stopPropagation();
        taskItem.remove();
      });
  
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
    }
  });
  