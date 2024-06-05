// Get references to elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-items'); 

// Function to create a new task list item
function createTaskItem(text) {
  const listItem = document.createElement('li');
  listItem.textContent = text;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    todoList.removeChild(listItem);
    saveTasks();
  });
  listItem.appendChild(deleteButton);
  return listItem;
}

// Function to load tasks from localStorage
function loadTasks() {
  const storedTasks = localStorage.getItem('todoList');
  if (storedTasks) {
    const tasks = JSON.parse(storedTasks);
    tasks.forEach(task => todoList.appendChild(createTaskItem(task)));
  }
}

// Function to save tasks to localStorage
function saveTasks() {
  const tasks = Array.from(todoList.children).map(listItem => listItem.textContent);
  localStorage.setItem('todoList', JSON.stringify(tasks));
}

// Load tasks on page load
loadTasks();

// Add task on button click
addButton.addEventListener('click', () => {
  const todoText = todoInput.value.trim();
  if (todoText) {
    todoList.appendChild(createTaskItem(todoText));
    todoInput.value = '';
    saveTasks();
  }
});
