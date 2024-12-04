const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Display existing tasks
tasks.forEach(addTaskToDOM);

function addTaskToDOM(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(li);
}
  

function saveTasks() {
  const tasks = Array.from(taskList.children).map(li => li.firstChild.textContent.trim());
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (!taskText) return alert('Please enter a task!');
  addTaskToDOM(taskText);
  saveTasks();
  taskInput.value = '';
});

window.deleteTask = (button) => {
  button.parentElement.remove();
  saveTasks();
};