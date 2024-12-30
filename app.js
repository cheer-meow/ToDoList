const todoInput = document.getElementById('todo-input');
const addTaskButton = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

// Add a task 
const addTask = () => {
    const taskText = todoInput.value.trim();

    if (taskText !== '') {
        const taskItem = createTaskItem(taskText);
        todoList.appendChild(taskItem);
        todoInput.value = '';
    }
};

// Create new task items
const createTaskItem = (taskText) => {
    const taskItem = document.createElement('li');
    taskItem.className = "todo-item";

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('checkbox');
    checkBox.addEventListener('change', toggleTask);

    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', deleteTask);

    taskItem.appendChild(checkBox);
    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteBtn);

    return taskItem;
};

// Delete task
const deleteTask = (event) => {
    const taskItem = event.target.parentNode;
    todoList.removeChild(taskItem);
};

// Cross out tasks
const toggleTask = (event) => {
    const taskItem = event.target.parentNode;
    taskItem.classList.toggle('completed');
};

// Event listeners
addTaskButton.addEventListener('click', addTask);
todoInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
todoList.addEventListener('change', toggleTask);
//Examples of tasks
const initalTask = ['Buy Groceries', 'PayBills', 'Walk The Dog'];
initalTask.forEach((task) => {
    const taskItem = createTaskItem(task);
    todoList.appendChild(taskItem)
})
