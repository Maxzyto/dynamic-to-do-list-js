document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from Local Storage
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => addTaskToDOM(task));
  }

  // Save tasks to Local Storage
  function saveTasks() {
    if (taskList) {
      const tasks = Array.from(taskList.children).map((li) =>
        li.firstChild ? li.firstChild.textContent : ""
      );
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  // Add task to the DOM
  function addTaskToDOM(taskText) {
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
      saveTasks(); // Update Local Storage after removing a task
    };

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Append the list item to the task list
    if (taskList) {
      taskList.appendChild(listItem);
    }
  }

  // Add a task (logic includes DOM and Local Storage updates)
  function addTask() {
    const taskText = taskInput.value.trim();

    // Check if the task input is empty
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // Add task to DOM
    addTaskToDOM(taskText);

    // Save the task to Local Storage
    saveTasks();

    // Clear the task input field
    taskInput.value = "";
  }

  // Attach event listeners
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Load tasks when the DOM is fully loaded
  loadTasks();
});
