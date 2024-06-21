document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const taskText = taskInput.value.trim(); // Get task text and trim whitespace

        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = ''; // Clear input field
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                taskSpan.style.textDecoration = 'line-through';
            } else {
                taskSpan.style.textDecoration = 'none';
            }
        });
    }
});