// Get DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const prioritySelect = document.querySelector('.priority-select');

// Add event listener to the form
todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const taskText = todoInput.value.trim(); // Get and trim the input value
    const priority = prioritySelect.value; // Get the priority value

    if (taskText !== '') {
        addTodo(taskText, priority); // Add the task to the list
        todoInput.value = ''; // Clear the input field
    }
});

// Function to add a task to the list
function addTodo(taskText, priority) {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo';

    // Create the checkbox input
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `todo-${Date.now()}`;

    // Create the custom checkbox label
    const customCheckbox = document.createElement('label');
    customCheckbox.className = 'custom-checkbox';
    customCheckbox.htmlFor = checkbox.id;
    customCheckbox.innerHTML = `<svg fill="transparent" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>`;

    // Create the task text label
    const taskLabel = document.createElement('label');
    taskLabel.className = 'todo-text';
    taskLabel.htmlFor = checkbox.id;
    taskLabel.textContent = taskText;

    // Create the priority label
    const priorityLabel = document.createElement('span');
    priorityLabel.className = 'priority-label';
    priorityLabel.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--secondary-color)"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>`;

    // Add event listener to the delete button
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(todoItem);
    });

    // Append all elements to the todo item
    todoItem.appendChild(checkbox);
    todoItem.appendChild(customCheckbox);
    todoItem.appendChild(taskLabel);
    todoItem.appendChild(priorityLabel);
    todoItem.appendChild(deleteButton);

    // Append the todo item to the todo list
    todoList.appendChild(todoItem);
}
