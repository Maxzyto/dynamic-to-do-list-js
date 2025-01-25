document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Define the addTask function
  function addTask() {
    if (!taskInput) {
      alert("Task input element not found!");
      return;
    }
    const taskText = taskInput.value.trim();

    // Check if the task input is empty
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // Create a new task list item
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Add an event listener to remove the task
    removeButton.onclick = function () {
      if (taskList) {
        taskList.removeChild(listItem);
      }
    };

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Append the list item to the task list
    if (taskList) {
      taskList.appendChild(listItem);
    } else {
      alert("Task list element not found!");
    }

    // Clear the task input field
    taskInput.value = "";
  }

  // Attach event listeners
  if (addButton) {
    addButton.addEventListener("click", addTask);
  } else {
    alert("Add button element not found!");
  }
  if (taskInput) {
    taskInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  }
});
